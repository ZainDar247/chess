import {
  moveBottom,
  moveBottomLeft,
  moveBottomRight,
  moveLeft,
  moveRight,
  moveTop,
  moveTopLeft,
  moveTopRight
} from "../HelperFunctions";
import type { chessSquare } from "../types";

function QueenMoves({
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
  moves.push(...moveTopRight(board, square));
  moves.push(...moveTopLeft(board, square));
  moves.push(...moveBottomRight(board, square));
  moves.push(...moveBottomLeft(board, square));
  
  return moves;
}

export default QueenMoves;
