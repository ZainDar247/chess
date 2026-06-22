import { GetAllAttackedSquares } from "../GetAllAttackedSquares";
import { isBlack, moveAllDirectionsOnce } from "../HelperFunctions";
import type { chessSquare } from "../types";

//logic for checking (King in Check will be little different because now for every move , the position of king changes)
export function KingMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  const attackedSquares: [number, number][] = [];

  moves.push(...moveAllDirectionsOnce(board, square));
  if (isBlack(square.piece)) {
    attackedSquares.push(
      ...GetAllAttackedSquares({ board: board, color: "w" }),
    );
  } else {
    attackedSquares.push(
      ...GetAllAttackedSquares({ board: board, color: "b" }),
    );
  }
  
  const attackSet = new Set(
    attackedSquares.map(([row, col]) => `${row},${col}`),
  );

  return moves.filter(([row, col]) => !attackSet.has(`${row},${col}`));
}

export function KingAttackSquares({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveAllDirectionsOnce(board, square));

  return moves;
}
