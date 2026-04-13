import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Locations, Players } from '../../Constants';

class MidnightBuilder extends DrawCard {
    static id = 'midnight-builder';

    setupCardAbilities() {
        this.persistentEffect({
            targetLocation: Locations.Provinces,
            targetController: Players.Self,
            match: card => card.type === CardTypes.Holding,
            effect: AbilityDsl.effects.modifyProvinceStrengthBonus(2)
        });

        this.dire({
            targetLocation: Locations.Provinces,
            targetController: Players.Self,
            match: card => card.type === CardTypes.Holding,
            effect: AbilityDsl.effects.increaseLimitOnAbilities()
        });
    }
}


export default MidnightBuilder;
