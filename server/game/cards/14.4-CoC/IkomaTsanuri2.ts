import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class IkomaTsanuri2 extends DrawCard {
    static id = 'ikoma-tsanuri-2';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isParticipating(),
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'triggerAbilities',
                restricts: 'attackedProvinceNonForced'
            })
        });
    }
}


export default IkomaTsanuri2;
