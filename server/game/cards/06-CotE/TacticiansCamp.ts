import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class TacticiansCamp extends DrawCard {
    static id = 'tactician-s-camp';

    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card.getType() === CardTypes.Character && card.isHonored,
            effect: ability.effects.modifyMilitarySkill(1)
        });
    }
}


export default TacticiansCamp;

