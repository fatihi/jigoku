import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations, Players } from '../../Constants';

class HidaSugi extends DrawCard {
    static id = 'hida-sugi';

    setupCardAbilities() {
        this.reaction({
            title: 'Move a discarded dynasty card',
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.source.controller && context.source.isParticipating()
            },
            target: {
                location: Locations.DynastyDiscardPile,
                player: Players.Any,
                gameAction: AbilityDsl.actions.moveCard({ destination: Locations.DynastyDeck, bottom: true})
            },
            effect: 'move {0} to bottom of {1}\'s dynasty deck',
            effectArgs: context => [context.target.controller]
        });
    }
}


export default HidaSugi;

