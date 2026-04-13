import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { AbilityTypes, CardTypes, Locations, Players, PlayTypes } from '../../Constants';

class Kunshu extends DrawCard {
    static id = 'kunshu';

    setupCardAbilities() {
        this.attachmentConditions({
            myControl: true,
            unique: true
        });

        this.grantedAbilityLimits = {};
        this.whileAttached({
            effect: AbilityDsl.effects.gainAbility(AbilityTypes.Action, {
                title: 'Play a card',
                cost: AbilityDsl.costs.discardImperialFavor(),
                condition: context => context.source.isParticipating(),
                printedAbility: false,
                target: {
                    cardType: [CardTypes.Event, CardTypes.Attachment],
                    location: [Locations.ConflictDiscardPile],
                    player: Players.Self,
                    controller: Players.Opponent,
                    gameAction: AbilityDsl.actions.playCard(() => ({
                        playType: PlayTypes.Other,
                        ignoreFateCost: true,
                        source: this
                    }))
                },
                effect: 'play {0}'
            })
        });
    }
}


export default Kunshu;
