import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class TogashiInitiate extends DrawCard {
    static id = 'togashi-initiate';

    setupCardAbilities() {
        this.action({
            title: 'Honor this character',
            condition: context => context.source.isAttacking(),
            cost: AbilityDsl.costs.payFateToRing(1),
            gameAction: AbilityDsl.actions.honor()
        });
    }
}


export default TogashiInitiate;
