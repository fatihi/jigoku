import DrawCard from '../../drawcard';
import { Locations, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ChasingTheSun extends DrawCard {
    static id = 'chasing-the-sun';

    setupCardAbilities() {
        this.action({
            title: 'Move the conflict to another eligible province',
            condition: context => context.player.isAttackingPlayer(),
            cannotBeMirrored: true,
            effect: 'move the conflict to another eligible province',
            gameAction: AbilityDsl.actions.selectCard({
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                message: '{0} moves the conflict to {1}',
                messageArgs: (card, player) => [player, card],
                gameAction: AbilityDsl.actions.moveConflict()
            })
        });
    }
}


export default ChasingTheSun;
