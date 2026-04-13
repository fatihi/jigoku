import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class KaitoNobukai extends DrawCard {
    static id = 'kaito-nobukai';

    setupCardAbilities() {
        this.action({
            title: 'Bow each participating characters',
            cost: AbilityDsl.costs.sacrificeSelf(),
            condition: context => context.source.isParticipating(),
            effect: 'bow all participating characters and prevent characters from moving into this conflict',
            gameAction: AbilityDsl.actions.multiple([
                AbilityDsl.actions.bow(() => ({
                    target: this.game.findAnyCardsInPlay(card => card.getType() === CardTypes.Character && card.isParticipating())
                })),
                AbilityDsl.actions.cardLastingEffect(() => ({
                    target: this.game.findAnyCardsInPlay(card => card.getType() === CardTypes.Character),
                    effect: AbilityDsl.effects.cardCannot('moveToConflict')
                }))
            ])
        });
    }
}

export default KaitoNobukai;
