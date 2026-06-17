import { isWhite } from "../HelperFunctions";
import type { chessSquare } from "../types";

function PawnMoves({
  board,
  square
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  if (square.piece == "bP") {

    //TODO: en-passant and Promotion logic remaining

    if (board[square.row + 1][square.col].piece == null) {
      moves.push([square.row + 1, square.col]);
      if (square.row == 1 && board[square.row + 2][square.col].piece == null) {
        moves.push([square.row + 2, square.col]);
      }
    }

    if (square.col < 7) {
      if (board[square.row + 1][square.col + 1].piece != null) {
        if (isWhite(board[square.row + 1][square.col + 1].piece)) {
          moves.push([square.row + 1, square.col + 1]);
        }
      }
    }
    if (square.col > 0) {
      if (board[square.row + 1][square.col - 1].piece != null) {
        if (isWhite(board[square.row + 1][square.col - 1].piece)) {
          moves.push([square.row + 1, square.col - 1]);
        }
      }
    }
  } else {
    if (board[square.row - 1][square.col].piece == null) {
      moves.push([square.row - 1, square.col]);
      if (square.row == 6 && board[square.row - 2][square.col].piece == null) {
        moves.push([square.row - 2, square.col]);
      }
    }

    if (square.col < 7) {
      if (board[square.row - 1][square.col + 1].piece != null) {
        if (!isWhite(board[square.row - 1][square.col + 1].piece)) {
          moves.push([square.row - 1, square.col + 1]);
        }
      }
    }
    if (square.col > 0) {
      if (board[square.row - 1][square.col - 1].piece != null) {
        if (!isWhite(board[square.row - 1][square.col - 1].piece)) {
          moves.push([square.row - 1, square.col - 1]);
        }
      }
    }
  }

  return moves;
}

export default PawnMoves;
