const { WebSocketServer } = require('ws');
const { logger } = require('./logger');
const db = require('./db.js');
const EventEmitter = require('events');
const GameService = require('./services/GameService.js');
const env = require('./env.js');
const url = require('url');

class GameRouter extends EventEmitter {
    constructor() {
        super();

        this.workers = {};
        this.gameService = new GameService(db.getDb());
        this.connections = new Map();

        this.init(env.lobbyWsUrl);
        setInterval(this.checkTimeouts.bind(this), 1000 * 60);
    }

    init(listenUrl) {
        const parsed = new URL(listenUrl);
        const port = parseInt(parsed.port, 10) || 6000;

        this.wss = new WebSocketServer({ port });
        logger.info(`GameRouter listening on ws://0.0.0.0:${port}`);

        this.wss.on('connection', (ws, req) => {
            const parsed = url.parse(req.url, true);
            const identity = parsed.query.identity;

            if(!identity) {
                logger.error('WebSocket connection without identity, closing');
                ws.close();
                return;
            }

            logger.info(`Game node connected: ${identity}`);
            this.connections.set(identity, ws);

            ws.on('message', (data) => {
                this.onMessage(identity, data);
            });

            ws.on('close', () => {
                logger.info(`Game node disconnected: ${identity}`);
                this.connections.delete(identity);
            });

            ws.on('error', (err) => {
                logger.error(`WebSocket error from ${identity}: ${err.message}`);
            });
        });
    }

    // External methods
    startGame(game) {
        var node = this.getNextAvailableGameNode();

        if(!node) {
            logger.error('Could not find new node for game');
            return;
        }

        this.gameService.create(game.getSaveState());

        node.numGames++;

        this.sendCommand(node.identity, 'STARTGAME', game);
        return node;
    }

    addSpectator(game, user) {
        this.sendCommand(game.node.identity, 'SPECTATOR', { game: game, user: user });
    }

    getNextAvailableGameNode() {
        const workerList = Object.values(this.workers);
        if(workerList.length === 0) {
            return undefined;
        }

        var returnedWorker = undefined;

        workerList.forEach(worker => {
            if(worker.numGames >= worker.maxGames || worker.disabled) {
                return;
            }

            if(!returnedWorker || returnedWorker.numGames > worker.numGames) {
                returnedWorker = worker;
            }
        });

        return returnedWorker;
    }

    getNodeStatus() {
        return Object.values(this.workers).map(worker => {
            return {
                name: worker.identity,
                numGames: worker.numGames,
                status: worker.disabled ? 'disabled' : 'active'
            };
        });
    }

    disableNode(nodeName) {
        var worker = this.workers[nodeName];
        if(!worker) {
            return false;
        }

        worker.disabled = true;

        return true;
    }

    enableNode(nodeName) {
        var worker = this.workers[nodeName];
        if(!worker) {
            return false;
        }

        worker.disabled = false;

        return true;
    }

    notifyFailedConnect(game, username) {
        if(!game.node) {
            return;
        }

        this.sendCommand(game.node.identity, 'CONNECTFAILED', { gameId: game.id, username: username });
    }

    closeGame(game) {
        if(!game.node) {
            return;
        }

        this.sendCommand(game.node.identity, 'CLOSEGAME', { gameId: game.id });
    }

    // Events
    onMessage(identity, data) {
        var identityStr = identity.toString();

        var worker = this.workers[identityStr];

        var message = undefined;

        try {
            message = JSON.parse(data.toString());
        } catch(err) {
            logger.info(err);
            return;
        }

        switch(message.command) {
            case 'HELLO':
                this.emit('onWorkerStarted', identityStr);
                this.workers[identityStr] = {
                    identity: identityStr,
                    maxGames: message.arg.maxGames,
                    numGames: 0,
                    address: message.arg.address,
                    port: message.arg.port,
                    protocol: message.arg.protocol
                };
                worker = this.workers[identityStr];

                this.emit('onNodeReconnected', identityStr, message.arg.games);

                worker.numGames = Object.keys(message.arg.games).length;

                break;
            case 'PONG':
                if(worker) {
                    worker.pingSent = undefined;
                } else {
                    logger.error('PONG received for unknown worker');
                }
                break;
            case 'GAMEWIN':
                this.gameService.update(message.arg.game);
                break;
            case 'GAMECLOSED':
                if(worker) {
                    worker.numGames--;
                } else {
                    logger.error('Got close game for non existent worker', identity);
                }

                this.emit('onGameClosed', message.arg.game);

                break;
            case 'PLAYERLEFT':
                if(!message.arg.spectator) {
                    this.gameService.update(message.arg.game);
                }

                this.emit('onPlayerLeft', message.arg.gameId, message.arg.player);

                break;
        }

        if(worker) {
            worker.lastMessage = Date.now();
        }
    }

    // Internal methods
    sendCommand(identity, command, arg) {
        const ws = this.connections.get(identity);
        if(!ws || ws.readyState !== 1) {
            logger.error(`Cannot send ${command} to ${identity}: not connected`);
            return;
        }

        try {
            ws.send(JSON.stringify({ command: command, arg: arg }));
        } catch(err) {
            logger.error(`Error sending command: ${err}`);
        }
    }

    checkTimeouts() {
        var currentTime = Date.now();
        const pingTimeout = 1 * 60 * 1000;

        Object.values(this.workers).forEach(worker => {
            if(worker.pingSent && currentTime - worker.pingSent > pingTimeout) {
                logger.info('worker', worker.identity + ' timed out');
                delete this.workers[worker.identity];
                this.emit('onWorkerTimedOut', worker.identity);
            } else if(!worker.pingSent) {
                if(currentTime - worker.lastMessage > pingTimeout) {
                    worker.pingSent = currentTime;
                    this.sendCommand(worker.identity, 'PING');
                }
            }
        });
    }

    close() {
        if(this.wss) {
            this.wss.close();
        }
    }
}

module.exports = GameRouter;
