import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class Retreat extends DrawCard {
    static id = 'retreat';

    setupCardAbilities() {
        this.action({
            title: 'Move a character home',
            condition: () => this.game.isDuringConflict('military'),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Self,
                gameAction: AbilityDsl.actions.sendHome()
            }
        });
    }
}


export default Retreat;
