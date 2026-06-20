import GetLegalMoves from "./GetLegalMoves";
import { isBlack, isWhite } from "./HelperFunctions";
import type { chessSquare } from "./types";

export function GetAllAvailableMoves({
  board,
  color,
  gameHistory
}: {
  board: chessSquare[][];
  color: "w" | "b";
  gameHistory: chessSquare[][][]
}) {

  const moves: [number, number][] = [];
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (color == "b") {
        if (isBlack(board[i][j].piece)) {
          moves.push(
            ...GetLegalMoves({
              gameHistory: gameHistory,
              board: board,
              square: board[i][j],
            }),
          );
        }
      }
      if (color == "w") {
        if (isWhite(board[i][j].piece)) {
          moves.push(
            ...GetLegalMoves({
              gameHistory: gameHistory,
              board: board,
              square: board[i][j],
            }),
          );
        }
      }
    }
  }
  return moves;
}
