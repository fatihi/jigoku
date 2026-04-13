import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class FestivalForTheFortunes extends DrawCard {
    static id = 'festival-for-the-fortunes';

    setupCardAbilities() {
        this.action({
            title: 'Honor each character',
            effect: 'honor each character',
            gameAction:
                AbilityDsl.actions.honor(() => ({
                    target: this.game.findAnyCardsInPlay(card => card.getType() === CardTypes.Character)
                }))
        });
    }
}


export default FestivalForTheFortunes;
