import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';
import { CardTypes, Players } from '../../../Constants';

class YogoTadashi extends DrawCard {
    static id = 'yogo-tadashi';

    setupCardAbilities() {
        this.reaction({
            title: 'Prevent a character from being targeted by events',
            when: {
                onConflictDeclared: (event, context) => event.attackers.includes(context.source),
                onDefendersDeclared: (event, context) => event.defenders.includes(context.source),
                onMoveToConflict: (event, context) => event.card === context.source
            },
            target: {
                cardType: CardTypes.Character,
                controller: Players.Any,
                gameAction: AbilityDsl.actions.cardLastingEffect(context => ({
                    target: context.target,
                    effect: AbilityDsl.effects.cardCannot({
                        cannot: 'target',
                        restricts: 'opponentsEvents'
                    })
                }))
            },
            effect: 'prevent {0} from being targeted by events played by {1}',
            effectArgs: context => [context.player.opponent]
        });
    }
}

export default YogoTadashi;
