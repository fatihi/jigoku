import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ChukanNobue extends DrawCard {
    static id = 'chukan-nobue';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'discard',
                restricts: 'opponentsTriggeredAbilities'
            })
        });
    }
}

export default ChukanNobue;
