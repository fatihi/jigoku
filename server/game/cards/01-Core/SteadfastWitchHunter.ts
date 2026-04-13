import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class SteadfastWitchHunter extends DrawCard {
    static id = 'steadfast-witch-hunter';

    setupCardAbilities(ability) {
        this.action({
            title: 'Ready character',
            cost: ability.costs.sacrifice({ cardType: CardTypes.Character }),
            target: {
                activePromptTitle: 'Choose a character to ready',
                cardType: CardTypes.Character,
                gameAction: ability.actions.ready()
            }
        });
    }
}


export default SteadfastWitchHunter;
