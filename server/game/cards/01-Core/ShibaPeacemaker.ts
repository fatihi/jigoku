import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';

class ShibaPeacemaker extends DrawCard {
    static id = 'shiba-peacemaker';

    setupCardAbilities(ability) {
        this.persistentEffect({
            location: Locations.Any,
            effect: ability.effects.cannotParticipateAsAttacker()
        });
    }
}


export default ShibaPeacemaker;
