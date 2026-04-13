import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';

class LiquidCourage extends DrawCard {
    static id = 'liquid-courage';

    setupCardAbilities() {
        this.whileAttached({
            effect: AbilityDsl.effects.addKeyword('pride')
        });

        this.whileAttached({
            effect: [
                AbilityDsl.effects.mustBeDeclaredAsAttackerIfType('military'),
                AbilityDsl.effects.mustBeDeclaredAsDefender('military')
            ]
        });
    }
}

export default LiquidCourage;
