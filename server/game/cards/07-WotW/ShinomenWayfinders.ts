import DrawCard from '../../drawcard';
import { Locations, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ShinomenWayfinders extends DrawCard {
    static id = 'shinomen-wayfinders';

    setupCardAbilities() {
        this.persistentEffect({
            location: Locations.Any,
            targetController: Players.Any,
            effect: AbilityDsl.effects.reduceCost({
                amount: (card, player) => {
                    return player.filterCardsInPlay(card => {
                        return card.isParticipating() && card.isFaction('unicorn');
                    }).length;
                },
                match: (card, source) => card === source
            })
        });
    }
}


export default ShinomenWayfinders;
