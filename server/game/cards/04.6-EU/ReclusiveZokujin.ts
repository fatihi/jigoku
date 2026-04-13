import DrawCard from '../../drawcard';
import { Elements } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

const elementKey = 'reclusive-zokujin-earth';

class ReclusiveZokujin extends DrawCard {
    static id = 'reclusive-zokujin';

    setupCardAbilities() {
        this.persistentEffect({
            condition: () => this.game.isDuringConflict(this.getCurrentElementSymbol(elementKey)),
            effect: [
                AbilityDsl.effects.addKeyword('covert'),
                AbilityDsl.effects.immunity({
                    restricts: 'opponentsCardEffects'
                })
            ]
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Conflict Type',
            element: Elements.Earth
        });
        return symbols;
    }
}


export default ReclusiveZokujin;
