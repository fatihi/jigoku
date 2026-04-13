import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players, CardTypes } from '../../Constants';

class InvocationOfAsh extends DrawCard {
    static id = 'invocation-of-ash';

    setupCardAbilities() {
        this.action({
            title: 'Move to another character',
            cost: AbilityDsl.costs.payHonor(1),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Self,
                gameAction: AbilityDsl.actions.sequential([
                    AbilityDsl.actions.attach(context => ({ attachment: context.source })),
                    AbilityDsl.actions.removeFate()
                ])
            },
            effect: 'move {1} to {0}, then remove a fate from {0}',
            effectArgs: context => context.source
        });
    }
}


export default InvocationOfAsh;
