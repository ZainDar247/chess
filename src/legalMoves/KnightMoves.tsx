import { moveInLShape } from "../HelperFunctions";
import type { chessSquare } from "../types";

function KnightMoves({
  board,
  square,
  gameHistory,
}: {
  gameHistory: chessSquare[][][];
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveInLShape(board, square));

  return moves;
}

export default KnightMoves;
