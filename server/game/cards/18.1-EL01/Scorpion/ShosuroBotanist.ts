import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';
import { CardTypes, Players } from '../../../Constants';

class ShosuroBotanist extends DrawCard {
    static id = 'shosuro-botanist';

    setupCardAbilities() {
        this.action({
            title: 'Return attachment to owners hand',
            target: {
                cardType: CardTypes.Attachment,
                controller: Players.Self,
                cardCondition: card => !card.hasTrait('weapon'),
                gameAction: AbilityDsl.actions.returnToHand()
            },
            effect: 'return {0} to {1}\'s hand',
            effectArgs: context => [context.target.owner]
        });
    }
}

export default ShosuroBotanist;
