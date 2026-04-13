import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class OpenWindow extends DrawCard {
    static id = 'open-window';

    setupCardAbilities() {
        this.action({
            title: 'Move a Shinobi into the conflict',
            target: {
                cardType: CardTypes.Character,
                controller: Players.Self,
                cardCondition: card => card.hasTrait('shinobi'),
                gameAction: AbilityDsl.actions.moveToConflict()
            }
        });
    }
}


export default OpenWindow;
