import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { DuelTypes } from '../../Constants';

class Heresy extends DrawCard {
    static id = 'heresy';

    setupCardAbilities() {
        this.action({
            title: 'Initiate a political duel',
            initiateDuel: {
                type: DuelTypes.Political,
                opponentChoosesChallenger: true,
                message: 'remove a fate from {0}',
                messageArgs: duel => [duel.loser],
                gameAction: duel => AbilityDsl.actions.removeFate({
                    target: duel.loser,
                    amount: 1
                })
            }
        });
    }
}


export default Heresy;
