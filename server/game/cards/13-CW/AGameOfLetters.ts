import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';
import { TargetModes, Players, CardTypes, CharacterStatus } from '../../Constants';

class AGameOfLetters extends DrawCard {
    static id = 'a-game-of-letters';

    setupCardAbilities() {
        this.action({
            title: 'Honor or dishonor a character',
            condition: () => this.game.isDuringConflict('political'),
            targets: {
                token: {
                    activePromptTitle: 'Choose a token',
                    cardType: CardTypes.Character,
                    mode: TargetModes.Token,
                    tokenCondition: token => token.grantedStatus === CharacterStatus.Honored || token.grantedStatus === CharacterStatus.Dishonored
                },
                character: {
                    activePromptTitle: 'Choose a character',
                    dependsOn: 'token',
                    cardType: CardTypes.Character,
                    cardCondition: (card, context) => card.controller !== context.tokens.token[0].card.controller && card.isParticipating(),
                    player: Players.Any,
                    gameAction: AbilityDsl.actions.conditional({
                        condition: context => context.tokens.token[0].grantedStatus === CharacterStatus.Honored,
                        trueGameAction: AbilityDsl.actions.honor(),
                        falseGameAction: AbilityDsl.actions.dishonor()
                    })
                }
            }
        });
    }
}


export default AGameOfLetters;
