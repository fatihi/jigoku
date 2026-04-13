import DrawCard from '../../drawcard';
import { Locations, Players } from '../../Constants';

class DaidojiNerishma extends DrawCard {
    static id = 'daidoji-nerishma';

    setupCardAbilities(ability) {
        this.action({
            title: 'Flip a card faceup',
            target: {
                controller: Players.Self,
                location: Locations.Provinces,
                cardCondition: card => card.isDynasty && card.isFacedown(),
                gameAction: ability.actions.flipDynasty()
            }
        });
    }
}


export default DaidojiNerishma;
