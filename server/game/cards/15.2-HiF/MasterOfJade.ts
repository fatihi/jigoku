import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class MasterOfJade extends DrawCard {
    static id = 'master-of-jade';

    setupCardAbilities() {
        this.action({
            title: 'Lose 2 honor to put a fate on a character',
            cost: AbilityDsl.costs.payHonor(2),
            target: {
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.placeFate({amount: 1})
            }
        });
    }
}


export default MasterOfJade;
