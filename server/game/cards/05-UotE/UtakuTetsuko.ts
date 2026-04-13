import DrawCard from '../../drawcard';
import { Players, PlayTypes } from '../../Constants';

class UtakuTetsuko extends DrawCard {
    static id = 'utaku-tetsuko';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            targetController: Players.Opponent,
            effect: ability.effects.increaseCost({
                amount: 1,
                playingTypes: PlayTypes.PlayFromHand
            })
        });
    }
}


export default UtakuTetsuko;
