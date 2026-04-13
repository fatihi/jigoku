import DrawCard from '../../drawcard';
import { Phases } from '../../Constants';
import AbilityDsl from '../../abilitydsl';

class HiddenMountainPass extends DrawCard {
    static id = 'hidden-mountain-pass';

    setupCardAbilities() {
        this.interrupt({
            title: 'Flip this holding\'s province facedown',
            when: {
                onPhaseEnded: (event,context) => event.phase === Phases.Conflict && !context.player.getProvinceCardInProvince(context.source.location).isBroken
            },
            gameAction: AbilityDsl.actions.turnFacedown(context => ({
                target: context.player.getProvinceCardInProvince(context.source.location)
            })),
            effect: 'Turn {1} facedown',
            // @ts-expect-error effectArgs returns BaseCard but EffectArg union doesn't include BaseCard - game engine handles it
            effectArgs: context => context.player.getProvinceCardInProvince(context.source.location)
        });
    }
}


export default HiddenMountainPass;
