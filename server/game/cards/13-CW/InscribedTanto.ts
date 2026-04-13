import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'inscribed-tanto-void';

class InscribedTanto extends DrawCard {
    static id = 'inscribed-tanto';

    setupCardAbilities() {
        this.whileAttached({
            condition: context => context.game.rings[this.getCurrentElementSymbol(elementKey)].isConsideredClaimed(context.player),
            effect: AbilityDsl.effects.immunity({
                restricts: 'opponentsRingEffects'
            })
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Claimed Ring',
            element: Elements.Void
        });
        return symbols;
    }
}


export default InscribedTanto;
