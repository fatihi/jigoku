import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class YogoPreserver extends DrawCard {
    static id = 'yogo-preserver';

    setupCardAbilities() {
        this.persistentEffect({
            match: card => card.getType() === CardTypes.Character && card.isDishonored,
            effect: AbilityDsl.effects.addKeyword('sincerity')
        });
    }
}


export default YogoPreserver;

