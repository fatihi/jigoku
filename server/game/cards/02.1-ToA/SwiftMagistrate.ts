import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class SwiftMagistrate extends DrawCard {
    static id = 'swift-magistrate';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isAttacking(),
            effect: AbilityDsl.effects.cannotContribute((conflict, context) => {
                return card => card.getFate() > 0 && card !== context.source;
            })
        });
    }
}


export default SwiftMagistrate;
