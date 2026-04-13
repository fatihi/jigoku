import DrawCard from '../../drawcard';
import { Durations, CardTypes, Phases } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class SakeHouseSmuggler extends DrawCard {
    static id = 'sake-house-smuggler';

    setupCardAbilities() {
        this.action({
            title: 'Reduce cost of next non-event card by 1',
            phase: Phases.Conflict,
            effect: 'reduce the cost of each player\'s next non-event card by 1',
            gameAction: AbilityDsl.actions.multiple([
                AbilityDsl.actions.playerLastingEffect(context => ({
                    targetController: context.player,
                    duration: Durations.UntilEndOfPhase,
                    effect: AbilityDsl.effects.reduceNextPlayedCardCost(1, card => card.type !== CardTypes.Event)
                })),
                AbilityDsl.actions.playerLastingEffect(context => ({
                    duration: Durations.UntilEndOfPhase,
                    targetController: context.player.opponent,
                    effect: AbilityDsl.effects.reduceNextPlayedCardCost(1, card => card.type !== CardTypes.Event)
                }))
            ])
        });
    }
}


export default SakeHouseSmuggler;
