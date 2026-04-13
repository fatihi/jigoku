import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'kudaka-air';

class Kudaka extends DrawCard {
    static id = 'kudaka';

    setupCardAbilities() {
        this.reaction({
            title: 'Gain 1 fate and draw 1 card',
            limit: AbilityDsl.limit.perRound(2),
            effect: 'gain 1 fate and draw 1 card',
            when: {
                onClaimRing: (event, context) => ((event.conflict && event.conflict.hasElement(this.getCurrentElementSymbol(elementKey))) || event.ring.hasElement(this.getCurrentElementSymbol('kudaka-air'))) && event.player === context.player
            },
            gameAction: [AbilityDsl.actions.gainFate(), AbilityDsl.actions.draw()]
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Claimed Ring',
            element: Elements.Air
        });
        return symbols;
    }
}


export default Kudaka;
