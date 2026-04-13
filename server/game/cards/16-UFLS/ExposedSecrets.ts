import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class ExposedSecrets extends DrawCard {
    static id = 'exposed-secrets';

    setupCardAbilities() {
        this.action({
            title: 'Bow attacking character',
            condition: context => context.game.isDuringConflict('political'),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isParticipating() && card.getPoliticalSkill() <= card.controller.showBid,
                gameAction: AbilityDsl.actions.bow()
            }
        });
    }
}


export default ExposedSecrets;
