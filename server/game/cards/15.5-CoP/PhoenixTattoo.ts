import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class PhoenixTattoo extends DrawCard {
    static id = 'phoenix-tattoo';

    setupCardAbilities() {
        this.attachmentConditions({
            myControl: true
        });

        this.whileAttached({
            effect: AbilityDsl.effects.addTrait('tattooed')
        });

        this.persistentEffect({
            targetController: Players.Any,
            condition: context => context.source.parent && context.source.parent.isParticipating() && context.game.isDuringConflict(),
            match: (card, context) => card !== context.source.parent && card.isParticipating(),
            effect: AbilityDsl.effects.addKeyword('pride')
        });
    }
}


export default PhoenixTattoo;
