import DrawCard from '../../drawcard';
import { Players, CardTypes, Phases } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class DaidojiNetsu extends DrawCard {
    static id = 'daidoji-netsu';

    setupCardAbilities() {
        this.persistentEffect({
            condition: () => this.game.currentPhase === Phases.Conflict,
            targetController: Players.Any,
            match: (card, context) => card.getType() === CardTypes.Character && card !== context.source,
            effect: [
                AbilityDsl.effects.cardCannot({
                    cannot: 'leavePlay',
                    restricts: 'nonKeywordAbilities'})
            ]
        });
    }
}


export default DaidojiNetsu;

