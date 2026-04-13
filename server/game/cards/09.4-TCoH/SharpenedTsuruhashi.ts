import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class SharpenedTsuruhashi extends DrawCard {
    static id = 'sharpened-tsuruhashi';

    setupCardAbilities() {
        this.interrupt({
            title: 'Return Sharpened Tsuruhashi to your hand',
            when: {
                onCardLeavesPlay: (event, context) => event.isSacrifice && event.card === context.source.parent
            },
            gameAction: AbilityDsl.actions.returnToHand(context => ({
                target: context.source
            })),
            effect: 'return it to their hand.'
        });
    }
}


export default SharpenedTsuruhashi;

