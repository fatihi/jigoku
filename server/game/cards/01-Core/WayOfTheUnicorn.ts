import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class WayOfTheUnicorn extends DrawCard {
    static id = 'way-of-the-unicorn';

    setupCardAbilities() {
        this.wouldInterrupt({
            title: 'Keep the first player token',
            when: {
                onPassFirstPlayer: (event, context) => event.player === context.player.opponent
            },
            cannotBeMirrored: true,
            effect: 'keep the first player token',
            gameAction: AbilityDsl.actions.cancel()
        });
    }
}


export default WayOfTheUnicorn;
