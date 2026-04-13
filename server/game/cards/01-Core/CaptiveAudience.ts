import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class CaptiveAudience extends DrawCard {
    static id = 'captive-audience';

    setupCardAbilities() {
        this.action({
            title: 'Change the conflict to military',
            cost: AbilityDsl.costs.payHonor(1),
            condition: () => this.game.isDuringConflict('political'),
            effect: 'switch the conflict type to {1}',
            effectArgs: () => 'military',
            handler: () => this.game.currentConflict.switchType()
        });
    }
}


export default CaptiveAudience;
