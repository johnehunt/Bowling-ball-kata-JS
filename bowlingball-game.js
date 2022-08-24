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

    isStrike(frameIndex) {
        return this.rolls[frameIndex] == 10
    }

    get score() {
        let score = 0
        let frameIndex = 0
        for(let frame=0; frame < 10;frame++) {
            if (this.isStrike(frameIndex)) {
               score = score +  10 + this.strikeBonus(frameIndex);
               frameIndex++;
            } else if (this.isSpare(frameIndex)) {
                score = score + 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                score = score + this.sumOfBallsInFrame(frameIndex);
                frameIndex += 2;
            }
        }
        return score
    }

    strikeBonus(frameIndex) {
        return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
    }

    spareBonus(frameIndex) {
        return this.rolls[frameIndex + 2]
    }

    sumOfBallsInFrame(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }

}

module.exports = BowlingGame;
