import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Durations } from '../../Constants';

class HidaOUshi extends DrawCard {
    static id = 'hida-o-ushi';

    setupCardAbilities() {
        this.reaction({
            title: 'Gain additional military conflict',
            effect: 'allow {1} to declare an additional military conflict this phase',
            effectArgs: context => [context.player],
            when: { afterConflict: (event, context) => context.player.isDefendingPlayer() && event.conflict.winner === context.player },
            gameAction: AbilityDsl.actions.playerLastingEffect(context => ({
                targetController: context.player,
                duration: Durations.UntilEndOfPhase,
                effect: AbilityDsl.effects.additionalConflict('military')
            })),
            max: AbilityDsl.limit.perPhase(1)
        });
    }
}


export default HidaOUshi;
