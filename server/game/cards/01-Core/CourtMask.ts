import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class CourtMask extends DrawCard {
    static id = 'court-mask';

    setupCardAbilities() {
        this.attachmentConditions({
            myControl: true
        });

        this.action({
            title: 'Return court mask to hand',
            effect: 'return {0} to hand, dishonoring {1}',
            effectArgs: context => context.source.parent,
            gameAction: [
                AbilityDsl.actions.returnToHand(),
                AbilityDsl.actions.dishonor(context => ({ target: context.source.parent }))
            ]
        });
    }
}


export default CourtMask;

