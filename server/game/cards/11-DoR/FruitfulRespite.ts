import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class FruitfulRespite extends DrawCard {
    static id = 'fruitful-respite';

    setupCardAbilities() {
        this.reaction({
            title: 'Gain fate',
            when: {
                onConflictPass: (event, context) => context.player.opponent && event.conflict.attackingPlayer === context.player.opponent && context.player.opponent.cardsInPlay.some(card => card.type === CardTypes.Character && !card.bowed)
            },
            gameAction: AbilityDsl.actions.gainFate({ amount: 2 })
        });
    }
}


export default FruitfulRespite;
