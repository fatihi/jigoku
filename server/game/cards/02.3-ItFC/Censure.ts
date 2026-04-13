import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class Censure extends DrawCard {
    static id = 'censure';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel an event',
            when: {
                onInitiateAbilityEffects: event => event.card.type === CardTypes.Event
            },
            cannotBeMirrored: true,
            gameAction: AbilityDsl.actions.cancel()
        });
    }

    canPlay(context, playType) {
        if(context.player.imperialFavor !== '') {
            return super.canPlay(context, playType);
        }
        return false;
    }
}


export default Censure;
