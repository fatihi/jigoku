import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class TalentedPerformer extends DrawCard {
    static id = 'talented-performer';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.mustBeChosen({ restricts: 'events' })
        });
    }
}


export default TalentedPerformer;
