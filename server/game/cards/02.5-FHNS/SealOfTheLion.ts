import DrawCard from '../../drawcard';

class SealOfTheLion extends DrawCard {
    static id = 'seal-of-the-lion';

    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addFaction('lion'),
                ability.effects.addTrait('commander')
            ]
        });
    }
}


export default SealOfTheLion;
