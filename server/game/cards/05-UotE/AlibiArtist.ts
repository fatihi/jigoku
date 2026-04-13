import DrawCard from '../../drawcard';
import { Locations } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class AlibiArtist extends DrawCard {
    static id = 'alibi-artist';

    setupCardAbilities() {
        this.action({
            title: 'Look at top 2 cards of conflict deck',
            condition: context => context.player.honor <= 6,
            effect: 'look at the top two cards of their conflict deck',
            gameAction: AbilityDsl.actions.deckSearch({
                amount: 2,
                gameAction: AbilityDsl.actions.moveCard({
                    destination: Locations.Hand
                }),
                shuffle: false,
                reveal: false,
                placeOnBottomInRandomOrder: true
            })
        });
    }
}


export default AlibiArtist;
