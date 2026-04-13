import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Players } from '../../Constants';

class Deduction extends DrawCard {
    static id = 'deduction';

    setupCardAbilities() {
        this.action({
            title: 'Bow a character',
            condition: () => this.game.currentConflict && this.game.currentConflict.conflictType === 'political',
            cost: AbilityDsl.costs.returnRings(1),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Any,
                cardCondition: (card) => card.costLessThan(4) && card.isParticipating(),
                gameAction: AbilityDsl.actions.bow()
            }
        });
    }
}


export default Deduction;
