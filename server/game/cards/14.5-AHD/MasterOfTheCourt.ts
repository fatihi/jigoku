import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class MasterOfTheCourt extends DrawCard {
    static id = 'master-of-the-court';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Cancel an event',
            when: {
                onInitiateAbilityEffects: (event, context) => event.card.type === CardTypes.Event && context.source.isHonored
            },
            cost: AbilityDsl.costs.discardStatusTokenFromSelf(),
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default MasterOfTheCourt;
