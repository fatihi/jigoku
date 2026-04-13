import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class InHarmony extends DrawCard {
    static id = 'in-harmony';

    setupCardAbilities() {
        this.whileAttached({
            effect: AbilityDsl.effects.cardCannot({
                cannot: 'removeFate',
                restricts: 'cardAndRingEffects'
            })
        });
    }

    canPlay(context) {
        return context.player.getClaimedRings().length >= 1;
    }
}


export default InHarmony;
