import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class TwilightRider extends DrawCard {
    static id = 'twilight-rider';

    setupCardAbilities() {
        this.reaction({
            title: 'Ready a character',
            when: {
                onMoveToConflict: (event, context) => event.card === context.source
            },
            target: {
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.ready()
            }
        });
    }
}


export default TwilightRider;
