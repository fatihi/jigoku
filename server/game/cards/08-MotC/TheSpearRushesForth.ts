import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes, Players } from '../../Constants';

class TheSpearRushesForth extends DrawCard {
    static id = 'the-spear-rushes-forth';

    setupCardAbilities() {
        this.action({
            title: 'Bow a participating character',
            condition: () => this.game.isDuringConflict('military'),
            cost: AbilityDsl.costs.discardStatusToken({
                cardCondition: card => card.isHonored && card.isParticipating()
            }),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Opponent,
                cardCondition: card => card.isParticipating(),
                gameAction: AbilityDsl.actions.bow()
            }
        });
    }
}


export default TheSpearRushesForth;
