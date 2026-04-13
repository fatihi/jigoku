import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class CunningMagistrate extends DrawCard {
    static id = 'cunning-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isParticipating(),
            effect: AbilityDsl.effects.cannotContribute((conflict, context) => {
                return card => card.isDishonored && card !== context.source;
            })
        });
    }
}


export default CunningMagistrate;
