import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class WayOfTheLion extends DrawCard {
    static id = 'way-of-the-lion';

    setupCardAbilities() {
        this.action({
            title: 'Double the base mil of a character',
            condition: () => this.game.isDuringConflict(),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isFaction('lion') && card.getBaseMilitarySkill() > 0,
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    effect: AbilityDsl.effects.modifyBaseMilitarySkillMultiplier(2)
                })
            },
            effect: 'double the base {1} skill of {0}',
            effectArgs: () => 'military'
        });
    }
}


export default WayOfTheLion;
