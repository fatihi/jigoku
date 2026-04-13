import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class LoyalOathbreaker extends DrawCard {
    static id = 'loyal-oathbreaker';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.consideredLessHonorable()
        });
    }
}


export default LoyalOathbreaker;
