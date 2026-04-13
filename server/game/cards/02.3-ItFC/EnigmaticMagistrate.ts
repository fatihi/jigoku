import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class EnigmaticMagistrate extends DrawCard {
    static id = 'enigmatic-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            effect: AbilityDsl.effects.cannotContribute(() => {
                return card => card.getCost() === 0 || card.getCost() && card.getCost() % 2 === 0;
            })
        });
    }
}


export default EnigmaticMagistrate;
