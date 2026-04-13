import DrawCard from '../../drawcard';
import { Players } from '../../Constants';

class GuestOfHonor extends DrawCard {
    static id = 'guest-of-honor';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: context => context.source.isParticipating(),
            targetController: Players.Opponent,
            effect: ability.effects.playerCannot({
                cannot: 'play',
                restricts: 'events'
            })
        });
    }
}


export default GuestOfHonor;
