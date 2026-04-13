import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';

class OtomoCourtier extends DrawCard {
    static id = 'otomo-courtier';

    setupCardAbilities(ability) {
        this.persistentEffect({
            location: Locations.Any,
            condition: context => context.player.opponent && context.player.opponent.imperialFavor !== '',
            effect: ability.effects.cannotParticipateAsAttacker()
        });
    }
}


export default OtomoCourtier;
