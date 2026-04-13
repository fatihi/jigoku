import AbilityDsl from '../../abilitydsl';
import { CardTypes, Players } from '../../Constants';
import DrawCard from '../../drawcard';

class ShoshiNiKie extends DrawCard {
    static id = 'shoshi-ni-kie';

    setupCardAbilities() {
        this.action({
            title: 'ready an ordinary character',
            cost: AbilityDsl.costs.selectedReveal({ cardCondition: card => card.isFacedown(), cardType: CardTypes.Province }),
            target: {
                cardCondition: card => card.isOrdinary(),
                cardType: CardTypes.Character,
                player: Players.Self,
                gameAction: AbilityDsl.actions.ready()
            }
        });
    }
}


export default ShoshiNiKie;
