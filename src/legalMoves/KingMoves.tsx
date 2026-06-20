import { isBlack, isWhite, moveAllDirectionsOnce } from "../HelperFunctions";
import type { chessSquare } from "../types";

function KingMoves({
  board,
  square,
  gameHistory
}: {
  gameHistory: chessSquare[][][]
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];

  moves.push(...moveAllDirectionsOnce(board,square));
  
  return moves;
}

export default KingMoves;
