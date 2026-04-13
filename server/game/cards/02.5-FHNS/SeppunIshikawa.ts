import DrawCard from '../../drawcard';
import { Locations, CardTypes } from '../../Constants';

class SeppunIshikawa extends DrawCard {
    static id = 'seppun-ishikawa';

    setupCardAbilities(ability) {
        this.persistentEffect({
            effect: ability.effects.modifyBothSkills(card => this.getImperialCardsInPlay(card))
        });
    }

    getImperialCardsInPlay(source) {
        return this.game.allCards.reduce((sum, card) => {
            if(card !== source && card.controller === source.controller && card.hasTrait('imperial') && card.isFaceup() &&
                (card.location === Locations.PlayArea || (card.isProvince && !card.isBroken) ||
                (card.isInProvince() && card.type === CardTypes.Holding))) {
                return sum + 1;
            }
            return sum;
        }, 0);
    }
}


export default SeppunIshikawa;
