import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class CaravanGuard extends DrawCard {
    static id = 'caravan-guard';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.fateCostToAttack()
        });
    }
}


export default CaravanGuard;

