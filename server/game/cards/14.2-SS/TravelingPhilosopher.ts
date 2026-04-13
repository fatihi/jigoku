import AbilityDsl from '../../abilitydsl';

import DrawCard from '../../drawcard';
import { CardTypes, Locations, Players } from '../../Constants';

class TravelingPhilospher extends DrawCard {
    static id = 'traveling-philosopher';

    setupCardAbilities() {
        this.interrupt({
            title: 'Flip a province facedown',
            when: {
                onCardLeavesPlay: (event, context) => event.card === context.source
            },
            target: {
                controller: Players.Self,
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                cardCondition: card => !card.isBroken,
                gameAction: AbilityDsl.actions.turnFacedown()
            }
        });
    }
}


export default TravelingPhilospher;
