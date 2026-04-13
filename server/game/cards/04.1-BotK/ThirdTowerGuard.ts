import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKeys = {
    earth: 'third-tower-guard-earth',
    water: 'third-tower-guard-water'
};

class ThirdTowerGuard extends DrawCard {
    static id = 'third-tower-guard';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => (
                context.game.rings[this.getCurrentElementSymbol(elementKeys.earth)].isConsideredClaimed(context.player) ||
                context.game.rings[this.getCurrentElementSymbol(elementKeys.water)].isConsideredClaimed(context.player)
            ),
            effect: AbilityDsl.effects.modifyMilitarySkill(2)
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKeys.earth,
            prettyName: 'Claimed Ring',
            element: Elements.Earth
        });
        symbols.push({
            key: elementKeys.water,
            prettyName: 'Claimed Ring',
            element: Elements.Water
        });
        return symbols;
    }
}


export default ThirdTowerGuard;
