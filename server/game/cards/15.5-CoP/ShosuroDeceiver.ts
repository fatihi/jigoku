import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ShosuroDeceiver extends DrawCard {
    static id = 'shosuro-deceiver';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isParticipating(),
            effect: AbilityDsl.effects.gainAllAbilitiesDynamic((card, context) => {
                return context.game.currentConflict.getParticipants(a => a.isDishonored && a !== card);
            })
        });
    }
}


export default ShosuroDeceiver;
