import KingInCheck from "../KingInCheck";
import {
  isBlack,
  moveBottomLeft,
  moveBottomRight,
  moveTopLeft,
  moveTopRight,
} from "../HelperFunctions";
import type { chessSquare } from "../types";

export function BishopMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

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

export function BishopAttackSquares({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveTopRight(board, square));
  moves.push(...moveTopLeft(board, square));
  moves.push(...moveBottomRight(board, square));
  moves.push(...moveBottomLeft(board, square));

  return moves;
}
