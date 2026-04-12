import CardSelector = require('../CardSelector.js');
import { Stages, Players } from '../Constants.js';

class AbilityTargetAbility {
    name: string;
    properties: any;
    abilityCondition: (ability: any) => boolean;
    selector: any;
    dependentTarget: AbilityTargetAbility | null;
    dependentCost: any;

    constructor(name: string, properties: any, ability: any) {
        this.name = name;
        this.properties = properties;
        this.abilityCondition = properties.abilityCondition || (() => true);
        this.selector = this.getSelector(properties);
        this.dependentTarget = null;
        this.dependentCost = null;
        if(this.properties.dependsOn) {
            let dependsOnTarget = ability.targets.find((target: any) => target.name === this.properties.dependsOn);
            dependsOnTarget.dependentTarget = this;
        }
    }

    getSelector(properties: any): any {
        let cardCondition = (card: any, context: any) => {
            let abilities = card.actions.concat(card.reactions).filter((ability: any) => ability.isTriggeredAbility() && this.abilityCondition(ability));
            return abilities.some((ability: any) => {
                let contextCopy = context.copy();
                contextCopy.targetAbility = ability;
                if(context.stage === Stages.PreTarget && this.dependentCost && !this.dependentCost.canPay(contextCopy)) {
                    return false;
                }
                return (!properties.cardCondition || properties.cardCondition(card, contextCopy)) &&
                       (!this.dependentTarget || this.dependentTarget.hasLegalTarget(contextCopy)) &&
                       properties.gameAction.some((gameAction: any) => gameAction.hasLegalTarget(contextCopy));
            });
        };
        return CardSelector.for(Object.assign({}, properties, { cardCondition: cardCondition, targets: false }));
    }

    canResolve(context: any): boolean {
        return !!this.properties.dependsOn || this.hasLegalTarget(context);
    }

    hasLegalTarget(context: any): boolean {
        return this.selector.optional || this.selector.hasEnoughTargets(context, this.getChoosingPlayer(context));
    }

    getAllLegalTargets(context: any): any[] {
        return this.selector.getAllLegalTargets(context, this.getChoosingPlayer(context));
    }

    getGameAction(context: any): any[] {
        return this.properties.gameAction.filter((gameAction: any) => gameAction.hasLegalTarget(context));
    }

    resolve(context: any, targetResults: any): void {
        if(targetResults.cancelled || targetResults.payCostsFirst || targetResults.delayTargeting) {
            return;
        }
        let player = context.choosingPlayerOverride || this.getChoosingPlayer(context);
        if(player === context.player.opponent && context.stage === Stages.PreTarget) {
            targetResults.delayTargeting = this;
            return;
        }
        let buttons: any[] = [];
        let waitingPromptTitle = '';
        if(context.stage === Stages.PreTarget) {
            buttons.push({ text: 'Cancel', arg: 'cancel' });
            if(context.ability.abilityType === 'action') {
                waitingPromptTitle = 'Waiting for opponent to take an action or pass';
            } else {
                waitingPromptTitle = 'Waiting for opponent';
            }
        }
        let promptProperties = {
            waitingPromptTitle: waitingPromptTitle,
            buttons: buttons,
            context: context,
            selector: this.selector,
            onSelect: (player: any, card: any) => {
                let abilities = card.actions.concat(card.reactions).filter((ability: any) => ability.isTriggeredAbility() && this.abilityCondition(ability));
                if(abilities.length === 1) {
                    context.targetAbility = abilities[0];
                } else if(abilities.length > 1) {
                    context.game.promptWithHandlerMenu(player, {
                        activePromptTitle: 'Choose an ability',
                        context: context,
                        choices: abilities.map((ability: any) => ability.title).concat('Back'),
                        choiceHandler: (choice: string) => {
                            if(choice === 'Back') {
                                context.game.queueSimpleStep(() => this.resolve(context, targetResults));
                            } else {
                                context.targetAbility = abilities.find((ability: any) => ability.title === choice);
                            }
                        }
                    });
                }
                return true;
            },
            onCancel: () => {
                targetResults.cancelled = true;
                return true;
            },
            onMenuCommand: (player: any, arg: string) => {
                if(arg === 'costsFirst') {
                    targetResults.costsFirst = true;
                    return true;
                }
                return true;
            }
        };
        context.game.promptForSelect(player, Object.assign(promptProperties, this.properties));
    }

    checkTarget(context: any): boolean {
        if(!context.targetAbility || context.choosingPlayerOverride && this.getChoosingPlayer(context) === context.player) {
            return false;
        }
        return this.properties.cardType === context.targetAbility.card.type &&
               (!this.properties.cardCondition || this.properties.cardCondition(context.targetAbility.card, context)) &&
               this.abilityCondition(context.targetAbility);
    }

    getChoosingPlayer(context: any): any {
        let playerProp = this.properties.player;
        if(typeof playerProp === 'function') {
            playerProp = playerProp(context);
        }
        return playerProp === Players.Opponent ? context.player.opponent : context.player;
    }

    hasTargetsChosenByInitiatingPlayer(context: any): boolean {
        if(this.properties.gameAction.some((action: any) => action.hasTargetsChosenByInitiatingPlayer(context))) {
            return true;
        }
        return this.getChoosingPlayer(context) === context.player;
    }
}

export default AbilityTargetAbility;
