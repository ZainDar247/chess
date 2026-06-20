import {
  moveBottomLeft,
  moveBottomRight,
  moveTopLeft,
  moveTopRight
} from "../HelperFunctions";
import type { chessSquare } from "../types";

function BishopMoves({
  board,
  square,
  gameHistory,
}: {
  board: chessSquare[][];
  square: chessSquare;
  gameHistory: chessSquare[][][];
}) {
  const moves: [number, number][] = [];

  moves.push(...moveTopRight(board, square));
  moves.push(...moveTopLeft(board, square));
  moves.push(...moveBottomRight(board, square));
  moves.push(...moveBottomLeft(board, square));

  return moves;
}

export default BishopMoves;
