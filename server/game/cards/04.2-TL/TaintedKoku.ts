import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class TaintedKoku extends DrawCard {
    static id = 'tainted-koku';

    setupCardAbilities(ability) {
        this.interrupt({
            title: 'Move attachment to another character',
            when: {
                onCardLeavesPlay: (event, context) => event.card === context.source.parent
            },
            target: {
                cardType: CardTypes.Character,
                cardCondition: (card, context) => context.source.parent && card.controller === context.source.parent.controller && card !== context.source.parent,
                gameAction: ability.actions.attach(context => ({ attachment: context.source }))
            }
        });
    }
}


export default TaintedKoku;
