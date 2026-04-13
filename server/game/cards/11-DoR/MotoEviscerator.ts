import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class MotoEviscerator extends DrawCard {
    static id = 'moto-eviscerator';

    setupCardAbilities() {
        this.action({
            title: 'Move this character to conflict',
            cost: AbilityDsl.costs.payHonor(1),
            gameAction: AbilityDsl.actions.moveToConflict()
        });
    }
}


export default MotoEviscerator;
