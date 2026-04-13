import DrawCard from '../../drawcard';
import { Locations, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class OneOfTheForgotten extends DrawCard {
    static id = 'one-of-the-forgotten';

    setupCardAbilities() {
        this.persistentEffect({
            location: Locations.Any,
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'placeFateWhenPlayingCharacterFromProvince',
                restricts: 'source'
            })
        });

        this.reaction({
            title: 'Gain fate',
            when: {
                onConflictPass: (event, context) => context.player.opponent && event.conflict.attackingPlayer === context.player.opponent && context.player.opponent.cardsInPlay.some(card => card.type === CardTypes.Character && !card.bowed)
            },
            gameAction: AbilityDsl.actions.placeFate()
        });
    }
}


export default OneOfTheForgotten;
