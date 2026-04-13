import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class TeacherOfEmptyThought extends DrawCard {
    static id = 'teacher-of-empty-thought';

    setupCardAbilities() {
        this.action({
            title: 'Draw a card',
            condition: context => context.source.isParticipating() && context.game.currentConflict.getNumberOfCardsPlayed(context.player) >= 3,
            gameAction: AbilityDsl.actions.draw()
        });
    }
}


export default TeacherOfEmptyThought;
