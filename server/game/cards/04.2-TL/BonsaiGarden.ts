import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'bonsai-garden-air';

class BonsaiGarden extends DrawCard {
    static id = 'bonsai-garden';

    setupCardAbilities() {
        this.action({
            title: 'Gain 1 honor',
            condition: context => context.game.isDuringConflict(this.getCurrentElementSymbol(elementKey)),
            gameAction: AbilityDsl.actions.gainHonor()
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Conflict Ring',
            element: Elements.Air
        });
        return symbols;
    }
}


export default BonsaiGarden;
