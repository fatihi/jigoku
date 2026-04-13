import DrawCard from '../../drawcard';
import { Players, CardTypes, Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class AsahinaPeacekeeper extends DrawCard {
    static id = 'asahina-peacekeeper';

    setupCardAbilities() {
        this.persistentEffect({
            targetController: Players.Any,
            targetLocation: Locations.PlayArea,
            match: card => card.getType() === CardTypes.Character,
            effect: AbilityDsl.effects.cardCostToAttackMilitary(1)
        });
    }
}


export default AsahinaPeacekeeper;
