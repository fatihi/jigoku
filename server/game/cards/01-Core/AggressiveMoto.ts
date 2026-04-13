import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class AggressiveMoto extends DrawCard {
    static id = 'aggressive-moto';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.cardCannot('declareAsDefender')
        });
    }
}


export default AggressiveMoto;
