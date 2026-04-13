import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class Resourcefulness extends DrawCard {
    static id = 'resourcefulness';

    setupCardAbilities() {
        this.action({
            title: 'Honor a character',
            cost: AbilityDsl.costs.dishonor(),
            target: {
                activePromptTitle: 'Choose a character to honor',
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.honor()
            }
        });
    }
}


export default Resourcefulness;
