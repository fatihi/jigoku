import DrawCard from '../../../drawcard';
import { CardTypes } from '../../../Constants';
import AbilityDsl from '../../../abilitydsl';

class Disarm extends DrawCard {
    static id = 'disarm';

    setupCardAbilities() {
        this.action({
            title: 'Discard an attachment',
            target: {
                cardType: CardTypes.Attachment,
                gameAction: AbilityDsl.actions.discardFromPlay()
            }
        });
    }
}


export default Disarm;


