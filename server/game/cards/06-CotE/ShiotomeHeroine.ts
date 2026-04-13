import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Stages } from '../../Constants';

class ShiotomeHeroine extends DrawCard {
    static id = 'shiotome-heroine';

    setupCardAbilities() {
        this.reaction({
            title: 'Ready this character',
            when: {
                onModifyHonor: (event, context) =>
                    event.amount > 0 && context.player.opponent &&
                    event.player === context.player.opponent && event.context.stage === Stages.Effect
            },
            gameAction: AbilityDsl.actions.ready()
        });
    }
}


export default ShiotomeHeroine;
