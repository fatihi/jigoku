import DrawCard from '../../drawcard';
import { Players, CardTypes, Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DaidojiYari extends DrawCard {
    static id = 'daidoji-yari';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.player.opponent && context.player.showBid < context.player.opponent.showBid,
            targetController: Players.Opponent,
            targetLocation: Locations.PlayArea,
            match: card => card.type === CardTypes.Character,
            effect: AbilityDsl.effects.loseKeyword('covert')
        });
    }
}


export default DaidojiYari;
