import DrawCard from '../../drawcard';
import { TargetModes } from '../../Constants';

class IdeTrader extends DrawCard {
    static id = 'ide-trader';

    setupCardAbilities(ability) {
        this.reaction({
            title: 'Gain a fate/card',
            when: {
                onMoveToConflict: (event, context) => context.source.isParticipating()
            },
            collectiveTrigger: true,
            limit: ability.limit.perConflict(1),
            target: {
                mode: TargetModes.Select,
                choices: {
                    'Gain 1 fate': ability.actions.gainFate(),
                    'Draw 1 card': ability.actions.draw()
                }
            }
        });
    }
}


export default IdeTrader;
