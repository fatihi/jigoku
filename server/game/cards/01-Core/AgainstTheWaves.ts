import DrawCard from '../../drawcard';
import { CardTypes, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class AgainstTheWaves extends DrawCard {
    static id = 'against-the-waves';

    setupCardAbilities() {
        this.action({
            title: 'Bow or ready a shugenja',
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.hasTrait('shugenja'),
                controller: Players.Self,
                gameAction: [AbilityDsl.actions.bow(), AbilityDsl.actions.ready()]
            }
        });
    }
}


export default AgainstTheWaves;
