import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Durations } from '../../Constants';

class TrickOfTheLight extends DrawCard {
    static id = 'trick-of-the-light';

    setupCardAbilities() {
        this.action({
            title: 'blanks printed text for conflict',
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isParticipating(),
                gameAction: AbilityDsl.actions.cardLastingEffect(() => ({
                    effect: AbilityDsl.effects.blank(),
                    duration: Durations.UntilEndOfConflict
                }))
            }
        });
    }
}

export default TrickOfTheLight;
