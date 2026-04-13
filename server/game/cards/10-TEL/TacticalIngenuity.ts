import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { AbilityTypes, CardTypes, Locations } from '../../Constants';

class TacticalIngenuity extends DrawCard {
    static id = 'tactical-ingenuity';

    setupCardAbilities() {
        this.attachmentConditions({
            trait: 'commander'
        });
        this.whileAttached({
            effect: AbilityDsl.effects.gainAbility(AbilityTypes.Action, {
                title: 'Reveal and draw an event',
                condition: (context) => context.source.isParticipating(),
                effect: 'look at the top four cards of their deck',
                gameAction: AbilityDsl.actions.deckSearch({
                    amount: 4,
                    cardCondition: (card) => card.type === CardTypes.Event,
                    gameAction: AbilityDsl.actions.moveCard({
                        destination: Locations.Hand
                    })
                })
            })
        });
    }
}


export default TacticalIngenuity;
