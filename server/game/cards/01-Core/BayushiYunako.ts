import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class BayushiYunako extends DrawCard {
    static id = 'bayushi-yunako';

    setupCardAbilities() {
        this.action({
            title: 'Switch a character\'s M and P skill',
            condition: context => context.source.isParticipating(),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => !card.hasDash(),
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    effect: AbilityDsl.effects.switchBaseSkills()
                })
            },
            effect: 'switch {0}\'s military and political skill'
        });
    }
}


export default BayushiYunako;
