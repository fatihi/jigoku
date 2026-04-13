import DrawCard from '../../drawcard';
import { CardTypes } from '../../Constants';

class DojiFumiki extends DrawCard {
    static id = 'doji-fumiki';

    setupCardAbilities(ability) {
        this.action({
            title: 'Bow a dishonored character',
            condition: context => context.source.isParticipating(),
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isDishonored && card.isParticipating(),
                gameAction: ability.actions.bow()
            }
        });
    }
}


export default DojiFumiki;
