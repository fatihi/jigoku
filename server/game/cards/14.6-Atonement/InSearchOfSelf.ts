import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class InSearchOfSelf extends DrawCard {
    static id = 'in-search-of-self';

    setupCardAbilities() {
        this.action({
            title: 'Bow attacking character',
            target: {
                cardType: CardTypes.Character,
                cardCondition: (card, context) => card.isAttacking() && card.costLessThan(context.player.getNumberOfFacedownProvinces() + 1),
                gameAction: AbilityDsl.actions.bow()
            }
        });
    }
}


export default InSearchOfSelf;
