import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';

class DoomedShugenja extends DrawCard {
    static id = 'doomed-shugenja';

    setupCardAbilities(ability) {
        this.persistentEffect({
            location: Locations.Any,
            effect: ability.effects.playerCannot({
                cannot: 'placeFateWhenPlayingCharacterFromProvince',
                restricts: 'source'
            })
        });
    }
}


export default DoomedShugenja;
