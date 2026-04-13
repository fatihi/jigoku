import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class AkodoMotivator extends DrawCard {
    static id = 'akodo-motivator';

    setupCardAbilities() {
        this.reaction({
            title: 'Opponent discards an equal number of cards at random',
            when: {
                onCardsDiscardedFromHand: (event, context) => {
                    const discardedFromOwnHand = event.player === context.player;
                    const discardedByOpponentsEffect = event.player.opponent === event.context.player;
                    const discardedByRingEffect = event.context.source.type === 'ring';
                    const discardedByCardEffect = event.context.ability.isCardAbility();
                    return (
                        discardedFromOwnHand &&
                        discardedByOpponentsEffect &&
                        (discardedByRingEffect || discardedByCardEffect)
                    );
                }
            },
            gameAction: AbilityDsl.actions.discardAtRandom((context) => ({
                // @ts-ignore
                amount: context.event.amount
            }))
        });
    }
}


export default AkodoMotivator;
