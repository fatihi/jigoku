import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class BrashSamurai extends DrawCard {
    static id = 'brash-samurai';

    setupCardAbilities() {
        this.action({
            title: 'Honor this character',
            condition: context =>
                context.source.isParticipatingFor(context.player) &&
                this.game.currentConflict.getNumberOfParticipantsFor(context.player) === 1,
            gameAction: AbilityDsl.actions.honor()
        });
    }
}


export default BrashSamurai;
