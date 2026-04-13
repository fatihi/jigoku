import DrawCard from '../../drawcard';
import { AbilityTypes, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class YogoParamour extends DrawCard {
    static id = 'yogo-paramour';

    setupCardAbilities() {
        this.dire({
            effect: AbilityDsl.effects.gainAbility(AbilityTypes.Action, {
                title: 'Dishonor any character',
                cost: AbilityDsl.costs.bowSelf(),
                target: {
                    cardType: CardTypes.Character,
                    gameAction: AbilityDsl.actions.dishonor()
                }
            })
        });
    }
}


export default YogoParamour;
