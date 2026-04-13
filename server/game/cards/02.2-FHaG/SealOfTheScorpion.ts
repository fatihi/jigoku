import DrawCard from '../../drawcard';

class SealOfTheScorpion extends DrawCard {
    static id = 'seal-of-the-scorpion';

    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addFaction('scorpion'),
                ability.effects.addTrait('shinobi')
            ]
        });
    }
}


export default SealOfTheScorpion;
