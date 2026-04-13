import DrawCard from '../../drawcard';
import AbilityDsl from '../../abilitydsl';

class VineTattoo extends DrawCard {
    static id = 'vine-tattoo';

    setupCardAbilities() {
        this.attachmentConditions({
            myControl: true
        });

        this.whileAttached({
            effect: [
                AbilityDsl.effects.addTrait('tattooed'),
                AbilityDsl.effects.cardCannot({
                    cannot: 'target',
                    restricts: 'equalOrMoreExpensiveCharacterTriggeredAbilities',
                    source: this
                }),
                AbilityDsl.effects.cardCannot({
                    cannot: 'target',
                    restricts: 'equalOrMoreExpensiveCharacterKeywords',
                    source: this
                })
            ]
        });
    }
}


export default VineTattoo;
