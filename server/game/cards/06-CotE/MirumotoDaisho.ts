import DrawCard from '../../drawcard';
import { Players } from '../../Constants';

class MirumotoDaisho extends DrawCard {
    static id = 'mirumoto-daisho';

    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.cannotHaveOtherRestrictedAttachments(this)
        });

        this.persistentEffect({
            condition: context => this.game.currentDuel && this.game.currentDuel.isInvolved(context.source.parent),
            targetController: Players.Opponent,
            effect: [
                ability.effects.cannotBidInDuels('1'),
                ability.effects.cannotBidInDuels('5')
            ]
        });
    }
}


export default MirumotoDaisho;
