import Effect from './Effect';
import type Game from '../game';

export default class ConflictEffect extends Effect {
    constructor(game: Game, source: any, properties: any, effect: any) {
        super(game, source, properties, effect);
        // Override any erroneous match passed through properties
        this.match = () => true;
    }

    getTargets(): any[] {
        return this.game.currentConflict ? [this.game.currentConflict] : [];
    }
}
