import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, CharacterStatus, CardTypes } from '../../Constants';

class GuardianDojo extends DrawCard {
    static id = 'guardian-dojo';

    setupCardAbilities() {
        this.persistentEffect({
            targetLocation: Locations.Any,
            match: (card, context) => card.type === CardTypes.Character
                && card.isFaceup()
                && context.player.areLocationsAdjacent(context.source.location, card.location),
            effect: [
                AbilityDsl.effects.entersPlayWithStatus(CharacterStatus.Honored)
            ]
        });

        this.persistentEffect({
            targetLocation: Locations.Any,
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'placeFateWhenPlayingCharacterFromProvince',
                restricts: 'adjacentCharacters'
            })
        });
    }
}


export default GuardianDojo;
