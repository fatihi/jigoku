import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class CurseOfMisfortune extends DrawCard {
    static id = 'curse-of-misfortune';

    setupCardAbilities() {
        this.persistentEffect({
            match: (card, context) => card.parent && card.parent === context.source.parent && card !== context.source,
            targetController: Players.Any,
            effect: AbilityDsl.effects.addKeyword('restricted')
        });
    }
}


export default CurseOfMisfortune;
