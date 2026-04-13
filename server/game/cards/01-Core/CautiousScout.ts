import DrawCard from '../../drawcard';
import { Locations, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class CautiousScout extends DrawCard {
    static id = 'cautious-scout';

    setupCardAbilities() {
        this.persistentEffect({
            match: card => card.isConflictProvince(),
            targetLocation: Locations.Provinces,
            targetController: Players.Opponent,
            condition: context => context.source.isAttacking() && context.game.currentConflict.getNumberOfParticipantsFor('attacker') === 1,
            effect: AbilityDsl.effects.blank()
        });
    }
}


export default CautiousScout;
