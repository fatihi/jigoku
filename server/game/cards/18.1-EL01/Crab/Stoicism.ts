import DrawCard from '../../../drawcard';
import { Durations } from '../../../Constants';
import AbilityDsl from '../../../abilitydsl';

class Stoicism extends DrawCard {
    static id = 'stoicism';

    setupCardAbilities() {
        this.action({
            title: 'Ignore the effects of status tokens',
            condition: context => context.game.isDuringConflict(),
            gameAction: AbilityDsl.actions.conflictLastingEffect({
                duration: Durations.UntilEndOfConflict,
                effect: AbilityDsl.effects.conflictIgnoreStatusTokens()
            }),
            effect: 'ignore the effects of status tokens until the end of the conflict'
        });
    }
}


export default Stoicism;
