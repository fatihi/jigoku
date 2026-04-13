import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Phases } from '../../Constants';

class FeedingAnArmy extends DrawCard {
    static id = 'feeding-an-army';

    setupCardAbilities() {
        this.reaction({
            title: 'Put fate on characters',
            when: {
                onPhaseStarted: (event) => event.phase === Phases.Conflict
            },
            cost: [AbilityDsl.costs.breakProvince({ cardCondition: (card) => card.isFaceup() })],
            gameAction: AbilityDsl.actions.placeFate((context) => ({
                target: context.player.cardsInPlay.filter((card) => card.costLessThan(4))
            }))
        });
    }
}


export default FeedingAnArmy;
