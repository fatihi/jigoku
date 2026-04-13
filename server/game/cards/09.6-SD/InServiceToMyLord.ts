import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, PlayTypes, CardTypes } from '../../Constants';

class InServiceToMyLord extends DrawCard {
    static id = 'in-service-to-my-lord';

    setupCardAbilities() {
        this.persistentEffect({
            location: Locations.ConflictDiscardPile,
            effect: AbilityDsl.effects.canPlayFromOwn(Locations.ConflictDiscardPile, [this], this, PlayTypes.Other)
        });
        this.action({
            title: 'Ready a character',
            cost: AbilityDsl.costs.bow({
                cardType: CardTypes.Character,
                cardCondition: (card) => !card.isUnique()
            }),
            target: {
                activePromptTitle: 'Choose a unique character',
                cardType: CardTypes.Character,
                cardCondition: (card) => card.isUnique(),
                gameAction: AbilityDsl.actions.multiple([
                    AbilityDsl.actions.ready(),
                    AbilityDsl.actions.moveCard((context) => ({
                        target: context.source,
                        destination: Locations.ConflictDeck,
                        bottom: true
                    }))
                ])
            },
            effect: 'ready {0}.  {1} is placed on the bottom of {2}\'s conflict deck',
            effectArgs: (context) => [context.source, context.source.owner]
        });
    }
}


export default InServiceToMyLord;
