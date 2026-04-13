import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class BenevolentAmbassador extends DrawCard {
    static id = 'benevolent-ambassador';

    setupCardAbilities() {
        this.reaction({
            title: 'Give both players honor',
            when: {
                afterConflict: (event, context) => context.source.isParticipating() && event.conflict.winner === context.source.controller
            },
            gameAction: AbilityDsl.actions.gainHonor(context => ({
                target: context.game.getPlayers()
            }))
        });
    }
}


export default BenevolentAmbassador;
