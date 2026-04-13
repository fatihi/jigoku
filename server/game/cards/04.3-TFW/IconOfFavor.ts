import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Elements } from '../../Constants';

const elementKey = 'icon-of-favor-fire';

class IconOfFavor extends DrawCard {
    static id = 'icon-of-favor';

    setupCardAbilities() {
        this.whileAttached({
            condition: () => this.controller.imperialFavor !== '',
            effect: AbilityDsl.effects.modifyGlory(1)
        });
        this.reaction({
            title: 'Honor attached character',
            when: {
                afterConflict: (event, context) =>
                    event.conflict.elements.some(element => element === this.getCurrentElementSymbol(elementKey)) &&
                    event.conflict.winner === context.player
            },
            gameAction: AbilityDsl.actions.honor(context => ({
                target: context.source.parent
            }))
        });
    }

    getPrintedElementSymbols() {
        let symbols = super.getPrintedElementSymbols();
        symbols.push({
            key: elementKey,
            prettyName: 'Conflict Type',
            element: Elements.Fire
        });
        return symbols;
    }
}


export default IconOfFavor;
