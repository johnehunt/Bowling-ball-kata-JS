const BowlingGame = require("../bowlingball-game.js");

let game;

beforeEach(()=>{
    game = new BowlingGame(); //create new game
});

it('should return 0 for a game of all zeros', () => {
    rollMany(20, 0)
    expect(game.score).toEqual(0); //check that the score = 0
})

it('should return 20 for a game of all ones', () => {
    rollMany(20, 1)
    expect(game.score).toEqual(20); //check that the score = 20
})

it('A game with a spare in first frame and zeros should score 16', () => {
    rollSpare(5, 5)
    game.roll(3); 
    rollMany(17, 0)
    expect(game.score).toEqual(16);
})

it('A game with a strike in first frame and zeros should score 24', () => {
    rollStrike();
    game.roll(3); 
    game.roll(4);
    rollMany(16, 0)
    expect(game.score).toEqual(24);
})

it('A perfect game has 12 strikes - should equal 300', () => {
    rollMany(12, 10)
    expect(game.score).toEqual(300);
})

function rollStrike() {
    game.roll(10);
}

function rollSpare(first, second) {
    game.roll(first);
    game.roll(second);
}

function rollMany(rolls, pins) {
    for(let i=0; i<rolls;i++) {
        game.roll(pins);
    }
}