import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class MediatorOfHostilities extends DrawCard {
    static id = 'mediator-of-hostilities';

    setupCardAbilities() {
        this.reaction({
            title: 'Draw a card',
            limit: AbilityDsl.limit.perRound(2),
            when: {
                onConflictPass: () => true
            },
            gameAction: AbilityDsl.actions.draw()
        });
    }
}


export default MediatorOfHostilities;
