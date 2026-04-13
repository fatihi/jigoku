import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Players } from '../../Constants';

class NimbleNoyan extends DrawCard {
    static id = 'nimble-noyan';

    setupCardAbilities() {
        this.dire({
            condition: context => context.source.isParticipating(),
            targetController: Players.Any,
            match: card => card.type === CardTypes.Character && card.isParticipating(),
            effect: AbilityDsl.effects.canContributeWhileBowed()
        });
    }
}


export default NimbleNoyan;
