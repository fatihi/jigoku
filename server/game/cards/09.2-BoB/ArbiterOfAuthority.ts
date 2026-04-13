import DrawCard from '../../drawcard';
import { DuelTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ArbiterOfAuthority extends DrawCard {
    static id = 'arbiter-of-authority';

    setupCardAbilities() {
        this.action({
            title: 'Initiate a political duel',
            initiateDuel: {
                type: DuelTypes.Political,
                refuseGameAction: AbilityDsl.actions.dishonor(context => ({ target: context.target })),
                gameAction: duel => AbilityDsl.actions.multiple([
                    AbilityDsl.actions.bow({ target: duel.loser }),
                    AbilityDsl.actions.sendHome({ target: duel.loser })
                ])
            }
        });
    }
}


export default ArbiterOfAuthority;
