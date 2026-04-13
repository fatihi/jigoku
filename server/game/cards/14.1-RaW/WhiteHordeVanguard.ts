import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class WhiteHordeVanguard extends DrawCard {
    static id = 'white-horde-vanguard';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.game.isDuringConflict() && context.game.conflictRecord.filter(record => record.completed).length === 0,
            effect: [
                AbilityDsl.effects.cardCannot({
                    cannot: 'sendHome',
                    restricts: 'opponentsCardEffects'
                }),
                AbilityDsl.effects.cardCannot({
                    cannot: 'moveToConflict',
                    restricts: 'opponentsCardEffects'
                }),
                AbilityDsl.effects.cardCannot({
                    cannot: 'bow',
                    restricts: 'opponentsCardEffects'
                })
            ]
        });
    }
}


export default WhiteHordeVanguard;
