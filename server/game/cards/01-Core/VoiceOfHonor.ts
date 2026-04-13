import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class VoiceOfHonor extends DrawCard {
    static id = 'voice-of-honor';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel an event',
            when: {
                onInitiateAbilityEffects: (event, context) => event.card.type === CardTypes.Event && context.player.opponent &&
                                                            context.player.getNumberOfCardsInPlay(card => card.isHonored) >
                                                            context.player.opponent.getNumberOfCardsInPlay(card => card.isHonored)
            },
            cannotBeMirrored: true,
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default VoiceOfHonor;

