import { isBishop, isKing, isKnight, isPawn, isQueen, isRook } from "./HelperFunctions";
import { BishopMoves } from "./legalMoves/BishopMoves";
import { KingMoves } from "./legalMoves/KingMoves";
import { KnightMoves } from "./legalMoves/KnightMoves";
import { PawnMoves } from "./legalMoves/PawnMoves";
import { QueenMoves } from "./legalMoves/QueenMoves";
import { RookMoves } from "./legalMoves/RookMoves";

import type { chessSquare } from "./types";

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
  const piece = square.piece;
  if (isPawn(piece)) {
    moves = PawnMoves({
      gameHistory: gameHistory,
      board: board,
      square: square,
    });
  } else if (isBishop(piece)) {
    moves = BishopMoves({ board: board, square: square });
  } else if (isRook(piece)) {
    moves = RookMoves({ board: board, square: square });
  } else if (isQueen(piece)) {
    moves = QueenMoves({ board: board, square: square });
  } else if (isKnight(piece)) {
    moves = KnightMoves({ board: board, square: square });
  } else if (isKing(piece)) {
    moves = KingMoves({ board: board, square: square });
  }
  return moves;
}

export default GetLegalMoves;
