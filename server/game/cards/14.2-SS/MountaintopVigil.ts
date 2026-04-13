import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Durations, Players } from '../../Constants';

class MountaintopVigil extends DrawCard {
    static id = 'mountaintop-vigil';

    setupCardAbilities() {
        this.action({
            title: 'cancel all ring effects',
            effect: 'cancel all ring effects until the end of the conflict',
            condition: () => this.game.isDuringConflict(),
            gameAction: AbilityDsl.actions.playerLastingEffect({
                duration: Durations.UntilEndOfConflict,
                targetController: Players.Any,
                effect: AbilityDsl.effects.cannotResolveRings()
            })
        });
    }
}


export default MountaintopVigil;
