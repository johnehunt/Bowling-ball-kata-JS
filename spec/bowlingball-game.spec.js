const BowlingGame = require("../bowlingball-game.js");

let game;
const MAX_NUMBER_OF_ROLLS_BASIC_GAME = 20;

beforeEach(() => {
  game = new BowlingGame(); //create new game
});

describe("simple games", () => {
  it("A game with no scores for any roll should equal zero", () => {
    rollMany(MAX_NUMBER_OF_ROLLS_BASIC_GAME, 0);
    expect(game.score).toEqual(0);
  });

  it("A game with score 1 for each roll should equal 20", () => {
    rollMany(MAX_NUMBER_OF_ROLLS_BASIC_GAME, 1);
    expect(game.score).toEqual(20);
  });

  it("A game with score 2 for each roll should equal 40", () => {
    rollMany(MAX_NUMBER_OF_ROLLS_BASIC_GAME, 2);
    expect(game.score).toEqual(40);
  });
});

describe("Spare games", () => {
  it("Game with a spare in frame 1 and zeros should score 16", () => {
    rollSpare(5, 5);
    // spare bonus
    game.roll(3);
    rollMany(17, 0);
    expect(game.score).toEqual(16);
  });
});

describe("Strike games", () => {
  it("A game with a strike in first frame and zeros should score 24", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score).toEqual(24);
  });

  it("A perfect game has 12 strikes - should equal 300", () => {
    rollMany(12, 10);
    expect(game.score).toEqual(300);
  });
});

function rollStrike() {
  game.roll(10);
}

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}

function rollSpare(first, second) {
  game.roll(first);
  game.roll(second);
}
