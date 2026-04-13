import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players, CardTypes } from '../../Constants';

class RideOn extends DrawCard {
    static id = 'ride-on';

    setupCardAbilities() {
        this.action({
            title: 'Move a character into or out of the conflict',
            target: {
                cardType: CardTypes.Character,
                controller: Players.Self,
                cardCondition: card => card.hasTrait('cavalry'),
                gameAction: AbilityDsl.actions.multiple([
                    AbilityDsl.actions.sendHome(),
                    AbilityDsl.actions.moveToConflict()
                ])
            }
        });
    }
}


export default RideOn;
