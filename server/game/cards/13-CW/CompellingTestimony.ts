import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class CompellingTestimony extends DrawCard {
    static id = 'compelling-testimony';

    setupCardAbilities() {
        this.action({
            title: 'Give a character -4 political',
            condition: () => this.game.isDuringConflict('political'),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isParticipating(),
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    effect: AbilityDsl.effects.modifyPoliticalSkill(-4)
                })
            },
            effect: 'give {0} -4{1}',
            effectArgs: () => ['political']
        });
    }
}


export default CompellingTestimony;
