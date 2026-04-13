import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ReinforcedPlate extends DrawCard {
    static id = 'reinforced-plate';

    setupCardAbilities() {
        this.whileAttached({
            condition: context => context.source.parent && context.source.parent.isParticipating() && this.game.isDuringConflict('military'),
            effect: AbilityDsl.effects.immunity({
                restricts: 'opponentsEvents'
            })
        });
    }
}


export default ReinforcedPlate;
