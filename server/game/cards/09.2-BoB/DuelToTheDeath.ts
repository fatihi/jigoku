import DrawCard from '../../drawcard';
import { DuelTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DuelToTheDeath extends DrawCard {
    static id = 'duel-to-the-death';

    setupCardAbilities() {
        this.action({
            title: 'Initiate a military duel, discarding the loser',
            initiateDuel: {
                type: DuelTypes.Military,
                refuseGameAction: AbilityDsl.actions.dishonor(context => ({ target: context.targets.duelTarget })),
                gameAction: duel => AbilityDsl.actions.discardFromPlay({ target: duel.loser })
            }
        });
    }
}


export default DuelToTheDeath;
