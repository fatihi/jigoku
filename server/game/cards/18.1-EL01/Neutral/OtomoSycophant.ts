import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';

class OtomoSycophant extends DrawCard {
    static id = 'otomo-sycophant';

    setupCardAbilities() {
        this.action({
            title: 'Honor Self',
            condition: context => context.player.imperialFavor !== '',
            gameAction: AbilityDsl.actions.honor()
        });
    }
}

export default OtomoSycophant;
