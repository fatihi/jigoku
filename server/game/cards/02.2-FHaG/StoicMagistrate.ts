import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class StoicMagistrate extends DrawCard {
    static id = 'stoic-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isDefending(),
            effect: AbilityDsl.effects.cannotContribute(() => {
                return card => card.costLessThan(3);
            })
        });
    }
}


export default StoicMagistrate;
