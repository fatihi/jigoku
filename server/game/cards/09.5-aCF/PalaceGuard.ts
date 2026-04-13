import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class PalaceGuard extends DrawCard {
    static id = 'palace-guard';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.player.opponent && context.player.opponent.isLessHonorable(),
            effect: AbilityDsl.effects.cardCannot('declareAsAttacker')
        });
    }
}


export default PalaceGuard;
