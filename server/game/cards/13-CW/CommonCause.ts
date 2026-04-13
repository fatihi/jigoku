import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class CommonCause extends DrawCard {
    static id = 'common-cause';

    setupCardAbilities() {
        this.action({
            title: 'Ready character',
            cost: AbilityDsl.costs.sacrifice({ cardType: CardTypes.Character }),
            target: {
                activePromptTitle: 'Choose a character to ready',
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.multiple([
                    AbilityDsl.actions.ready(),
                    AbilityDsl.actions.honor(context => ({ target: context.target.controller !== context.player ? context.target : [] }))
                ])
            }
        });
    }
}


export default CommonCause;
