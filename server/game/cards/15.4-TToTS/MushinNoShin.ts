import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations } from '../../Constants';

class MushinNoShin extends DrawCard {
    static id = 'mushin-no-shin';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel an ability',
            when: {
                onInitiateAbilityEffects: (event, context) =>
                    event.context.ability.isTriggeredAbility() &&
                    event.cardTargets.some(
                        (card) =>
                            card.attachments.length >= 2 &&
                            card.controller === context.player &&
                            card.location === Locations.PlayArea
                    )
            },
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default MushinNoShin;
