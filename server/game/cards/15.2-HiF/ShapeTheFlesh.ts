import AbilityDsl from '../../abilitydsl';
import DrawCard from '../../drawcard';

class ShapeTheFlesh extends DrawCard {
    static id = 'shape-the-flesh';

    setupCardAbilities() {
        this.whileAttached({
            effect: [
                AbilityDsl.effects.cardCannot('honor'),
                AbilityDsl.effects.addKeyword('covert')
            ]
        });
    }

    isTemptationsMaho() {
        return true;
    }
}


export default ShapeTheFlesh;

