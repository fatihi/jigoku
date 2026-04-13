import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ResourcefulMahoTsukai extends DrawCard {
    static id = 'resourceful-maho-tsukai';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isDishonored,
            effect: AbilityDsl.effects.reduceCost({
                match: card => card.hasTrait('maho')
            })
        });
    }
}


export default ResourcefulMahoTsukai;
