describe('Our Duty!', function () {
    integration(function () {
        describe('first ability - sacrifice to force opponent sacrifice', function () {
            beforeEach(function () {
                this.setupTest({
                    phase: 'conflict',
                    player1: {
                        inPlay: ['kaiu-envoy', 'borderlands-defender'],
                        hand: ['our-duty-']
                    },
                    player2: {
                        inPlay: ['matsu-berserker']
                    }
                });

                this.kaiuEnvoy = this.player1.findCardByName('kaiu-envoy');
                this.borderlandsDefender = this.player1.findCardByName('borderlands-defender');
                this.ourDuty = this.player1.findCardByName('our-duty-');
                this.matsuBerserker = this.player2.findCardByName('matsu-berserker');
            });

            it('should not be playable during the first round', function () {
                this.player1.clickCard(this.ourDuty);
                expect(this.player1).toHavePrompt('Action Window');
            });

            it('should be playable after the first round', function () {
                this.game.roundNumber = 2;
                this.player1.clickCard(this.ourDuty);
                this.player1.clickCard(this.kaiuEnvoy);

                expect(this.kaiuEnvoy.location).toBe('dynasty discard pile');
                expect(this.player2).toHavePrompt('Choose a character to sacrifice');
                this.player2.clickCard(this.matsuBerserker);

                expect(this.matsuBerserker.location).toBe('dynasty discard pile');
            });

            it('should only allow sacrificing crab characters', function () {
                this.game.roundNumber = 2;
                this.player1.clickCard(this.ourDuty);
                expect(this.player1).toBeAbleToSelect(this.kaiuEnvoy);
                expect(this.player1).toBeAbleToSelect(this.borderlandsDefender);
                expect(this.player1).not.toBeAbleToSelect(this.matsuBerserker);
            });

            it('should be limited to once per game', function () {
                this.game.roundNumber = 2;
                this.player1.clickCard(this.ourDuty);
                this.player1.clickCard(this.kaiuEnvoy);
                this.player2.clickCard(this.matsuBerserker);

                this.player2.pass();

                this.player1.moveCard(this.ourDuty, 'hand');
                this.player1.clickCard(this.ourDuty);
                expect(this.player1).toHavePrompt('Action Window');
            });
        });

        describe('second ability - send attacker home', function () {
            beforeEach(function () {
                this.setupTest({
                    phase: 'conflict',
                    player1: {
                        inPlay: ['kaiu-envoy'],
                        hand: ['our-duty-']
                    },
                    player2: {
                        inPlay: ['matsu-berserker']
                    }
                });

                this.kaiuEnvoy = this.player1.findCardByName('kaiu-envoy');
                this.ourDuty = this.player1.findCardByName('our-duty-');
                this.matsuBerserker = this.player2.findCardByName('matsu-berserker');

                this.noMoreActions();
                this.player1.passConflict();
                this.noMoreActions();
                this.initiateConflict({
                    attackers: [this.matsuBerserker],
                    defenders: [this.kaiuEnvoy],
                    type: 'military'
                });
            });

            it('should sacrifice a defender to send an attacker home', function () {
                this.player1.clickCard(this.ourDuty);
                this.player1.clickPrompt('Pay costs first');
                this.player1.clickCard(this.kaiuEnvoy);
                this.player1.clickCard(this.matsuBerserker);

                expect(this.kaiuEnvoy.location).toBe('dynasty discard pile');
                expect(this.matsuBerserker.inConflict).toBe(false);
            });
        });
    });
});
