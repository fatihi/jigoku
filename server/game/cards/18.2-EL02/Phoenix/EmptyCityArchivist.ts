import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';
import { Locations } from '../../../Constants';

class SearchTheArchives extends DrawCard {
    static id = 'empty-city-archivist';

    setupCardAbilities() {
        this.reaction({
            title: 'Search your deck for a card',
            when: {
                onCardAttached: (event, context) => event.card === context.source && event.originalLocation !== Locations.PlayArea
            },
            gameAction: AbilityDsl.actions.deckSearch({
                amount: 4,
                cardCondition: (card, context) => card.hasTrait('spell') || card.hasTrait('kiho') || (context.source.parent && context.source.parent.hasTrait('scholar')),
                placeOnBottomInRandomOrder: true,
                shuffle: false,
                gameAction: AbilityDsl.actions.moveCard({
                    destination: Locations.Hand
                })
            })
        });
    }
}


export default SearchTheArchives;
