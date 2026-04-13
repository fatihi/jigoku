import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players } from '../../Constants';

class ShosuroDenmaru extends DrawCard {
    static id = 'shosuro-denmaru';

    setupCardAbilities() {
        this.persistentEffect({
            targetController: Players.Opponent,
            match: (card) => card.isHonored,
            effect: AbilityDsl.effects.setBaseGlory(0)
        });
    }
}


export default ShosuroDenmaru;
