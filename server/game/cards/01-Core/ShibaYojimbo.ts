import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations } from '../../Constants';

class ShibaYojimbo extends DrawCard {
    static id = 'shiba-yojimbo';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel ability',
            when: {
                onInitiateAbilityEffects: (event, context) => event.context.ability.isTriggeredAbility() && event.cardTargets.some(card => (
                    card.hasTrait('shugenja') && card.controller === context.player && card.location === Locations.PlayArea)
                )
            },
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default ShibaYojimbo;
