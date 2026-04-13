import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DispatchToNowhere extends DrawCard {
    static id = 'dispatch-to-nowhere';

    setupCardAbilities() {
        this.action({
            title: 'Discard a character with no fate',
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.getFate() === 0,
                gameAction: AbilityDsl.actions.discardFromPlay()
            }
        });
    }
}


export default DispatchToNowhere;
