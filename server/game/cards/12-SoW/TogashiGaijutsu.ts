import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class TogashiGaijutsu extends DrawCard {
    static id = 'togashi-gaijutsu';

    setupCardAbilities() {
        this.reaction({
            title: 'Ready a character',
            when: {
                onCardPlayed: (event, context) =>
                    event.card.parent &&
                    event.card.type === CardTypes.Attachment &&
                    event.card.hasTrait('tattoo') &&
                    event.card.controller === context.player
            },
            gameAction: AbilityDsl.actions.ready((context) => ({ target: context.event.card.parent }))
        });
    }
}


export default TogashiGaijutsu;
