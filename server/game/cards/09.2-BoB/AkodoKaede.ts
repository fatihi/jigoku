import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Locations } from '../../Constants';

class AkodoKaede extends DrawCard {
    static id = 'akodo-kaede';

    setupCardAbilities() {
        this.persistentEffect({
            effect: AbilityDsl.effects.immunity({
                restricts: 'opponentsRingEffects'
            })
        });

        this.wouldInterrupt({
            title: 'Prevent a character from leaving play',
            when: {
                onCardLeavesPlay: (event, context) => event.card.type === CardTypes.Character && event.card !== context.source && event.card.location === Locations.PlayArea
            },
            effect: 'prevent {1} from leaving play',
            effectArgs: context => context.event.card,
            gameAction: AbilityDsl.actions.cancel(context => ({
                target: context.source,
                replacementGameAction: AbilityDsl.actions.removeFate()
            }))
        });
    }
}


export default AkodoKaede;

