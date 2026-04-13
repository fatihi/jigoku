import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ShosuroIbuki extends DrawCard {
    static id = 'shosuro-ibuki';

    setupCardAbilities() {
        this.reaction({
            title: 'Remove one fate from each other participating character',
            when: {
                afterConflict: (event, context) =>
                    event.conflict.winner === context.source.controller &&
                    context.source.isParticipating()
            },
            gameAction: AbilityDsl.actions.removeFate(context => ({
                target: context.game.currentConflict.getParticipants(participant => participant !== context.source)
            })),
            effect: 'remove one fate from each other participating character'
        });
    }
}


export default ShosuroIbuki;
