import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players } from '../../Constants';

class DojiKuzuNobu extends DrawCard {
    static id = 'doji-kuzunobu';

    setupCardAbilities() {
        this.persistentEffect({
            condition: (context) => context.source.isParticipating(),
            targetController: Players.Any,
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'triggerAbilities',
                restricts: 'reactions'
            })
        });
    }
}


export default DojiKuzuNobu;
