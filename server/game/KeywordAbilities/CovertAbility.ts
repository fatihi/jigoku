import BaseAbility from '../baseability';
import { AbilityTypes } from '../Constants';

class CovertAbility extends BaseAbility {
    title: string;

    constructor() {
        super({});
        this.title = 'covert';
        this.abilityType = AbilityTypes.KeywordReaction;
    }

    isCardAbility() {
        return true;
    }

    isKeywordAbility() {
        return true;
    }
}

export = CovertAbility;
