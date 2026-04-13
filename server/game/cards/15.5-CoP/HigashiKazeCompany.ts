import DrawCard from '../../drawcard';
import { Players, CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class HigashiKazeCompany extends DrawCard {
    static id = 'higashi-kaze-company';

    setupCardAbilities() {
        this.reaction({
            title: 'Prevent a character from bowing',
            when: {
                afterConflict: (event, context) => event.conflict.winner === context.source.controller && context.source.isParticipating()
            },
            target: {
                cardType: CardTypes.Character,
                controller: Players.Any,
                cardCondition: (card, context) => card.getFate() === 0 && card.isParticipating() && card !== context.source,
                gameAction: AbilityDsl.actions.cardLastingEffect({
                    effect: AbilityDsl.effects.doesNotBow()
                })
            },
            effect: 'prevent {0} from bowing at the end of the conflict'
        });
    }
}


export default HigashiKazeCompany;
