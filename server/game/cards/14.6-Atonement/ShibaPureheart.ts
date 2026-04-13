import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { CardTypes } from '../../Constants';

class ShibaPureheart extends DrawCard {
    static id = 'shiba-pureheart';

    setupCardAbilities() {
        this.reaction({
            title: 'Honor a character',
            when: {
                onConflictDeclared: (event, context) => {
                    let controller = context.player;
                    let attacker = event.conflict.attackingPlayer;
                    if(attacker === controller.opponent) {
                        return this.game.getConflicts(attacker).filter(conflict => !conflict.passed).length === 2;
                    }
                    return false;
                }
            },
            target: {
                cardType: CardTypes.Character,
                gameAction: AbilityDsl.actions.honor()
            }
        });
    }
}


export default ShibaPureheart;
