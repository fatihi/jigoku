import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players } from '../../Constants';

class IwasakiPupil extends DrawCard {
    static id = 'iwasaki-pupil';

    setupCardAbilities() {
        this.persistentEffect({
            targetController: Players.Any,
            effect: AbilityDsl.effects.modifyCardsDrawnInDrawPhase(-2)
        });
    }
}


export default IwasakiPupil;
