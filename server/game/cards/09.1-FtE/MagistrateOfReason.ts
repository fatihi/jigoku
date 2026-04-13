import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Players } from '../../Constants';

class MagistrateOfReason extends DrawCard {
    static id = 'magistrate-of-reason';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.additionalTriggerCost(context =>
                context.source.type === CardTypes.Character ? [AbilityDsl.costs.payFateToRing(1)] : []
            )
        });
    }
}


export default MagistrateOfReason;
