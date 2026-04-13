import DrawCard from '../../../drawcard';
import { Locations, CardTypes, Players } from '../../../Constants';
import AbilityDsl from '../../../abilitydsl';

class ImprovisedInfrastructure extends DrawCard {
    static id = 'improvised-infrastructure';

    setupCardAbilities() {
        this.action({
            title: 'Move a card in a province',
            targets: {
                cardInProvince: {
                    cardType: CardTypes.Holding,
                    controller: Players.Self,
                    location: Locations.Provinces,
                    cardCondition: card => !card.isFacedown()
                },
                province: {
                    targets: false,
                    dependsOn: 'cardInProvince',
                    location: Locations.Provinces,
                    cardType: CardTypes.Province,
                    player: Players.Any,
                    cardCondition: (card, context) =>
                        card.location !== Locations.StrongholdProvince && !card.isBroken &&
                        ( //same controller check
                            (card.controller === context.targets.cardInProvince.controller)
                        ) &&
                        ( //different location check
                            (card.location !== context.targets.cardInProvince.location)
                        ),
                    gameAction: AbilityDsl.actions.moveCard(context => ({
                        target: context.targets.cardInProvince,
                        destination: context.targets.province.location
                    }))
                }
            },
            effect: 'move {1} to {2}',
            effectArgs: context => [
                context.targets.cardInProvince.isFacedown() ? 'a facedown card' : context.targets.cardInProvince,
                context.targets.province.isFacedown() ? context.targets.province.location : context.targets.province
            ]
        });
    }
}


export default ImprovisedInfrastructure;
