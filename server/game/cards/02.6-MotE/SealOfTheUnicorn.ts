import DrawCard from '../../drawcard';

class SealOfTheUnicorn extends DrawCard {
    static id = 'seal-of-the-unicorn';

    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addFaction('unicorn'),
                ability.effects.addTrait('cavalry')
            ]
        });
    }
}


export default SealOfTheUnicorn;
