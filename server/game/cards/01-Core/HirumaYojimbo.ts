import DrawCard from '../../drawcard';

class HirumaYojimbo extends DrawCard {
    static id = 'hiruma-yojimbo';

    setupCardAbilities(ability) {
        this.persistentEffect({
            effect: ability.effects.cardCannot('declareAsAttacker')
        });
    }
}


export default HirumaYojimbo;
