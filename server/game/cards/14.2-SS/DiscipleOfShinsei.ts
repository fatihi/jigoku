import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DiscipleOfShinsei extends DrawCard {
    static id = 'disciple-of-shinsei';

    setupCardAbilities() {
        this.interrupt({
            title: 'Discard an attachment',
            when: {
                onCardLeavesPlay: (event, context) => event.card === context.source
            },
            target: {
                cardType: CardTypes.Attachment,
                gameAction: AbilityDsl.actions.discardFromPlay()
            }
        });
    }
}


export default DiscipleOfShinsei;


