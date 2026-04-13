import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class EarthBecomesSky extends DrawCard {
    static id = 'earth-becomes-sky';

    setupCardAbilities() {
        this.reaction({
            title: 'Bow a character that just readied',
            when: {
                onCardReadied: (event, context) =>
                    event.card.type === CardTypes.Character && event.card.controller === context.player.opponent
            },
            // @ts-ignore
            gameAction: AbilityDsl.actions.bow((context) => ({ target: context.event.card }))
        });
    }
}


export default EarthBecomesSky;
