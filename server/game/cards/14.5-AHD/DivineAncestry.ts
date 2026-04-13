import DrawCard from '../../drawcard';
import { Durations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DivineAncestry extends DrawCard {
    static id = 'divine-ancestry';

    setupCardAbilities() {
        this.reaction({
            title: 'Prevent losing honor this phase',
            when: {
                onPhaseStarted: event => event.phase !== 'setup'
            },
            gameAction: AbilityDsl.actions.playerLastingEffect(context => ({
                duration: Durations.UntilEndOfPhase,
                targetController: context.player,
                effect: [
                    AbilityDsl.effects.playerCannot({
                        cannot: 'loseHonor'
                    }),
                    AbilityDsl.effects.playerCannot({
                        cannot: 'takeHonor'
                    })
                ]
            })),
            effect: 'prevent {1} from losing honor this phase',
            effectArgs: context => [context.player]
        });
    }
}


export default DivineAncestry;
