import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class IchigenkinSoloist extends DrawCard {
    static id = 'ichigenkin-soloist';

    setupCardAbilities() {
        this.composure({
            effect: AbilityDsl.effects.cardCannot({
                cannot: 'target',
                restricts: 'opponentsTriggeredAbilities'
            })
        });
    }
}


export default IchigenkinSoloist;
