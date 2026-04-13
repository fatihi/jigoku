import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class HitsuDoDisciple extends DrawCard {
    static id = 'hitsu-do-disciple';

    setupCardAbilities() {
        this.action({
            title: 'Dishonor a character',
            condition: context => context.source.game.isDuringConflict('military') &&
                context.source.isParticipating() &&
                this.game.currentConflict.getNumberOfCardsPlayed(context.player) >= 3,
            target: {
                cardType: CardTypes.Character,
                cardCondition: (card, context) => card.isParticipating() && card !== context.source,
                gameAction: AbilityDsl.actions.dishonor()
            }
        });
    }
}


export default HitsuDoDisciple;
