import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class BornInWar extends DrawCard {
    static id = 'born-in-war';

    setupCardAbilities() {
        this.attachmentConditions({
            trait: 'cavalry'
        });

        this.whileAttached({
            effect: AbilityDsl.effects.attachmentMilitarySkillModifier((card, context) => Object.values(context.game.rings).filter((ring: any) => ring.isUnclaimed()).length)
        });
    }
}


export default BornInWar;
