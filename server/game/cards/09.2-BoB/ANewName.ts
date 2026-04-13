import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ANewName extends DrawCard {
    static id = 'a-new-name';

    setupCardAbilities() {
        this.whileAttached({
            effect: [
                AbilityDsl.effects.addTrait('courtier'),
                AbilityDsl.effects.addTrait('bushi')
            ]
        });
    }
}


export default ANewName;
