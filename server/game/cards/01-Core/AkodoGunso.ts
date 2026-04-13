import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class AkodoGunso extends DrawCard {
    static id = 'akodo-gunso';

    setupCardAbilities() {
        this.reaction({
            title: 'Refill province faceup',
            when: {
                onCharacterEntersPlay: (event, context) =>
                    event.card === context.source && context.game.getProvinceArray().includes(event.originalLocation)
            },
            gameAction: AbilityDsl.actions.refillFaceup((context) => ({ location: context.event.originalLocation }))
        });
    }
}


export default AkodoGunso;
