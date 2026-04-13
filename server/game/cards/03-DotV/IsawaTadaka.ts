import DrawCard from '../../drawcard';
import { Players, Elements } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

const elementKey = 'isawa-tadaka-earth';

class IsawaTadaka extends DrawCard {
    static id = 'isawa-tadaka';

    setupCardAbilities() {
        this.persistentEffect({
            targetController: Players.Opponent,
            condition: context => !context.game.rings[this.getCurrentElementSymbol(elementKey)].isConsideredClaimed(context.player.opponent),
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'play',
                restricts: 'copiesOfDiscardEvents'
            })
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


export default IsawaTadaka;
