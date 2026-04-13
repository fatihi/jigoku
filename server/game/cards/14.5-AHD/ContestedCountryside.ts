import DrawCard from '../../drawcard';
import { Players, Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ContestedCountryside extends DrawCard {
    static id = 'contested-countryside';

    setupCardAbilities() {
        this.persistentEffect({
            match: card => card.isConflictProvince(),
            targetLocation: Locations.Provinces,
            condition: context => context.player.isAttackingPlayer(),
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.canBeTriggeredByOpponent()
        });
    }
}


export default ContestedCountryside;
