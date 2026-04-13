import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class WholenessOfTheWorld extends DrawCard {
    static id = 'wholeness-of-the-world';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Keep a claimed ring',
            when: {
                onReturnRing: (event, context) => event.ring.claimedBy === context.player.name
            },
            cannotBeMirrored: true,
            effect: 'prevent {1} from returning to the unclaimed pool',
            effectArgs: context => context.event.ring,
            gameAction: AbilityDsl.actions.cancel(),
            max: AbilityDsl.limit.perRound(1)
        });
    }
}


export default WholenessOfTheWorld;
