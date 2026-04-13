import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';

class Yuta extends DrawCard {
    static id = 'yuta';

    setupCardAbilities() {
        this.reaction({
            title: 'Steal a fate',
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.source.controller && context.source.isAttacking()
            },
            gameAction: AbilityDsl.actions.takeFate()
        });
    }
}

export default Yuta;
