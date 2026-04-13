import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, CardTypes } from '../../Constants';

class YogoKikuyo extends DrawCard {
    static id = 'yogo-kikuyo';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel a spell',
            when: {
                onInitiateAbilityEffects: (event, context) =>
                    this.game.isDuringConflict() && event.card.type === CardTypes.Event &&
                    event.card.hasTrait('spell') && event.card.controller === context.player.opponent
            },
            cost: AbilityDsl.costs.putSelfIntoPlay(),
            location: Locations.Hand,
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default YogoKikuyo;
