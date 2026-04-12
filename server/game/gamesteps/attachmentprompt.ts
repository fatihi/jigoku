import { UiPrompt } from './UiPrompt';
import GameActions = require('../GameActions/GameActions');
import { AbilityContext } from '../AbilityContext';
import { Players } from '../Constants';
import type Player from '../player';

class AttachmentPrompt extends UiPrompt {
    player: Player;
    attachmentCard: any;
    playingType: string;

    constructor(game: any, player: Player, attachmentCard: any, playingType: string) {
        super(game);
        this.player = player;
        this.attachmentCard = attachmentCard;
        this.playingType = playingType;
    }

    continue(): boolean {
        this.game.promptForSelect(this.player, {
            source: 'Play Attachment',
            activePromptTitle: 'Select target for attachment',
            controller: Players.Self,
            gameAction: GameActions.attach({ attachment: this.attachmentCard }),
            onSelect: (player: Player, card: any) => {
                GameActions.attach({ attachment: this.attachmentCard }).resolve(card, new AbilityContext({ game: this.game, player: this.player, source: card }));
                return true;
            }
        });
        return true;
    }
}

export default AttachmentPrompt;
