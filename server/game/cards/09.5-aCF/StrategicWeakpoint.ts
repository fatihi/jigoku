import DrawCard from '../../drawcard';
import { Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class StrategicWeapoint extends DrawCard {
    static id = 'strategic-weakpoint';

    setupCardAbilities() {
        this.interrupt({
            title: 'Force opponent to discard a character',
            when: {
                onBreakProvince: (event, context) => event.card.controller === context.player && event.card.location === context.source.location
            },
            target: {
                player: Players.Opponent,
                activePromptTitle: 'Choose a character to discard',
                controller: Players.Opponent,
                cardCondition: card => card.isAttacking(),
                gameAction: AbilityDsl.actions.discardFromPlay()
            }
        });
    }
}


export default StrategicWeapoint;
