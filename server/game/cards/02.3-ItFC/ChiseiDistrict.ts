import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, ConflictTypes } from '../../Constants';

class ChiseiDistrict extends DrawCard {
    static id = 'chisei-district';

    setupCardAbilities() {
        this.persistentEffect({
            targetLocation: Locations.Provinces,
            match: (card, context) => card.isProvince && card.location === context.source.location,
            effect: AbilityDsl.effects.cannotHaveConflictsDeclaredOfType(ConflictTypes.Military)
        });
    }
}


export default ChiseiDistrict;
