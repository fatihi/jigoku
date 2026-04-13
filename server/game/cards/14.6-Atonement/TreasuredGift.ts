import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class TeasuredGift extends DrawCard {
    static id = 'treasured-gift';

    setupCardAbilities() {
        this.attachmentConditions({
            opponentControlOnly: true
        });

        this.whileAttached({
            effect: AbilityDsl.effects.cardCannot('declareAsAttacker')
        });
    }
}


export default TeasuredGift;

