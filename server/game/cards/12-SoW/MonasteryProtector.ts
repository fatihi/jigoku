import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class MonasteryProtector extends DrawCard {
    static id = 'monastery-protector';

    setupCardAbilities() {
        this.persistentEffect({
            match: (card, context) => card.getType() === CardTypes.Character && card.controller === context.player && card.hasTrait('tattooed'),
            effect: AbilityDsl.effects.fateCostToTarget({
                amount: 1,
                cardType: CardTypes.Event,
                targetPlayer: Players.Opponent
            })
        });
    }
}


export default MonasteryProtector;

