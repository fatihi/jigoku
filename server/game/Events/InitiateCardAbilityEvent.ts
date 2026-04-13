import { Event } from './Event';
import { EventNames } from '../Constants';

class InitiateCardAbilityEvent extends Event {
    cardTargets: any[];
    ringTargets: any[];
    selectTargets: any[];
    tokenTargets: any[];
    allTargets: any[];

    constructor(params: any, handler?: (event: any) => void) {
        super(EventNames.OnInitiateAbilityEffects, params, handler);
        if(!this.context.ability.doesNotTarget) {
            this.cardTargets = Object.values(this.context.targets).flat();
            this.ringTargets = Object.values(this.context.rings).flat();
            this.selectTargets = Object.values(this.context.selects).flat();
            this.tokenTargets = Object.values(this.context.tokens).flat();
        } else {
            this.cardTargets = [];
            this.ringTargets = [];
            this.selectTargets = [];
            this.tokenTargets = [];
        }
        this.allTargets = this.cardTargets.concat(this.ringTargets, this.selectTargets, this.tokenTargets);
    }
}

export = InitiateCardAbilityEvent;
