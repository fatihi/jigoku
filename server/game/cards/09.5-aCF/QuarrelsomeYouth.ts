import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class QuarrelsomeYouth extends DrawCard {
    static id = 'quarrelsome-youth';

    setupCardAbilities() {
        this.reaction({
            title: 'Force opponent to discard a card',
            when: {
                afterConflict: (event, context) =>
                    event.conflict.loser === context.player &&
                    context.source.isAttacking() &&
                    context.player.opponent &&
                    context.player.hand.size() < context.player.opponent.hand.size()
            },
            gameAction: AbilityDsl.actions.discardAtRandom({ amount: 1 })
        });
    }
}


export default QuarrelsomeYouth;
