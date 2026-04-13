import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class FlankTheEnemy extends DrawCard {
    static id = 'flank-the-enemy';

    setupCardAbilities() {
        this.action({
            title: 'Bow a character',
            condition: context => context.player.opponent && context.game.isDuringConflict() && context.game.currentConflict.hasMoreParticipants(context.player),
            target: {
                player: Players.Opponent,
                cardType: CardTypes.Character,
                controller: Players.Opponent,
                cardCondition: card => card.isParticipating(),
                gameAction: AbilityDsl.actions.bow()
            }
        });
    }
}


export default FlankTheEnemy;
