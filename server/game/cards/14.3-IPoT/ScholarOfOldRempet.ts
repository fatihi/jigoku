import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class ScholarOfOldRempet extends DrawCard {
    static id = 'scholar-of-old-rempet';

    setupCardAbilities() {
        this.action({
            title: 'Make character immune to events',
            condition: () => this.game.isDuringConflict(),
            cost: AbilityDsl.costs.payHonor(1),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => !card.isUnique(),
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    effect: AbilityDsl.effects.immunity({ restricts: 'events' })
                })
            },
            effect: 'make {0} immune to events'
        });
    }
}


export default ScholarOfOldRempet;
