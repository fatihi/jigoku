import DrawCard from '../../drawcard';
import { Locations, Players, PlayTypes } from '../../Constants';

class TogashiMitsu extends DrawCard {
    static id = 'togashi-mitsu';

    setupCardAbilities(ability) {
        this.action({
            title: 'Play a monk, kiho or tattoo card from discard',
            condition: context => context.source.isParticipating(),
            target: {
                location: Locations.ConflictDiscardPile,
                controller: Players.Self,
                cardCondition: card => card.hasTrait('monk') || card.hasTrait('kiho') || card.hasTrait('tattoo'),
                gameAction: ability.actions.playCard({
                    source: this,
                    playType: PlayTypes.PlayFromHand,
                    destination: Locations.ConflictDeck,
                    destinationOptions: { bottom: true }
                })
            }
        });
    }
}


export default TogashiMitsu;
