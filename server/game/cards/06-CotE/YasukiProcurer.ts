import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Durations, CardTypes } from '../../Constants';

class YasukiProcurer extends DrawCard {
    static id = 'yasuki-procurer';

    setupCardAbilities() {
        this.action({
            title: 'Reduce the cost of the next attachment or character',
            cost: AbilityDsl.costs.dishonorSelf(),
            effect: 'reduce the cost of their next attachment or character played this phase by 1',
            gameAction: AbilityDsl.actions.playerLastingEffect(context => ({
                targetController: context.player,
                duration: Durations.UntilEndOfPhase,
                effect: AbilityDsl.effects.reduceCost({
                    match: card => card.type === CardTypes.Attachment || card.type === CardTypes.Character,
                    limit: AbilityDsl.limit.fixed(1)
                })
            }))
        });
    }
}


export default YasukiProcurer;
