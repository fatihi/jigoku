import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class WayStationTrader extends DrawCard {
    static id = 'way-station-trader';

    setupCardAbilities() {
        this.reaction({
            title: 'Take a fate from your opponent',
            when: {
                onCardRevealed: (event, context) => event.card && event.card.type === CardTypes.Province && context.source.isParticipating()
            },
            gameAction: AbilityDsl.actions.takeFate()
        });
    }
}


export default WayStationTrader;
