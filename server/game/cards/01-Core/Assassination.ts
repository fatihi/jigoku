import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class Assassination extends DrawCard {
    static id = 'assassination';

    setupCardAbilities() {
        this.action({
            title: 'Discard a character',
            condition: () => this.game.isDuringConflict(),
            cost: AbilityDsl.costs.payHonor(3),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.costLessThan(3),
                gameAction: AbilityDsl.actions.discardFromPlay()
            },
            max: AbilityDsl.limit.perRound(1)
        });
    }
}


export default Assassination;
