import {
  moveBottom,
  moveLeft,
  moveRight,
  moveTop
} from "../HelperFunctions";
import type { chessSquare } from "../types";

function RookMoves({
  board,
  square,
  gameHistory,
}: {
  gameHistory: chessSquare[][][];
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

export default RookMoves;
