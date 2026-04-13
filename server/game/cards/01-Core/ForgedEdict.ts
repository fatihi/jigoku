import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class ForgedEdict extends DrawCard {
    static id = 'forged-edict';

    setupCardAbilities(ability) {
        this.wouldInterrupt({
            title: 'Cancel an event',
            when: {
                onInitiateAbilityEffects: event => event.card.type === CardTypes.Event
            },
            cannotBeMirrored: true,
            cost: ability.costs.dishonor({ cardCondition: card => card.hasTrait('courtier') }),
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default ForgedEdict;
