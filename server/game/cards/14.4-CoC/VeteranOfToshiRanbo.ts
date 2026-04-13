import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class VeteranOfToshiRanbo extends DrawCard {
    static id = 'veteran-of-toshi-ranbo';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.modifyGlory(() => this.controller ? this.controller.getNumberOfFaceupProvinces() : 0)
        });
    }
}


export default VeteranOfToshiRanbo;
