import DrawCard from '../../drawcard';
import { Players } from '../../Constants';

class TheStoneOfSorrows extends DrawCard {
    static id = 'the-stone-of-sorrows';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: context => context.source.parent && !context.source.parent.bowed,
            targetController: Players.Opponent,
            effect: ability.effects.playerCannot('takeFateFromRings')
        });
    }
}


export default TheStoneOfSorrows;
