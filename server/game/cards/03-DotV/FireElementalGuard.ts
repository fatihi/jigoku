import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class FireElementalGuard extends DrawCard {
    static id = 'fire-elemental-guard';

    setupCardAbilities(ability) {
        this.action({
            title: 'Discard an attachment',
            condition: context =>
                this.game.isDuringConflict() &&
                this.game.currentConflict.getNumberOfCardsPlayed(context.player, card => card.hasTrait('spell')) > 2,
            target: {
                cardType: CardTypes.Attachment,
                gameAction: ability.actions.discardFromPlay()
            }
        });
    }
}


export default FireElementalGuard;
