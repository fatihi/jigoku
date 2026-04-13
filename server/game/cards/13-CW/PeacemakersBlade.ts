import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class PeacemakersBlade extends DrawCard {
    static id = 'peacemaker-s-blade';

    setupCardAbilities() {
        this.whileAttached({
            effect: AbilityDsl.effects.cardCannot('declareAsAttacker')
        });
    }

    canPlayOn(card) {
        return (card.getType() === CardTypes.Character && !card.isAttacking()) && super.canPlayOn(card);
    }
}


export default PeacemakersBlade;

