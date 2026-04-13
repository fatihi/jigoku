import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players, CardTypes } from '../../Constants';

class GiftofAmaterasu extends DrawCard {
    static id = 'gift-of-amaterasu';

    setupCardAbilities() {
        this.reaction({
            title: 'Honor a character',
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.player && event.conflict.skillDifference >= 5
            },
            cannotBeMirrored: true,
            target: {
                cardType: CardTypes.Character,
                activePromptTitle: 'Choose a character to honor',
                controller: Players.Self,
                gameAction: AbilityDsl.actions.honor()
            }
        });
    }
}


export default GiftofAmaterasu;
