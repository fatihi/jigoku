import DrawCard from '../../drawcard';
import { Phases } from '../../Constants';

class ForgottenLibrary extends DrawCard {
    static id = 'forgotten-library';

    setupCardAbilities(ability) {
        this.reaction({
            title: 'Draw a card',
            when: {
                onPhaseStarted: event => event.phase === Phases.Draw
            },
            gameAction: ability.actions.draw()
        });
    }
}


export default ForgottenLibrary;
