import DrawCard from '../../drawcard';
import { Players } from '../../Constants';

class MasterOfTheSpear extends DrawCard {
    static id = 'master-of-the-spear';

    setupCardAbilities(ability) {
        this.action({
            title: 'Send home character',
            condition: () => this.isAttacking(),
            target: {
                player: Players.Opponent,
                activePromptTitle: 'Choose a character to send home',
                controller: Players.Opponent,
                gameAction: ability.actions.sendHome()
            }
        });
    }
}


export default MasterOfTheSpear;
