import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class BorderRider extends DrawCard {
    static id = 'border-rider';

    setupCardAbilities() {
        this.action({
            title: 'Ready this character',
            gameAction: AbilityDsl.actions.ready()
        });
    }
}


export default BorderRider;


