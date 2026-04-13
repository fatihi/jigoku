import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, ConflictTypes } from '../../Constants';

class HitoDistrict extends DrawCard {
    static id = 'hito-district';

    setupCardAbilities() {
        this.persistentEffect({
            targetLocation: Locations.Provinces,
            match: (card, context) => card.isProvince && card.location === context.source.location,
            effect: AbilityDsl.effects.cannotHaveConflictsDeclaredOfType(ConflictTypes.Political)
        });
    }
}


export default HitoDistrict;
