import DrawCard from '../../drawcard';
import { Locations, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class SpecializedDefenses extends DrawCard {
    static id = 'specialized-defenses';

    setupCardAbilities() {
        this.action({
            title: 'Double province strength',
            condition: context => context.game.isDuringConflict(),
            effect: 'double the province strength of an attacked province',
            gameAction: AbilityDsl.actions.selectCard(context => ({
                activePromptTitle: 'Choose an attacked province',
                hidePromptIfSingleCard: true,
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                cardCondition: card => card.isConflictProvince() && card.element.some(element => {
                    if(element === 'all') {
                        return true;
                    }
                    return this.game.rings[element].isConsideredClaimed(context.player) ||
                           this.game.currentConflict.ring.getElements().includes(element);
                }),
                message: '{0} doubles the province strength of {1}',
                messageArgs: cards => [context.player, cards],
                gameAction: AbilityDsl.actions.cardLastingEffect(() => ({
                    targetLocation: Locations.Provinces,
                    effect: AbilityDsl.effects.modifyProvinceStrengthMultiplier(2)
                }))
            }))
        });
    }
}


export default SpecializedDefenses;
