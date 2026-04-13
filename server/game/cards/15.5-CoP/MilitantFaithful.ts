import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';


class MilitantFaithful extends DrawCard {
    static id = 'militant-faithful';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.player.opponent && context.player.opponent.anyCardsInPlay(card => card.isParticipating() && !card.isOrdinary()),
            effect: AbilityDsl.effects.doesNotBow()
        });
    }
}


export default MilitantFaithful;
