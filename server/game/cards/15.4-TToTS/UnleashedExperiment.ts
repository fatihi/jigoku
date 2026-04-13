import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class UnleashedExperiment extends DrawCard {
    static id = 'unleashed-experiment';

    setupCardAbilities() {
        this.dire({
            effect: AbilityDsl.effects.loseAllNonKeywordAbilities()
        });

        this.persistentEffect({
            effect: AbilityDsl.effects.honorCostToDeclare(2)
        });
    }
}


export default UnleashedExperiment;
