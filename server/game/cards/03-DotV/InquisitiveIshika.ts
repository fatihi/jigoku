import DrawCard from '../../drawcard';
import { Players } from '../../Constants';

class InquisitiveIshika extends DrawCard {
    static id = 'inquisitive-ishika';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.game.isDuringConflict(),
            targetController: Players.Any,
            effect: ability.effects.reduceCost({ match: card => this.game.currentConflict.elements.some(element => card.hasTrait(element)) })
        });
    }
}


export default InquisitiveIshika;
