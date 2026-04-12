import { AbilityTypes } from '../Constants';
import type { TriggeredAbilityContext } from '../TriggeredAbilityContext';
import type DrawCard from '../drawcard';
import type Game from '../game';
import TriggeredAbility from '../triggeredability';

export default class CourtesyAbility extends TriggeredAbility {
    constructor(game: Game, card: DrawCard) {
        super(game, card, AbilityTypes.KeywordInterrupt, {
            when: {
                onCardLeavesPlay: (event: any, context: TriggeredAbilityContext) => event.card === context.source &&
                                                      context.source.hasCourtesy()
            },
            title: card.name + '\'s Courtesy',
            printedAbility: false,
            message: '{0} gains a fate due to {1}\'s Courtesy',
            messageArgs: (context: TriggeredAbilityContext) => [context.player, context.source],
            handler: (context: TriggeredAbilityContext) => this.game.applyGameAction(context, { gainFate: context.player })
        });
    }

    isTriggeredAbility() {
        return false;
    }

    isKeywordAbility() {
        return true;
    }
}
