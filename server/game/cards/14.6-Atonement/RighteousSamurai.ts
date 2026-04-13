import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class RighteousSamurai extends DrawCard {
    static id = 'righteous-samurai';

    setupCardAbilities() {
        this.reaction({
            title: 'Honor a character',
            when: {
                onModifyHonor: (event, context) => {
                    const honorLoss = event.amount < 0;
                    const viaOpponentsEffect = (context.player.opponent === event.context.player);
                    const viaRingEffect = (event.context.source.type === 'ring');
                    const viaCardEffect = event.context.ability.isCardAbility();
                    const honorLossBelongsToController = event.player === context.player;
                    return honorLoss && viaOpponentsEffect && honorLossBelongsToController && (viaRingEffect || viaCardEffect);
                },
                onTransferHonor: (event, context) => {
                    const honorLoss = event.amount > 0;
                    const viaOpponentsEffect = (context.player.opponent === event.context.player);
                    const viaRingEffect = (event.context.source.type === 'ring');
                    const viaCardEffect = event.context.ability.isCardAbility();
                    const honorLossBelongsToController = event.player === context.player;
                    return honorLoss && viaOpponentsEffect && honorLossBelongsToController && (viaRingEffect || viaCardEffect);
                }
            },
            target: {
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.honor()
            }
        });
    }
}


export default RighteousSamurai;
