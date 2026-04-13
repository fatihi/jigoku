import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class HaughtyMagistrate extends DrawCard {
    static id = 'haughty-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            effect: AbilityDsl.effects.cannotContribute((conflict, context) => {
                return card => card.getGlory() < context.source.getGlory() && card !== context.source;
            })
        });
    }
}


export default HaughtyMagistrate;
