import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class TryAgainTomorrow extends DrawCard {
    static id = 'try-again-tomorrow';

    setupCardAbilities(ability) {
        this.action({
            title: 'Send a Character home',
            condition: context =>
                context.player.anyCardsInPlay(card => card.isParticipating() &&
                card.hasTrait('courtier') && card.isHonored),
            cannotBeMirrored: true,
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isAttacking(),
                gameAction: ability.actions.sendHome()
            }
        });
    }
}


export default TryAgainTomorrow;
