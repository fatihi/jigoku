import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class InsightfulGatekeeper extends DrawCard {
    static id = 'insightful-gatekeeper';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isParticipating() && context.player.opponent && context.player.opponent.getClaimedRings().length > context.player.getClaimedRings().length,
            effect: AbilityDsl.effects.modifyMilitarySkill(2)
        });
    }
}


export default InsightfulGatekeeper;
