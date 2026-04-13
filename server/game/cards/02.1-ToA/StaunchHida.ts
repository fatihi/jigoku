import DrawCard from '../../drawcard';

class StaunchHida extends DrawCard {
    static id = 'staunch-hida';

    setupCardAbilities(ability) {
        this.reaction({
            title: 'Resolve the ring effect',
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.source.controller && context.source.isDefending()
            },
            gameAction: ability.actions.resolveConflictRing()
        });
    }
}


export default StaunchHida;
