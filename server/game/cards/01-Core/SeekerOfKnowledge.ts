import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'seeker-of-knowledge-air';

class SeekerOfKnowledge extends DrawCard {
    static id = 'seeker-of-knowledge';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.addElementAsAttacker(() => this.getCurrentElementSymbol(elementKey))
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Add Element',
            element: Elements.Air
        });
        return symbols;
    }
}


export default SeekerOfKnowledge;
