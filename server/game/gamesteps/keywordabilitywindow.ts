import ForcedTriggeredAbilityWindow from './forcedtriggeredabilitywindow';

class KeywordAbilityWindow extends ForcedTriggeredAbilityWindow {
    constructor(game: any, abilityType: any, window: any, eventsToExclude: any[] = []) {
        super(game, abilityType, window, eventsToExclude);
    }

    addChoice(context: any): void {
        if(!context.event.cancelled && !this.hasAbilityBeenTriggered(context) && context.ability && context.ability.isKeywordAbility()) {
            this.choices.push(context);
        }
    }
}

export default KeywordAbilityWindow;
