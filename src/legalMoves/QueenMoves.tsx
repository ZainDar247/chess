import KingInCheck from "../KingInCheck";
import {
  isBlack,
  moveBottom,
  moveBottomLeft,
  moveBottomRight,
  moveLeft,
  moveRight,
  moveTop,
  moveTopLeft,
  moveTopRight,
} from "../HelperFunctions";
import type { chessSquare } from "../types";

export function QueenMoves({
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
  moves.push(...moveTopRight(board, square));
  moves.push(...moveTopLeft(board, square));
  moves.push(...moveBottomRight(board, square));
  moves.push(...moveBottomLeft(board, square));

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

export function QueenAttackSquares({
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
  moves.push(...moveTopRight(board, square));
  moves.push(...moveTopLeft(board, square));
  moves.push(...moveBottomRight(board, square));
  moves.push(...moveBottomLeft(board, square));

  return moves;
}
