import DrawCard from '../../drawcard';
import { CardTypes, Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class IronMine extends DrawCard {
    static id = 'iron-mine';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Prevent a character from leaving play',
            when: {
                onCardLeavesPlay: (event, context) => event.card.controller === context.player && event.card.type === CardTypes.Character && event.card.location === Locations.PlayArea
            },
            effect: 'prevent {1} from leaving play',
            effectArgs: context => context.event.card,
            gameAction: AbilityDsl.actions.cancel({
                replacementGameAction: AbilityDsl.actions.sacrifice(context => ({ target: context.source }))
            })
        });
    }
}


export default IronMine;
