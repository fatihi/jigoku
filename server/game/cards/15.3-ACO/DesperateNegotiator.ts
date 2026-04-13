import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class DesperateNegotiator extends DrawCard {
    static id = 'desperate-negotiator';

    setupCardAbilities() {
        this.dire({
            effect: AbilityDsl.effects.modifyBothSkills(2)
        });
    }
}


export default DesperateNegotiator;

