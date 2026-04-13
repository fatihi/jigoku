import DrawCard from '../../drawcard';
class KitsukiCounselor extends DrawCard {
    static id = 'kitsuki-counselor';

    setupCardAbilities(ability) {
        this.composure({
            effect: ability.effects.modifyBothSkills(1)
        });
    }
}
export default KitsukiCounselor;
