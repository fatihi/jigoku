import DrawCard from '../../drawcard';
import { CardTypes, TargetModes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class SanguineMastery extends DrawCard {
    static id = 'sanguine-mastery';

    setupCardAbilities() {
        this.action({
            title: 'Discard attachments',
            cost: AbilityDsl.costs.dishonor({ cardCondition: card => card.glory > 0 }),
            target: {
                mode: TargetModes.UpToVariable,
                numCardsFunc: (context) => context.costs.dishonor ? context.costs.dishonor.glory : 1,
                cardType: CardTypes.Attachment,
                gameAction: AbilityDsl.actions.discardFromPlay()
            },
            cannotTargetFirst: true
        });
    }

    isTemptationsMaho() {
        return true;
    }
}


export default SanguineMastery;
