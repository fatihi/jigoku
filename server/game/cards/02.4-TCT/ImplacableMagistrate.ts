import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ImplacableMagistrate extends DrawCard {
    static id = 'implacable-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            effect: AbilityDsl.effects.cannotContribute((conflict, context) => {
                return card => !card.isHonored && card !== context.source;
            })
        });
    }
}


export default ImplacableMagistrate;
