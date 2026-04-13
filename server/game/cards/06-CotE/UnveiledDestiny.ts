import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class UnveiledDestiny extends DrawCard {
    static id = 'unveiled-destiny';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => !!context.player.role,
            effect: AbilityDsl.effects.addElementAsAttacker(card => card.controller.role.getElement())
        });
    }
}


export default UnveiledDestiny;
