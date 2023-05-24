import { Moves, RockPaperScissors } from "./RockPaperScissors";

describe("game", () => {
  let sut: RockPaperScissors;
  beforeAll(() => {
    sut = new RockPaperScissors();
  });
  describe("rock", () => {
    it("should win over scissors", () => {
      const expected = { draw: false, winner: 0, loser: 1 };
      const actual = sut.definesWinnerAndLoser(Moves.ROCK, Moves.SCISSORS);

      expect(actual).toMatchObject(expected);
    });
    it("should draw over rock", () => {
      const expected = { draw: true, winner: 0, loser: 0 };
      const actual = sut.definesWinnerAndLoser(Moves.ROCK, Moves.ROCK);

      expect(actual).toMatchObject(expected);
    });
    it("should lose over paper", () => {
      const expected = { draw: false, winner: 1, loser: 0 };
      const actual = sut.definesWinnerAndLoser(Moves.ROCK, Moves.PAPER);

      expect(actual).toMatchObject(expected);
    });
  });

  describe("paper", () => {
    it("should wins over rock", () => {
      const expected = { draw: false, winner: 0, loser: 1 };
      const actual = sut.definesWinnerAndLoser(Moves.PAPER, Moves.ROCK);

      expect(actual).toMatchObject(expected);
    });
    it("should draw over paper", () => {
      const expected = { draw: true, winner: 0, loser: 0 };
      const actual = sut.definesWinnerAndLoser(Moves.PAPER, Moves.PAPER);

      expect(actual).toMatchObject(expected);
    });
    it("should lose over scissors", () => {
      const expected = { draw: false, winner: 1, loser: 0 };
      const actual = sut.definesWinnerAndLoser(Moves.PAPER, Moves.SCISSORS);

      expect(actual).toMatchObject(expected);
    });
  });

  describe("scissors", () => {
    it("should wins over paper", () => {
      const expected = { draw: false, winner: 0, loser: 1 };
      const actual = sut.definesWinnerAndLoser(Moves.SCISSORS, Moves.PAPER);

      expect(actual).toMatchObject(expected);
    });
    it("should draw over scissors", () => {
      const expected = { draw: true, winner: 0, loser: 0 };
      const actual = sut.definesWinnerAndLoser(Moves.SCISSORS, Moves.SCISSORS);

      expect(actual).toMatchObject(expected);
    });
    it("should lose over rock", () => {
      const expected = { draw: false, winner: 1, loser: 0 };
      const actual = sut.definesWinnerAndLoser(Moves.SCISSORS, Moves.ROCK);

      expect(actual).toMatchObject(expected);
    });
  });
});
