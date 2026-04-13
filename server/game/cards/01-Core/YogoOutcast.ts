import DrawCard from '../../drawcard';

class YogoOutcast extends DrawCard {
    static id = 'yogo-outcast';

    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: context => context.player.isLessHonorable(),
            effect: ability.effects.modifyBothSkills(1)
        });
    }
}


export default YogoOutcast;

