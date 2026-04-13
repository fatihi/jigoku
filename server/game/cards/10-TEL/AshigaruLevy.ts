import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Locations } from '../../Constants';

class AshigaruLevy extends DrawCard {
    static id = 'ashigaru-levy';

    setupCardAbilities() {
        this.reaction({
            title: 'Release the levies!',
            when: {
                onCharacterEntersPlay: (event, context) => event.card === context.source
            },
            target: {
                cardType: CardTypes.Character,
                location: [Locations.Provinces, Locations.DynastyDiscardPile],
                cardCondition: (card, context) => card.owner === context.player && card.id === 'ashigaru-levy',
                gameAction: AbilityDsl.actions.putIntoPlay()
            },
            effect: 'put {0} into play.'
        });
    }
}


export default AshigaruLevy;
