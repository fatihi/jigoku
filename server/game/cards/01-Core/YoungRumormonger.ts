import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, EventNames } from '../../Constants';

class YoungRumormonger extends DrawCard {
    static id = 'young-rumormonger';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Honor/dishonor a different character',
            when: {
                onCardHonored: (event) => event.card.type === CardTypes.Character,
                onCardDishonored: (event) => event.card.type === CardTypes.Character
            },
            target: {
                cardType: CardTypes.Character,
                cardCondition: (card, context) =>
                    card !== context.event.card && card.controller === context.event.card.controller,
                gameAction: AbilityDsl.actions.cancel((context) => ({
                    replacementGameAction:
                        // @ts-ignore
                        context.event.name === EventNames.OnCardHonored
                            ? AbilityDsl.actions.honor()
                            : AbilityDsl.actions.dishonor()
                }))
            }
        });
    }
}


export default YoungRumormonger;
