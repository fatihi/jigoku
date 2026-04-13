import DrawCard from '../../../drawcard';
import AbilityDsl from '../../../abilitydsl';
import { TargetModes } from '../../../Constants';

class CommuneWithTheSpirits extends DrawCard {
    static id = 'commune-with-the-spirits';

    setupCardAbilities() {
        this.action({
            title: 'Claim a ring',
            target: {
                mode: TargetModes.Ring,
                activePromptTitle: 'Choose an unclaimed ring',
                ringCondition: ring => ring.isUnclaimed(),
                gameAction: AbilityDsl.actions.sequential([
                    AbilityDsl.actions.takeFateFromRing(context => ({
                        target: context.ring,
                        amount: context.ring.fate,
                        removeOnly: true
                    })),
                    AbilityDsl.actions.claimRing({ takeFate: false, type: 'political'})
                ])
            },
            max: AbilityDsl.limit.perRound(1),
            effect: 'discard all fate from the {0} and claim it as a political ring'
        });
    }
}

export default CommuneWithTheSpirits;
