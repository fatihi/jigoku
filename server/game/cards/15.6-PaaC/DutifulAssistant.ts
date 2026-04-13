import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class DutifulAssistant extends DrawCard {
    static id = 'dutiful-assistant';

    setupCardAbilities() {
        this.whileAttached({
            condition: context => context.source.parent && context.source.parent.isHonored,
            effect: AbilityDsl.effects.modifyGlory(2)
        });
    }
}


export default DutifulAssistant;
