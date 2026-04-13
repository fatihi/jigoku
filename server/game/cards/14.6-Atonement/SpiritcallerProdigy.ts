import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, Players } from '../../Constants';

class SpiritcallerProdigy extends DrawCard {
    static id = 'spiritcaller-prodigy';

    setupCardAbilities() {
        this.action({
            title: 'Resurrect a character',
            cost: AbilityDsl.costs.sacrificeSelf(),
            target: {
                activePromptTitle: 'Choose a character from your dynasty discard pile',
                location: [Locations.DynastyDiscardPile],
                cardCondition: card => card.isFaction('lion') && card.costLessThan(4),
                controller: Players.Self,
                gameAction: AbilityDsl.actions.putIntoPlay()
            },
            effect: 'call {0} back from the dead'
        });
    }
}


export default SpiritcallerProdigy;
