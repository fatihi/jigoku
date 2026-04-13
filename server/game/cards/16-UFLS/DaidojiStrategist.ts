import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DaidojiStrategist extends DrawCard {
    static id = 'daidoji-strategist';

    setupCardAbilities() {
        this.action({
            title: 'Move an honored character home',
            condition: context => context.source.isParticipating(),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Any,
                cardCondition: card => card.isHonored,
                gameAction: AbilityDsl.actions.sendHome()
            }
        });
    }
}

export default DaidojiStrategist;

