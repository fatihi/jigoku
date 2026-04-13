import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { TargetModes, CardTypes, Players } from '../../Constants';

class EleganceAndGrace extends DrawCard {
    static id = 'elegance-and-grace';

    setupCardAbilities() {
        this.action({
            title: 'Ready characters',
            target: {
                mode: TargetModes.MaxStat,
                activePromptTitle: 'Choose characters',
                cardStat: (card) => card.getCost(),
                maxStat: () => 6,
                numCards: 2,
                cardType: CardTypes.Character,
                controller: Players.Any,
                cardCondition: (card) => card.isHonored,
                gameAction: AbilityDsl.actions.ready()
            }
        });
    }
}


export default EleganceAndGrace;
