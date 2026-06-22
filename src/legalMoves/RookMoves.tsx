import KingInCheck from "../KingInCheck";
import {
  isBlack,
  moveBottom,
  moveLeft,
  moveRight,
  moveTop,
} from "../HelperFunctions";
import type { chessSquare } from "../types";

export function RookMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveTop(board, square));
  moves.push(...moveBottom(board, square));
  moves.push(...moveLeft(board, square));
  moves.push(...moveRight(board, square));

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

export function RookAttackSquares({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveTop(board, square));
  moves.push(...moveBottom(board, square));
  moves.push(...moveLeft(board, square));
  moves.push(...moveRight(board, square));

  return moves;
}
