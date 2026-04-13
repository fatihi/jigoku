import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'fire-tensai-acolyte-fire';

class FireTensaiAcolyte extends DrawCard {
    static id = 'fire-tensai-acolyte';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.canOnlyBeDeclaredAsAttackerWithElement(() => this.getCurrentElementSymbol(elementKey))
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Contested Ring',
            element: Elements.Fire
        });
        return symbols;
    }
}


export default FireTensaiAcolyte;
