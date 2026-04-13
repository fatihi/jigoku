import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class KoboIchiKaiJujutsu extends DrawCard {
    static id = 'kobo-ichi-kai-jujutsu';

    setupCardAbilities() {
        this.whileAttached({
            effect: AbilityDsl.effects.attachmentMilitarySkillModifier((card, context) => context.player.opponent ? context.player.opponent.getClaimedRings().length : 0)
        });
    }
}


export default KoboIchiKaiJujutsu;
