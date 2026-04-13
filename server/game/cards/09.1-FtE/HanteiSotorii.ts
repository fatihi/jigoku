import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class HanteiSotorii extends DrawCard {
    static id = 'hantei-sotorii';

    setupCardAbilities() {
        this.action({
            title: 'Give a participating character +3 glory',
            condition: context => context.source.isParticipating() && this.game.currentConflict.conflictType === 'military',
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isParticipating(),
                gameAction: AbilityDsl.actions.cardLastingEffect(() => ({
                    effect: AbilityDsl.effects.modifyGlory(3)
                }))
            },
            effect: 'give {0} +3 glory until the end of the conflict'
        });
    }
}

export default HanteiSotorii;
