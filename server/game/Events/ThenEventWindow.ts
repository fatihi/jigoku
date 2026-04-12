import EventWindow from './EventWindow';
import { AbilityTypes } from '../Constants';
import type { Event } from './Event';

export default class ThenEventWindow extends EventWindow {
    openWindow(abilityType: AbilityTypes) {
        if(abilityType !== AbilityTypes.ForcedReaction && abilityType !== AbilityTypes.Reaction && abilityType !== AbilityTypes.DuelReaction) {
            super.openWindow(abilityType);
        }
    }

    resetCurrentEventWindow() {
        for(const event of this.events) {
            this.previousEventWindow.addEvent(event);
        }
        super.resetCurrentEventWindow();
    }
}
