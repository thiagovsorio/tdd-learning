export enum Moves {
  ROCK,
  PAPER,
  SCISSORS,
}

export class RockPaperScissors {
  definesWinnerAndLoser(firstPlayer: Moves, secondPlayer: Moves) {
    if (firstPlayer === secondPlayer  ) {
      return { draw: true, winner: 0, loser: 0 };
    }

    switch (firstPlayer) {
      case Moves.ROCK:
        //
        switch (secondPlayer) {
          case Moves.PAPER:
            return { draw: false, winner: 1, loser: 0 };
          case Moves.SCISSORS:
            return { draw: false, winner: 0, loser: 1 };
        }
      //
      case Moves.PAPER:
        //
        switch (secondPlayer) {
          case Moves.ROCK:
            return { draw: false, winner: 0, loser: 1 };
          case Moves.SCISSORS:
            return { draw: false, winner: 1, loser: 0 };
        }
      //
      case Moves.SCISSORS:
        //
        switch (secondPlayer) {
          case Moves.ROCK:
            return { draw: false, winner: 1, loser: 0 };
          case Moves.PAPER:
            return { draw: false, winner: 0, loser: 1 };
        }
      //
    }
  }
}
