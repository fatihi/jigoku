import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class AudienceChamber extends DrawCard {
    static id = 'audience-chamber';

    setupCardAbilities() {
        this.reaction({
            title: 'Place fate on character',
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player &&
                    event.card.type === CardTypes.Character &&
                    event.card.getCost() >= 4
            },
            gameAction: AbilityDsl.actions.placeFate((context) => ({
                // @ts-ignore
                target: context.event.card
            }))
        });
    }
}


export default AudienceChamber;
