import DrawCard from '../../drawcard';
import { Phases, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class BayushiShoju2 extends DrawCard {
    static id = 'bayushi-shoju-2';

    setupCardAbilities() {
        this.persistentEffect({
            targetController: Players.Opponent,
            effect: AbilityDsl.effects.playerCannot('haveImperialFavor')
        });

        this.forcedReaction({
            title: 'After the conflict phase begins',
            when: {
                onPhaseStarted: event => event.phase === Phases.Conflict
            },
            effect: 'have each player loses an honor and draw two cards',
            gameAction: AbilityDsl.actions.multiple([
                AbilityDsl.actions.loseHonor(context => ({
                    target: context.game.getPlayers()
                })),
                AbilityDsl.actions.draw(context => ({
                    target: context.game.getPlayers(),
                    amount: 2
                }))
            ])
        });
    }
}


export default BayushiShoju2;
