import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { TargetModes, CardTypes } from '../../Constants';

class UnfulfilledDuty extends DrawCard {
    static id = 'unfulfilled-duty';

    setupCardAbilities() {
        this.action({
            title: 'Ready characters',
            target: {
                mode: TargetModes.MaxStat,
                activePromptTitle: 'Choose characters',
                cardStat: (card) => card.getCost(),
                maxStat: () => 6,
                numCards: 0,
                cardType: CardTypes.Character,
                cardCondition: (card) => card.getFate() === 0,
                gameAction: AbilityDsl.actions.ready()
            }
        });
    }
}


export default UnfulfilledDuty;
