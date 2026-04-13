import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ShosuroSadako extends DrawCard {
    static id = 'shosuro-sadako';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isDishonored,
            effect: AbilityDsl.effects.honorStatusReverseModifySkill()
        });
    }
}


export default ShosuroSadako;
