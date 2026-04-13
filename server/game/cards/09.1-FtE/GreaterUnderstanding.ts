import { CardTypes } from '../../Constants';
import AbilityDsl from '../../abilitydsl';
import DrawCard from '../../drawcard';

class GreaterUnderstanding extends DrawCard {
    static id = 'greater-understanding';

    setupCardAbilities() {
        this.reaction({
            when: {
                onMoveFate: (event) => event.recipient === this.parent,
                onPlaceFateOnUnclaimedRings: () => this.parent.isUnclaimed()
            },
            title: 'Resolve the attached ring\'s effect',
            gameAction: AbilityDsl.actions.resolveRingEffect(context => ({ target: context.source.parent }))
        });
    }
    canAttach(ring) {
        return ring && ring.type === 'ring';
    }
    canPlayOn(source) {
        return source && source.getType() === 'ring' && this.getType() === CardTypes.Attachment;
    }
    mustAttachToRing() {
        return true;
    }
}


export default GreaterUnderstanding;

