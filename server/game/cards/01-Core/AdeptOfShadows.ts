import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class AdeptOfShadows extends DrawCard {
    static id = 'adept-of-shadows';

    setupCardAbilities() {
        this.action({
            title: 'Return to hand',
            cost: AbilityDsl.costs.payHonor(1),
            gameAction: AbilityDsl.actions.returnToHand()
        });
    }
}


export default AdeptOfShadows;
