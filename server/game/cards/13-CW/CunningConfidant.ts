import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class CunningConfidant extends DrawCard {
    static id = 'cunning-confidant';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isParticipating() && context.player.opponent && context.player.opponent.getClaimedRings().length > context.player.getClaimedRings().length,
            effect: AbilityDsl.effects.modifyPoliticalSkill(2)
        });
    }
}


export default CunningConfidant;
