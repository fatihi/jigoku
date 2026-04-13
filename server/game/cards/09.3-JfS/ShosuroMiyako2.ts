import DrawCard from '../../drawcard';
import { CardTypes, Locations, Players } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ShosuroMiyako2 extends DrawCard {
    static id = 'shosuro-miyako-2';

    setupCardAbilities() {
        this.persistentEffect({
            location: Locations.Any,
            effect: AbilityDsl.effects.playerCannot({
                cannot: 'playCharacter',
                restricts: 'source'
            })
        });

        this.reaction({
            title: 'Dishonor a character',
            when: {
                onCardPlayed: (event, context) => event.card === context.source
            },
            target: {
                cardType: CardTypes.Character,
                controller: Players.Opponent,
                cardCondition: card => !card.isUnique(),
                gameAction: AbilityDsl.actions.dishonor()
            }
        });
    }

    canDisguise(card, context, intoConflictOnly) {
        return !card.isFaction('scorpion') &&
            card.allowGameAction('discardFromPlay', context) &&
            !card.isUnique() &&
            (!intoConflictOnly || card.isParticipating());
    }
}


export default ShosuroMiyako2;
