import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ThirdTower extends DrawCard {
    static id = 'third-tower';

    setupCardAbilities() {
        this.grantedAbilityLimits = {};
        this.reaction({
            title: 'Take an honor from your opponent',
            when: {
                onConflictDeclared: (event, context) => {
                    if(event.conflict.attackingPlayer === context.player) {
                        return false;
                    }
                    let cards = context.player.getDynastyCardsInProvince(event.conflict.declaredProvince.location);
                    return !cards.some(card => card.isFaceup() && card.type === CardTypes.Holding && card.hasTrait('kaiu-wall'));
                }
            },
            gameAction: AbilityDsl.actions.takeHonor(),
            limit: AbilityDsl.limit.unlimitedPerConflict()
        });
    }
}


export default ThirdTower;
