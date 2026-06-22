import { GetAttackedSquares } from "./GetAttackedSquares";
import { isBlack, isWhite } from "./HelperFunctions";
import type { chessSquare } from "./types";

export function GetAllAttackedSquares({
  board,
  color,
}: {
  board: chessSquare[][];
  color: "w" | "b";
}) {

  const moves: [number, number][] = [];
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (color == "b") {
        if (isBlack(board[i][j].piece)) {
          moves.push(
            ...GetAttackedSquares({
              board: board,
              square: board[i][j],
            }),
          );
        }
      }
      if (color == "w") {
        if (isWhite(board[i][j].piece)) {
          moves.push(
            ...GetAttackedSquares({
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
