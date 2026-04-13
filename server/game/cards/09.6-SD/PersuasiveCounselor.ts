import DrawCard from '../../drawcard';
import { Durations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class PersuasiveCounselor extends DrawCard {
    static id = 'persuasive-counselor';

    setupCardAbilities() {
        this.action({
            title: 'Prevent your events from being cancelled',
            condition: context => context.source.isParticipating(),
            effect: 'prevent their events from being cancelled this conflict',
            gameAction: AbilityDsl.actions.playerLastingEffect(context => ({
                duration: Durations.UntilEndOfConflict,
                targetController: context.player,
                effect: AbilityDsl.effects.eventsCannotBeCancelled()
            }))
        });
    }
}


export default PersuasiveCounselor;
