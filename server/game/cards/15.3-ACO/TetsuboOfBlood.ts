import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class TetsuboOfBlod extends DrawCard {
    static id = 'tetsubo-of-blood';

    setupCardAbilities() {
        this.whileAttached({
            effect: AbilityDsl.effects.cardCannot('honor')
        });
    }

    isTemptationsMaho() {
        return true;
    }
}


export default TetsuboOfBlod;
