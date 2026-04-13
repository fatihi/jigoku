import DrawCard from '../../drawcard';
import { Players } from '../../Constants';

class TogashiTadakatsu extends DrawCard {
    static id = 'togashi-tadakatsu';

    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: Players.Any,
            effect: ability.effects.playerCannot('chooseConflictRing')
        });
    }
}


export default TogashiTadakatsu;

