import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class ArmyOfTheRisingWave extends DrawCard {
    static id = 'army-of-the-rising-wave';

    setupCardAbilities() {
        this.reaction({
            title: 'Place one fate on each unclaimed ring',
            when: {
                onCharacterEntersPlay: (event, context) => event.card === context.source
            },
            // @ts-expect-error rings typed as unknown[], but filter returns valid Ring[] at runtime
            gameAction: AbilityDsl.actions.placeFateOnRing(context =>
                ({ target: Object.values(context.game.rings).filter((ring: any) => ring.isUnclaimed()) }))
        });
    }
}


export default ArmyOfTheRisingWave;
