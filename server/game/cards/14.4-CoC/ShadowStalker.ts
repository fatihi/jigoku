import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ShadowStalker extends DrawCard {
    static id = 'shadow-stalker';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.player.honor <= 6,
            effect: AbilityDsl.effects.modifyBothSkills(2)
        });
    }
}


export default ShadowStalker;

