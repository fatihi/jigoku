import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class WatchtowerOfValor extends DrawCard {
    static id = 'watchtower-of-valor';

    setupCardAbilities() {
        this.reaction({
            title: 'Draw a card',
            when: {
                afterConflict: (event, context) => {
                    if(context.player.isDefendingPlayer() && event.conflict.winner === context.player) {
                        let cards = event.conflict.getConflictProvinces().map(a => context.player.getDynastyCardsInProvince(a.location));
                        return cards.some(c => c.some(card => card.isFaceup() && card.type === CardTypes.Holding && card.hasTrait('kaiu-wall')));
                    }
                    return false;
                }

            },
            gameAction: AbilityDsl.actions.draw(),
            limit: AbilityDsl.limit.unlimitedPerConflict()
        });
    }
}


export default WatchtowerOfValor;
