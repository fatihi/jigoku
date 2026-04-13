import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players, Locations } from '../../Constants';

class SeasonedPatroller extends DrawCard {
    static id = 'seasoned-patroller';

    setupCardAbilities() {
        this.persistentEffect({
            match: card => card.isConflictProvince(),
            targetLocation: Locations.Provinces,
            targetController: Players.Any,
            condition: context => context.source.isAttacking(),
            effect: [
                AbilityDsl.effects.suppressEffects(effect =>
                    effect.isProvinceStrengthModifier() && effect.getValue() > 0
                ),
                AbilityDsl.effects.provinceCannotHaveSkillIncreased(),
                AbilityDsl.effects.cannotApplyLastingEffects(effect =>
                    effect.isProvinceStrengthModifier() && effect.getValue() > 0
                )
            ]
        });
    }
}


export default SeasonedPatroller;
