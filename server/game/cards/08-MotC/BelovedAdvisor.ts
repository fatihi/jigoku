import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class BelovedAdvisor extends DrawCard {
    static id = 'beloved-advisor';

    setupCardAbilities() {
        this.action({
            title: 'Each player draws 1 card',
            gameAction: AbilityDsl.actions.draw(context => ({
                target: context.game.getPlayers()
            }))
        });
    }
}


export default BelovedAdvisor;
