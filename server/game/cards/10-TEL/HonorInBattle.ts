import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class HonorInBattle extends DrawCard {
    static id = 'honor-in-battle';

    setupCardAbilities() {
        this.action({
            title: 'Honor a character',
            condition: (context) => context.player.getClaimedRings().some((ring) => ring.isConflictType('military')),
            target: {
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.honor()
            }
        });
    }
}


export default HonorInBattle;
