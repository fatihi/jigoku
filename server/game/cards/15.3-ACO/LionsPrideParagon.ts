import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';


class LionsPrideParagon extends DrawCard {
    static id = 'lion-s-pride-paragon';

    setupCardAbilities() {
        this.dire({
            effect: AbilityDsl.effects.doesNotBow()
        });
    }
}


export default LionsPrideParagon;
