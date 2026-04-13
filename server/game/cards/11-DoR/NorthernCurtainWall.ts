import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Locations } from '../../Constants';

class NorthernCurtainWall extends DrawCard {
    static id = 'northern-curtain-wall';

    setupCardAbilities() {
        this.persistentEffect({
            targetLocation: Locations.Provinces,
            match: (card, context) => {
                if(card.type === CardTypes.Holding) {
                    let isWall = card.hasTrait('kaiu-wall') && card.isFaceup();
                    return isWall && context.player.areLocationsAdjacent(context.source.location, card.location);
                }
                return false;
            },
            effect: AbilityDsl.effects.modifyProvinceStrengthBonus(2)
        });
    }
}


export default NorthernCurtainWall;
