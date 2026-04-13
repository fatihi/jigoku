import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';

class SneakyShinjo extends DrawCard {
    static id = 'sneaky-shinjo';

    setupCardAbilities(ability) {
        this.reaction({
            title: 'Play this character',
            location: Locations.Provinces,
            when: {
                onPassDuringDynasty: (event, context) => event.player === context.player
            },
            effect: 'play {0}',
            gameAction: ability.actions.playCard({ location: Locations.ProvinceOne, source: this })
        });
    }
}


export default SneakyShinjo;
