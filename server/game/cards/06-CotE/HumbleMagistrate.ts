import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class HumbleMagistrate extends DrawCard {
    static id = 'humble-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            effect: AbilityDsl.effects.cannotContribute(() => {
                return card => card.printedCost >= 4;
            })
        });
    }
}


export default HumbleMagistrate;
