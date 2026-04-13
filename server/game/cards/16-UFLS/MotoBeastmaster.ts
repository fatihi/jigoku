import DrawCard from '../../drawcard';
import { Locations, Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class MotoBeastmaster extends DrawCard {
    static id = 'moto-beastmaster';

    setupCardAbilities() {
        this.reaction({
            title: 'Put a character into play',
            when: {
                onConflictDeclared: (event, context) => event.attackers.includes(context.source)
            },
            target: {
                cardType: CardTypes.Character,
                location: Locations.Provinces,
                controller: Players.Self,
                cardCondition: (card, context) => context.player.firstPlayer ? card.costLessThan(5) : card.costLessThan(3),
                gameAction: AbilityDsl.actions.putIntoConflict()
            }
        });
    }
}


export default MotoBeastmaster;
