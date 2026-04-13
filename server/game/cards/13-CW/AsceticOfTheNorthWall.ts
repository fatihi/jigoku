import DrawCard from '../../drawcard';
import { Phases, Elements } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

const elementKey = 'ascetic-of-the-north-wall-earth';

class AsceticOfTheNorthWall extends DrawCard {
    static id = 'ascetic-of-the-north-wall';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.game.rings[this.getCurrentElementSymbol(elementKey)].isConsideredClaimed(context.player) && context.game.currentPhase !== Phases.Fate,
            effect: [
                AbilityDsl.effects.cardCannot('removeFate'),
                AbilityDsl.effects.cardCannot('discardFromPlay')
            ]
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Claimed Ring',
            element: Elements.Earth
        });
        return symbols;
    }
}


export default AsceticOfTheNorthWall;
