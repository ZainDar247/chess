import KingInCheck from "../KingInCheck";
import { isBlack, moveInLShape } from "../HelperFunctions";
import type { chessSquare } from "../types";

export function KnightMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveInLShape(board, square));

  if (isBlack(square.piece)) {
    return moves.filter(
      (item) =>
        !KingInCheck("b", [square.row, square.col], [item[0], item[1]], board),
    );
  } else {
    return moves.filter(
      (item) =>
        !KingInCheck("w", [square.row, square.col], [item[0], item[1]], board),
    );
  }
}

export function KnightAttackSquares({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveInLShape(board, square));

  return moves;
}
