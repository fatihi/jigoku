import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players, CardTypes } from '../../Constants';

class YogoAsami extends DrawCard {
    static id = 'yogo-asami';

    setupCardAbilities() {
        this.persistentEffect({
            match: (card) => card.name === 'Bayushi Kachiko',
            targetController: Players.Any,
            effect: AbilityDsl.effects.cardCannot({
                cannot: 'target',
                restricts: 'abilitiesTriggeredByOpponents'
            })
        });
        this.action({
            title: 'Give a character -2/-0',
            cost: AbilityDsl.costs.bowSelf(),
            condition: (context) => context.source.isParticipating(),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Any,
                cardCondition: (card) => card.isParticipating(),
                gameAction: AbilityDsl.actions.cardLastingEffect({ effect: AbilityDsl.effects.modifyMilitarySkill(-2) })
            },
            effect: 'reduce {0}\'s military skill by 2'
        });
    }
}


export default YogoAsami;
