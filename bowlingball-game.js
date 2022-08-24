class BowlingGame {

    constructor(){
        this.rolls = []; //to store number of pins knocked over in each roll
    }

    roll(pins){
        this.rolls.push(pins); //save number of pins knocked every roll
    }

    isSpare(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10
    }

    spareBonus(frameIndex) {
        return this.rolls[frameIndex + 2]
    }

    calculateStandardFrameScore(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
    }

    get score() {
        let score = 0
        let frameIndex = 0
        for(let frame=0; frame < 10;frame++) {
            if (this.isSpare(frameIndex)) {
                 score += this.calculateStandardFrameScore(frameIndex) +
                          this.spareBonus(frameIndex)
             } else {
                 score += this.calculateStandardFrameScore(frameIndex);
             }
             frameIndex += 2;
        }
        return score
    }

}

module.exports = BowlingGame
