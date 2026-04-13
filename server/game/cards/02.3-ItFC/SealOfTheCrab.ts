import DrawCard from '../../drawcard';

class SealOfTheCrab extends DrawCard {
    static id = 'seal-of-the-crab';

    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addFaction('crab'),
                ability.effects.addTrait('berserker')
            ]
        });
    }
}


export default SealOfTheCrab;
