import { isBishop, isKing, isKnight, isPawn, isQueen, isRook } from "./HelperFunctions";
import { BishopAttackSquares } from "./legalMoves/BishopMoves";
import { KingAttackSquares } from "./legalMoves/KingMoves";
import { KnightAttackSquares } from "./legalMoves/KnightMoves";
import { PawnAttackSquares } from "./legalMoves/PawnMoves";
import { QueenAttackSquares } from "./legalMoves/QueenMoves";
import { RookAttackSquares } from "./legalMoves/RookMoves";
import type { chessSquare } from "./types";

export function GetAttackedSquares({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  let moves: [number, number][] = [];
  const piece = square.piece;
  if (isPawn(piece)) {
    moves = PawnAttackSquares({
      board: board,
      square: square,
    });
  } else if (isBishop(piece)) {
    moves = BishopAttackSquares({board: board, square: square });
  } else if (isRook(piece)) {
    moves = RookAttackSquares({board: board, square: square });
  } else if (isQueen(piece)) {
    moves = QueenAttackSquares({board: board, square: square });
  } else if (isKnight(piece)) {
    moves = KnightAttackSquares({board: board, square: square });
  } else if (isKing(piece)) {
    moves = KingAttackSquares({board: board, square: square });
  }
  return moves;
}
