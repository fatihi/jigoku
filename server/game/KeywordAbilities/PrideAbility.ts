import * as AbilityLimit from '../AbilityLimit';
import { AbilityTypes } from '../Constants';
import type { TriggeredAbilityContext } from '../TriggeredAbilityContext';
import type DrawCard from '../drawcard';
import type Game from '../game';
import TriggeredAbility from '../triggeredability';

export default class PrideAbility extends TriggeredAbility {
    constructor(game: Game, card: DrawCard) {
        super(game, card, AbilityTypes.KeywordReaction, {
            when: {
                afterConflict: (event: any, context: TriggeredAbilityContext) => context.source.isParticipating() && context.source.hasPride() &&
                                                   ((event.conflict.winner === context.player && context.source.allowGameAction('honor', context)) ||
                                                   (event.conflict.loser === context.player && context.source.allowGameAction('dishonor', context)))
            },
            title: card.name + '\'s Pride',
            printedAbility: false,
            message: '{0} is {1}honored due to their Pride',
            messageArgs: (context: TriggeredAbilityContext) => [context.source, context.event.conflict.winner === context.player ? '' : 'dis'],
            limit: AbilityLimit.perConflict(1),
            handler: (context: TriggeredAbilityContext) => {
                if(context.event.conflict.winner === context.player) {
                    this.game.applyGameAction(context, { honor: context.source });
                } else {
                    this.game.applyGameAction(context, { dishonor: context.source });
                }
            }
        });
    }

    isTriggeredAbility() {
        return false;
    }

    isKeywordAbility() {
        return true;
    }
}
