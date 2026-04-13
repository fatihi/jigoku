import DrawCard from '../../drawcard';
import { CardTypes, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class StewardOfTheRichFrog extends DrawCard {
    static id = 'steward-of-the-rich-frog';

    setupCardAbilities() {
        this.persistentEffect({
            condition: (context) =>
                context.player &&
                context.player.opponent &&
                context.player.hand.size() < context.player.opponent.hand.size(),
            targetController: Players.Self,
            match: (card) => card.getType() === CardTypes.Character,
            effect: AbilityDsl.effects.cardCannot('receiveDishonorToken')
        });
    }
}


export default StewardOfTheRichFrog;
