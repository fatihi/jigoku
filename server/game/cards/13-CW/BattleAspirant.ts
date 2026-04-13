import DrawCard from '../../drawcard';
import { Durations, CardTypes, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class BattleAspirant extends DrawCard {
    static id = 'battle-aspirant';

    setupCardAbilities() {
        this.reaction({
            title: 'Force a character to defend',
            when: {
                onConflictDeclared: (event, context) => event.attackers.includes(context.source) && this.game.currentConflict.conflictType === 'military'
            },
            target: {
                controller: Players.Opponent,
                cardType: CardTypes.Character,
                cardCondition: card => !card.hasKeyword('covert'),
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    duration: Durations.UntilEndOfConflict,
                    effect: AbilityDsl.effects.mustBeDeclaredAsDefender()
                })
            },
            effect: 'force {0} to declare as a defender this conflict'
        });
    }
}


export default BattleAspirant;
