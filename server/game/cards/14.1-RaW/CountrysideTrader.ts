import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { TargetModes, CardTypes, Locations } from '../../Constants';

class CountrysideTrader extends DrawCard {
    static id = 'countryside-trader';

    setupCardAbilities() {
        this.action({
            title: 'Resolve the attacked province ability',
            cost: AbilityDsl.costs.payFate(1),
            condition: context => context.game.isDuringConflict() && context.source.isAttacking(),
            target: {
                activePromptTitle: 'Select a province to trigger from',
                mode: TargetModes.Ability,
                location: Locations.Provinces,
                cardType: CardTypes.Province,
                cardCondition: card => card.isConflictProvince(),
                abilityCondition: ability => ability.printedAbility,
                gameAction: AbilityDsl.actions.resolveAbility(context => ({
                    target: context.targetAbility.card,
                    ability: context.targetAbility,
                    player: context.player,
                    ignoredRequirements: ['condition'],
                    choosingPlayerOverride: context.choosingPlayerOverride
                }))
            }
        });
    }
}


export default CountrysideTrader;
