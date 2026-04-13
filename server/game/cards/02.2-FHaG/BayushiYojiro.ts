import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class BayushiYojiro extends DrawCard {
    static id = 'bayushi-yojiro';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isParticipating(),
            targetController: Players.Any,
            match: card => card.isParticipating(),
            effect: [
                AbilityDsl.effects.honorStatusDoesNotModifySkill(),
                AbilityDsl.effects.honorStatusDoesNotAffectLeavePlay(),
                AbilityDsl.effects.taintedStatusDoesNotCostHonor()
            ]
        });
    }
}


export default BayushiYojiro;
