import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';

class StewardOfLaw extends DrawCard {
    static id = 'steward-of-law';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: context => context.source.isParticipating(),
            targetController: Players.Any,
            match: card => card.getType() === CardTypes.Character,
            effect: ability.effects.cardCannot('receiveDishonorToken')
        });
    }
}


export default StewardOfLaw;

