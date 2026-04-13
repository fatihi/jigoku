import DrawCard from '../../drawcard';
import { CardTypes, Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DoomThrower extends DrawCard {
    static id = 'doom-thrower';

    setupCardAbilities() {
        this.action({
            title: 'Reduce Province Strength',
            condition: context => context.game.isDuringConflict(),
            cost: AbilityDsl.costs.sacrifice({ cardType: CardTypes.Character }),
            effect: 'reduce an attacked province\'s strength by {1}',
            effectArgs: context => (context.costs.sacrificeStateWhenChosen && context.costs.sacrificeStateWhenChosen.getFate() > 0) ? 5 : 2,
            gameAction: AbilityDsl.actions.selectCard(context => ({
                activePromptTitle: 'Choose an attacked province',
                hidePromptIfSingleCard: true,
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                cardCondition: card => card.isConflictProvince(),
                message: '{0} reduces the strength of {1}',
                messageArgs: cards => [context.player, cards],
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    targetLocation: Locations.Provinces,
                    effect: AbilityDsl.effects.modifyProvinceStrength((context.costs.sacrificeStateWhenChosen && context.costs.sacrificeStateWhenChosen.getFate() > 0) ? -5 : -2)
                })
            }))
        });
    }
}


export default DoomThrower;
