import DrawCard from '../../../drawcard';
import { CardTypes } from '../../../Constants';
import AbilityDsl from '../../../abilitydsl';

class MantisBootlegger extends DrawCard {
    static id = 'mantis-bootlegger';

    setupCardAbilities() {
        this.action({
            title: 'Gain 1 fate',
            condition: (context) => this.numCharactersWithAttachments(context) >= 3,
            gameAction: AbilityDsl.actions.gainFate()
        });
    }

    numCharactersWithAttachments(context) {
        return context.player.cardsInPlay.filter(
            (card) => card.getType() === CardTypes.Character && card.attachments.length > 0
        ).length;
    }
}

export default MantisBootlegger;
