import DrawCard from '../../drawcard';
import { Locations, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class CommandByName extends DrawCard {
    static id = 'command-by-name';

    setupCardAbilities() {
        this.action({
            title: 'Reduce province strength',
            cost: [
                AbilityDsl.costs.payHonor(1),
                AbilityDsl.costs.discardCard({ location: Locations.Hand })
            ],
            condition: (context) => context.game.isDuringConflict(),
            gameAction: AbilityDsl.actions.selectCard(context => ({
                activePromptTitle: 'Choose an attacked province',
                hidePromptIfSingleCard: true,
                cardType: CardTypes.Province,
                location: Locations.Provinces,
                cardCondition: card => card.isConflictProvince(),
                message: '{0} reduces the strength of {1} to 0',
                messageArgs: cards => [context.player, cards],
                gameAction: AbilityDsl.actions.cardLastingEffect(() => ({
                    targetLocation: Locations.Provinces,
                    effect: AbilityDsl.effects.setBaseProvinceStrength(0)
                }))
            })),
            effect: 'reduce the strength of an attacked province to 0'
        });
    }
}


export default CommandByName;
