import DrawCard from '../../drawcard';
import { Phases } from '../../Constants';

class FairAccord extends DrawCard {
    static id = 'fair-accord';

    setupCardAbilities(ability) {
        this.action({
            title: 'Discard favor to gain 2 fate',
            phase: Phases.Dynasty,
            cost: ability.costs.discardImperialFavor(),
            gameAction: ability.actions.gainFate({ amount: 2 })
        });
    }
}


export default FairAccord;
