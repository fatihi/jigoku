import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations } from '../../Constants';

class Asceticism extends DrawCard {
    static id = 'asceticism';

    setupCardAbilities() {
        this.whileAttached({
            condition: context => context.player.getNumberOfFacedownProvinces(province => province.location !== Locations.StrongholdProvince) > 1,
            effect: AbilityDsl.effects.cardCannot({
                cannot: 'target',
                restricts: 'opponentsTriggeredAbilities',
                source: this
            })
        });
    }
}


export default Asceticism;
