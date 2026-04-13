import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ButcherOfTheFallen extends DrawCard {
    static id = 'butcher-of-the-fallen';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            match: (card, context) => card.getMilitarySkill() < context.player.getProvinces(a => !a.isBroken).length,
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.cardCannot('declareAsDefender')});
    }
}

export default ButcherOfTheFallen;
