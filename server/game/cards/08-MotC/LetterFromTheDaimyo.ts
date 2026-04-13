import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class LetterFromTheDaimyo extends DrawCard {
    static id = 'letter-from-the-daimyo';

    setupCardAbilities() {
        this.attachmentConditions({
            myControl: true
        });

        this.reaction({
            title: 'Make opponent discard 2 cards',
            cost: AbilityDsl.costs.sacrificeSelf(),
            when: {
                afterConflict: (event, context) => context.source.parent && context.source.parent.isParticipating() &&
                                                   event.conflict.winner === context.source.parent.controller &&
                                                   event.conflict.conflictType === 'political'
            },
            gameAction: AbilityDsl.actions.chosenDiscard({ amount: 2 })
        });
    }
}


export default LetterFromTheDaimyo;
