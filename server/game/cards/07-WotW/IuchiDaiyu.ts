import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations } from '../../Constants';

class IuchiDaiyu extends DrawCard {
    static id = 'iuchi-daiyu';

    setupCardAbilities() {
        this.action({
            title: '+1 military for each faceup province',
            condition: () => this.game.isDuringConflict(),
            target: {
                gameAction: AbilityDsl.actions.cardLastingEffect(context => ({
                    effect: AbilityDsl.effects.modifyMilitarySkill(
                        context.player.getNumberOfOpponentsFaceupProvinces(province => province.location !== Locations.StrongholdProvince)
                    )
                }))
            },
            effect: 'give {0} +1{1} for each faceup non-stronghold province their opponent controls (+{2}{1})',
            effectArgs: context => [
                'military',
                context.player.getNumberOfOpponentsFaceupProvinces(province => province.location !== Locations.StrongholdProvince)
            ]
        });
    }
}


export default IuchiDaiyu;
