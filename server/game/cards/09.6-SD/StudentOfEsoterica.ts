import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class StudentOfEsoterica extends DrawCard {
    static id = 'student-of-esoterica';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.alternateFatePool(card => {
                if(card.hasTrait('spell')) {
                    return this;
                }
                return false;
            })
        });
    }
}


export default StudentOfEsoterica;
