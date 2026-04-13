import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class MakerOfKeepsakes extends DrawCard {
    static id = 'maker-of-keepsakes';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.cardCannot('receiveDishonorToken')
        });
    }
}


export default MakerOfKeepsakes;
