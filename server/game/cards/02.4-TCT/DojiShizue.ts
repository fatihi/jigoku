import DrawCard from '../../drawcard';
import { Phases } from '../../Constants';

class DojiShizue extends DrawCard {
    static id = 'doji-shizue';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: context => this.game.currentPhase === Phases.Fate && context.player.imperialFavor !== '',
            effect: [
                ability.effects.cardCannot('removeFate'),
                ability.effects.cardCannot('discardFromPlay')
            ]
        });
    }
}


export default DojiShizue;
