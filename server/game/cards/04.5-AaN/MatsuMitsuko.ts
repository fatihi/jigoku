import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';

class MatsuMitsuko extends DrawCard {
    static id = 'matsu-mitsuko';

    setupCardAbilities(ability) {
        this.action({
            title: 'Move a character to the conflict',
            condition: context => this.game.isDuringConflict('military') && context.player && context.player.opponent && context.player.isMoreHonorable(),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Self,
                gameAction: ability.actions.moveToConflict()
            }
        });
    }
}


export default MatsuMitsuko;
