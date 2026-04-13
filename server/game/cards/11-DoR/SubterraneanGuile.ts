import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class SubterraneanGuile extends DrawCard {
    static id = 'subterranean-guile';

    setupCardAbilities() {
        this.whileAttached({
            condition: context => this.game.isDuringConflict('military') && this.isHoldingOnUnbrokenProvince(context),
            effect: AbilityDsl.effects.addKeyword('covert')
        });
    }

    isHoldingOnUnbrokenProvince(context) {
        return context.game.getProvinceArray().some(location => {
            if(!context.player.getProvinceCardInProvince(location).isBroken) {
                let cards = context.player.getDynastyCardsInProvince(location);
                if(cards.some(card => card.isFaceup() && card.type === CardTypes.Holding)) {
                    return true;
                }
            }
            return false;
        });
    }
}


export default SubterraneanGuile;
