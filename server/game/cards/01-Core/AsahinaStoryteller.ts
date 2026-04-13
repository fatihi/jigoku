import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class AsahinaStoryteller extends DrawCard {
    static id = 'asahina-storyteller';

    setupCardAbilities() {
        this.persistentEffect({
            match: card => card.getType() === CardTypes.Character && card.isHonored && card.isFaction('crane'),
            effect: AbilityDsl.effects.addKeyword('sincerity')
        });
    }
}


export default AsahinaStoryteller;

