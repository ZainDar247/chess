import BishopMoves from "./legalMoves/BishopMoves";
import { PawnMoves } from "./legalMoves/PawnMoves";
import QueenMoves from "./legalMoves/QueenMoves";
import RookMoves from "./legalMoves/RookMoves";
import type { chessSquare } from "./types";


//make standard logic for Queen,bishop,Queen Moves
function GetLegalMoves({
  gameHistory,
  board,
  square,
}: {
  gameHistory: chessSquare[][][];
  board: chessSquare[][];
  square: chessSquare;
}) {
  let moves: [number, number][] = [];
  if (square.piece == "bP" || square.piece == "wP") {
    moves = PawnMoves({
      gameHistory: gameHistory,
      board: board,
      square: square,
    });
  } else if (square.piece == "bB" || square.piece == "wB") {
    moves = BishopMoves({ board: board, square: square });
  } else if (square.piece == "bR" || square.piece == "wR") {
    moves = RookMoves({ board: board, square: square });
  } else if (square.piece == "bQ" || square.piece == "wQ") {
    moves = QueenMoves({ board: board, square: square });
  }
  // return moves.filter((item) => (item[0] <= 7 && item[0] >=0) && (item[1] <=7 && item[1] >=0));
  return moves;
}

export default GetLegalMoves;
