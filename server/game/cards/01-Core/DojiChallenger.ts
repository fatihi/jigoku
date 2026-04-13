import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';

class DojiChallenger extends DrawCard {
    static id = 'doji-challenger';

    setupCardAbilities(ability) {
        this.action({
            title: 'Move a character into the conflict',
            condition: context => context.source.isAttacking(),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Opponent,
                gameAction: ability.actions.moveToConflict()
            }
        });
    }
}


export default DojiChallenger;
