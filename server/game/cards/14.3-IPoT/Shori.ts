import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { AbilityTypes, Players } from '../../Constants';

class Shori extends DrawCard {
    static id = 'shori';

    setupCardAbilities() {
        this.attachmentConditions({
            unique: true,
            faction: 'lion'
        });

        this.whileAttached({
            match: (card) => card.hasTrait('champion'),
            effect: AbilityDsl.effects.gainAbility(AbilityTypes.Persistent, {
                targetController: Players.Self,
                effect: AbilityDsl.effects.additionalConflict('military')
            })
        });
    }
}


export default Shori;
