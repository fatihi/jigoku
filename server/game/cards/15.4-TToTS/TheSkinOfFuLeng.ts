import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class TheSkinOfFuLeng extends DrawCard {
    static id = 'the-skin-of-fu-leng';

    setupCardAbilities() {
        this.attachmentConditions({
            myControl: true,
            unique: true
        });

        this.persistentEffect({
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'triggerAbilities',
                restricts: ['charactersWithNoFate', 'nonForcedAbilities']
            })
        });

        this.persistentEffect({
            match: card => card.getFate() === 0,
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.canBeTriggeredByOpponent()
        });
    }
}


export default TheSkinOfFuLeng;
