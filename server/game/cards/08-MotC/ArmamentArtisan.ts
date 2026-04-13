import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ArmamentArtisan extends DrawCard {
    static id = 'armament-artisan';

    setupCardAbilities() {
        this.reaction({
            title: 'Honor this character',
            when: {
                onCardHonored: (event, context) => event.card.controller === context.player && event.card !== context.source
            },
            gameAction: AbilityDsl.actions.honor()
        });
    }
}


export default ArmamentArtisan;
