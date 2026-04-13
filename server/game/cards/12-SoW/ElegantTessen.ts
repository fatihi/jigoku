import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ElegantTessen extends DrawCard {
    static id = 'elegant-tessen';

    setupCardAbilities() {
        this.reaction({
            title: 'Ready attached character',
            when: {
                onCardAttached: (event, context) => (
                    context.source.parent && event.card === context.source && context.source.parent.getCost() <= 2 &&
                    event.originalLocation !== Locations.PlayArea
                )
            },
            gameAction: AbilityDsl.actions.ready(context => ({ target: context.source.parent }))
        });
    }
}


export default ElegantTessen;
