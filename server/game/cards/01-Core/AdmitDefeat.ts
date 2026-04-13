import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class AdmitDefeat extends DrawCard {
    static id = 'admit-defeat';

    setupCardAbilities() {
        this.action({
            title: 'Bow a character',
            condition: () =>
                this.game.isDuringConflict() &&
                this.game.currentConflict.getNumberOfParticipantsFor('defender') === 1,
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isDefending(),
                gameAction: AbilityDsl.actions.bow()
            }
        });
    }
}


export default AdmitDefeat;
