import DrawCard from '../../drawcard';

class MotoJuro extends DrawCard {
    static id = 'moto-juro';

    setupCardAbilities(ability) {
        this.action({
            title: 'Move this character to the conflict or home from the conflict',
            limit: ability.limit.perRound(2),
            gameAction: [ability.actions.sendHome(), ability.actions.moveToConflict()]
        });
    }
}


export default MotoJuro;
