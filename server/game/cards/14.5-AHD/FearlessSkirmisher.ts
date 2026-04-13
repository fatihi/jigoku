import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { TargetModes, Locations, CharacterStatus, CardTypes, Players } from '../../Constants';

class FearlessSkirmisher extends DrawCard {
    static id = 'fearless-skirmisher';

    setupCardAbilities() {
        this.reaction({
            title: 'Move a dishonored status token',
            when: {
                afterConflict: (event, context) =>
                    event.conflict.winner === context.source.controller &&
                    context.source.isParticipating() &&
                    event.conflict.conflictType === 'military'
            },
            targets: {
                token: {
                    activePromptTitle: 'Choose a dishonored token',
                    mode: TargetModes.Token,
                    location: Locations.Any,
                    tokenCondition: (token) => {
                        return token.grantedStatus === CharacterStatus.Dishonored;
                    }
                },
                character: {
                    activePromptTitle: 'Choose a character to receive the token',
                    dependsOn: 'token',
                    cardType: CardTypes.Character,
                    player: Players.Any,
                    gameAction: AbilityDsl.actions.moveStatusToken((context) => ({
                        target: context.tokens.token,
                        recipient: context.targets.character
                    }))
                }
            }
        });
    }
}


export default FearlessSkirmisher;
