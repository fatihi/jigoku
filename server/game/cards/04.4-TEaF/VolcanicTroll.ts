import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'isawa-tsuke-2-fire';
class VolcanicTroll extends DrawCard {
    static id = 'volcanic-troll';

    setupCardAbilities() {
        this.persistentEffect({
            condition: () => this.game.rings[this.getCurrentElementSymbol(elementKey)].isUnclaimed(),
            effect: AbilityDsl.effects.modifyBothSkills(2)
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Unclaimed Ring',
            element: Elements.Fire
        });
        return symbols;
    }
}


export default VolcanicTroll;
