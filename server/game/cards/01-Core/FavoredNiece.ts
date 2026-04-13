import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';

class FavoredNiece extends DrawCard {
    static id = 'favored-niece';

    setupCardAbilities(ability) {
        this.action({
            title: 'Discard then draw a card',
            limit: ability.limit.perRound(2),
            cost: ability.costs.discardCard({
                location: Locations.Hand,
                targets: true
            }),
            gameAction: ability.actions.draw()
        });
    }
}


export default FavoredNiece;
