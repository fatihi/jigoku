import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ShintaoMonastery extends DrawCard {
    static id = 'shintao-monastery';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.additionalCardPlayed(1)
        });
    }
}


export default ShintaoMonastery;
