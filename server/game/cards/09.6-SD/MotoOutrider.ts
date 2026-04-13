import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class MotoOutrider extends DrawCard {
    static id = 'moto-outrider';

    setupCardAbilities() {
        this.action({
            title: 'Ready this character',
            condition: context => context.source.isParticipating() && this.game.isDuringConflict('military'),
            gameAction: AbilityDsl.actions.ready()
        });
    }
}


export default MotoOutrider;


