import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Locations } from '../../Constants';

class KitsukiYaruma extends DrawCard {
    static id = 'kitsuki-yaruma';

    setupCardAbilities() {
        this.reaction({
            title: 'Flip province facedown',
            when: {
                onCharacterEntersPlay: (event, context) => event.card === context.source
            },
            target: {
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                cardCondition: card => !card.isBroken,
                gameAction: AbilityDsl.actions.turnFacedown()
            }
        });
    }

    allowAttachment(attachment) {
        if(attachment.hasTrait('poison') && !this.isBlank()) {
            return false;
        }

        return super.allowAttachment(attachment);
    }
}


export default KitsukiYaruma;
