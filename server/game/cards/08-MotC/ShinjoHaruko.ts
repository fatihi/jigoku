import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ShinjoHaruko extends DrawCard {
    static id = 'shinjo-haruko';

    setupCardAbilities() {
        this.action({
            title: 'Move a honored character into the conflict',
            condition: context => context.source.isParticipating(),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Any,
                cardCondition: card => card.isHonored,
                gameAction: AbilityDsl.actions.moveToConflict()
            }
        });
    }
}

export default ShinjoHaruko;

