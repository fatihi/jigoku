import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations } from '../../Constants';

class Reprieve extends DrawCard {
    static id = 'reprieve';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Prevent a character from leaving play',
            when: {
                onCardLeavesPlay: (event, context) => event.card === context.source.parent && event.card.location === Locations.PlayArea &&
                                                      context.source.allowGameAction('discardFromPlay', context)
            },
            effect: 'prevent {1} from leaving play',
            effectArgs: context => context.event.card,
            gameAction: AbilityDsl.actions.cancel(context => ({
                target: context.source,
                replacementGameAction: AbilityDsl.actions.discardFromPlay()
            }))
        });
    }
}


export default Reprieve;
