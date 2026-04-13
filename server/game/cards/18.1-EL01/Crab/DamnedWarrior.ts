import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';

class DamnedWarrior extends DrawCard {
    static id = 'damned-warrior';

    setupCardAbilities() {
        this.action({
            title: 'Ready this character',
            cost: AbilityDsl.costs.taintSelf(),
            gameAction: AbilityDsl.actions.ready()
        });
    }
}


export default DamnedWarrior;
