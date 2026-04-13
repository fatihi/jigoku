import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class IkomaOrator extends DrawCard {
    static id = 'ikoma-orator';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.player.opponent && context.player.isMoreHonorable(),
            effect: AbilityDsl.effects.modifyPoliticalSkill(2)
        });
    }
}


export default IkomaOrator;
