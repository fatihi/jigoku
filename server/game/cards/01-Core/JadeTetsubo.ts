import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class JadeTetsubo extends DrawCard {
    static id = 'jade-tetsubo';

    setupCardAbilities(ability) {
        this.attachmentConditions({
            myControl: true
        });

        this.action({
            title: 'Return all fate from a character',
            cost: ability.costs.bowSelf(),
            condition: context => context.source.parent && context.source.parent.isParticipating(),
            target: {
                cardType: CardTypes.Character,
                cardCondition: (card, context) => card.isParticipating() && card.militarySkill < context.source.parent.militarySkill,
                gameAction: ability.actions.removeFate(context => ({
                    amount: context.target.getFate(),
                    recipient: context.target.owner
                }))
            },
            effect: 'return all fate from {0} to its owner'
        });
    }
}


export default JadeTetsubo;
