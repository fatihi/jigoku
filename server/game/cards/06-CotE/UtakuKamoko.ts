import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { Locations } from '../../Constants';

class UtakuKamoko extends DrawCard {
    static id = 'utaku-kamoko';

    setupCardAbilities() {
        this.persistentEffect({
            condition: context => context.source.isDishonored,
            effect: AbilityDsl.effects.honorStatusDoesNotModifySkill()
        });
        this.reaction({
            title: 'Ready and honor',
            when: {
                onBreakProvince: (event, context) => context.player.opponent && event.conflict.attackingPlayer === context.player.opponent
            },
            cost: AbilityDsl.costs.discardCard({
                location: Locations.Hand,
                targets: true
            }),
            gameAction: [
                AbilityDsl.actions.ready(),
                AbilityDsl.actions.honor()
            ],
            effect: 'ready and honor {0}'
        });
    }
}


export default UtakuKamoko;
