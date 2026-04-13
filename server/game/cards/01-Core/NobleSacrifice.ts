import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class NobleSacrifice extends DrawCard {
    static id = 'noble-sacrifice';

    setupCardAbilities() {
        this.action({
            title: 'Sacrifice honored character to discard dishonored one',
            cost: AbilityDsl.costs.sacrifice({
                cardType: CardTypes.Character,
                cardCondition: card => card.isHonored
            }),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isDishonored,
                gameAction: AbilityDsl.actions.discardFromPlay()
            }
        });
    }
}


export default NobleSacrifice;
