import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class HidaKotoe extends DrawCard {
    static id = 'hida-kotoe';

    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.source.controller && context.source.isDefending()
            },
            title: 'Discard an attachment',
            target: {
                cardType: CardTypes.Attachment,
                gameAction: ability.actions.discardFromPlay()
            }
        });
    }
}


export default HidaKotoe;
