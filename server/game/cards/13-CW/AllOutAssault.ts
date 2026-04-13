import DrawCard from '../../drawcard';
import { Durations, Players, Phases } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class AllOutAssault extends DrawCard {
    static id = 'all-out-assault';

    setupCardAbilities() {
        this.reaction({
            title: 'Both players must attack with as many characters as they can every conflict',
            when: {
                onPhaseStarted: event => event.phase === Phases.Conflict
            },
            effect: 'force each player to attack with as many characters as they can each conflict!',
            gameAction: AbilityDsl.actions.playerLastingEffect({
                duration: Durations.UntilEndOfPhase,
                targetController: Players.Any,
                effect: AbilityDsl.effects.mustDeclareMaximumAttackers()
            })
        });
    }
}


export default AllOutAssault;
