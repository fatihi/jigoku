import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ShepherdOfVisages extends DrawCard {
    static id = 'shepherd-of-visages';

    setupCardAbilities() {
        this.action({
            title: 'Give a participating character -2 glory',
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isParticipating(),
                gameAction: AbilityDsl.actions.cardLastingEffect(() => ({
                    effect: AbilityDsl.effects.modifyGlory(-2)
                }))
            },
            effect: 'give {0} -2 glory until the end of the conflict'
        });
    }
}

export default ShepherdOfVisages;
