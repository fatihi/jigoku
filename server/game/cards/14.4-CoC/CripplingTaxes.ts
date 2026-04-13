import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, CardTypes } from '../../Constants';

class CripplingTaxes extends DrawCard {
    static id = 'crippling-taxes';

    setupCardAbilities() {
        this.action({
            title: 'Discard all cards in a province',
            target: {
                location: Locations.Provinces,
                cardType: CardTypes.Province
            },
            gameAction: AbilityDsl.actions.moveCard(context => ({
                destination: Locations.DynastyDiscardPile,
                target: context.target.controller.getDynastyCardsInProvince(context.target.location)
            })),
            effect: 'discard {1}',
            effectArgs: context => [context.target.controller.getDynastyCardsInProvince(context.target.location)]
        });
    }
}


export default CripplingTaxes;
