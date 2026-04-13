import DrawCard from '../../../drawcard';
import { Locations, CardTypes } from '../../../Constants';
import AbilityDsl from '../../../abilitydsl';

class AshigaruCompany extends DrawCard {
    static id = 'ashigaru-company';

    setupCardAbilities() {
        this.reaction({
            title: 'Search your conflict deck',
            when: {
                onCardAttached: (event, context) => event.card === context.source && event.originalLocation !== Locations.PlayArea
            },
            effect: 'look at the top five cards of their deck',
            gameAction: AbilityDsl.actions.deckSearch({
                amount: 5,
                cardCondition: card => card.hasTrait('follower') && card.type === CardTypes.Attachment,
                gameAction: AbilityDsl.actions.moveCard({
                    destination: Locations.Hand
                }),
                shuffle: false,
                placeOnBottomInRandomOrder: true
            })
        });
    }
}


export default AshigaruCompany;
