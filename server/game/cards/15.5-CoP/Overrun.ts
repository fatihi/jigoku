import DrawCard from '../../drawcard';
import { Locations, CardTypes, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class Overrun extends DrawCard {
    static id = 'overrun';

    setupCardAbilities() {
        this.reaction({
            title: 'Blank and reveal a province',
            when: {
                onBreakProvince: (event, context) => event.card.owner !== context.player
            },
            target: {
                location: Locations.Provinces,
                cardType: CardTypes.Province,
                controller: Players.Opponent,
                cardCondition: (card, context) => card.controller !== context.player,
                gameAction: AbilityDsl.actions.sequential([
                    AbilityDsl.actions.dishonorProvince(),
                    AbilityDsl.actions.reveal({ chatMessage: true })
                ])
            }
        });
    }
}


export default Overrun;
