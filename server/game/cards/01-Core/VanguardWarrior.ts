import AbilityDsl from '../../abilitydsl';
import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class VanguardWarrior extends DrawCard {
    static id = 'vanguard-warrior';

    setupCardAbilities() {
        this.action({
            title: 'Sacrifice to put fate on one character',
            cost: AbilityDsl.costs.sacrificeSelf(),
            target: {
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.placeFate()
            }
        });
    }
}


export default VanguardWarrior;
