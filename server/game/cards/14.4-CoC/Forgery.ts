import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class Forgery extends DrawCard {
    static id = 'forgery';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel an event',
            when: {
                onInitiateAbilityEffects: (event, context) => event.card.type === CardTypes.Event && context.player.opponent &&
                    context.player.isLessHonorable()
            },
            cannotBeMirrored: true,
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default Forgery;
