import DrawCard from '../../drawcard';
import { Phases } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class RingOfBinding extends DrawCard {
    static id = 'ring-of-binding';

    setupCardAbilities() {
        this.whileAttached({
            condition: (context) => context.game.currentPhase === Phases.Fate && context.player.firstPlayer,
            effect: [
                AbilityDsl.effects.cardCannot('removeFate'),
                AbilityDsl.effects.cardCannot('discardFromPlay')
            ]
        });
    }
}


export default RingOfBinding;
