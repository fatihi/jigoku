import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Players, CardTypes } from '../../Constants';

class SoulBeyondReproach extends DrawCard {
    static id = 'soul-beyond-reproach';

    setupCardAbilities() {
        this.action({
            title: 'Honor a character, then honor it again',
            target: {
                cardType: CardTypes.Character,
                controller: Players.Self,
                gameAction: AbilityDsl.actions.sequential([
                    AbilityDsl.actions.honor(),
                    AbilityDsl.actions.honor()
                ])
            },
            effect: 'honor {0}, then honor it again'
        });
    }
}


export default SoulBeyondReproach;
