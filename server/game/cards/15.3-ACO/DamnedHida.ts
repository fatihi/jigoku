import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class DamnedHida extends DrawCard {
    static id = 'damned-hida';

    setupCardAbilities() {
        this.dire({
            effect: AbilityDsl.effects.modifyMilitarySkill(3)
        });
    }
}


export default DamnedHida;
