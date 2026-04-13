import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class IronWarriorVanguard extends DrawCard {
    static id = 'iron-warrior-vanguard';

    setupCardAbilities() {
        this.reaction({
            title: 'Honor a character',
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.source.controller &&
                                                   context.source.isParticipating()
            },
            target: {
                activePromptTitle: 'Choose a character to honor',
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.honor()
            }
        });
    }
}


export default IronWarriorVanguard;
