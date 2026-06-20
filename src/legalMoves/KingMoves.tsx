import { isBlack, isWhite } from "../HelperFunctions";
import type { chessSquare } from "../types";

function KingMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  const piece = square.piece;
  if (isBlack(piece)) {
    if (square.row > 0) {
      if (
        isWhite(board[square.row - 1][square.col].piece) ||
        board[square.row - 1][square.col].piece == null
      ) {
        moves.push([square.row - 1, square.col]);
      }
      if (square.col > 0) {
        if (
          isWhite(board[square.row - 1][square.col - 1].piece) ||
          board[square.row - 1][square.col - 1].piece == null
        ) {
          moves.push([square.row - 1, square.col - 1]);
        }
      }
      if (square.col < 7) {
        if (
          isWhite(board[square.row - 1][square.col + 1].piece) ||
          board[square.row - 1][square.col + 1].piece == null
        ) {
          moves.push([square.row - 1, square.col + 1]);
        }
      }
    }
    if (square.col > 0) {
      if (
        isWhite(board[square.row][square.col - 1].piece) ||
        board[square.row][square.col - 1].piece == null
      ) {
        moves.push([square.row, square.col - 1]);
      }
    }
    if (square.row < 7) {
      if (
        isWhite(board[square.row + 1][square.col].piece) ||
        board[square.row + 1][square.col].piece == null
      ) {
        moves.push([square.row + 1, square.col]);
      }
      if (square.col > 0) {
        if (
          isWhite(board[square.row + 1][square.col - 1].piece) ||
          board[square.row + 1][square.col - 1].piece == null
        ) {
          moves.push([square.row + 1, square.col - 1]);
        }
      }
      if (square.col < 7) {
        if (
          isWhite(board[square.row + 1][square.col + 1].piece) ||
          board[square.row + 1][square.col + 1].piece == null
        ) {
          moves.push([square.row + 1, square.col + 1]);
        }
      }
    }
    if (square.col < 7) {
      if (
        isWhite(board[square.row][square.col + 1].piece) ||
        board[square.row][square.col + 1].piece == null
      ) {
        moves.push([square.row, square.col + 1]);
      }
    }
  } else {
    if (square.row > 0) {
      if (
        isBlack(board[square.row - 1][square.col].piece) ||
        board[square.row - 1][square.col].piece == null
      ) {
        moves.push([square.row - 1, square.col]);
      }
      if (square.col > 0) {
        if (
          isBlack(board[square.row - 1][square.col - 1].piece) ||
          board[square.row - 1][square.col - 1].piece == null
        ) {
          moves.push([square.row - 1, square.col - 1]);
        }
      }
      if (square.col < 7) {
        if (
          isBlack(board[square.row - 1][square.col + 1].piece) ||
          board[square.row - 1][square.col + 1].piece == null
        ) {
          moves.push([square.row - 1, square.col + 1]);
        }
      }
    }
    if (square.col > 0) {
      if (
        isBlack(board[square.row][square.col - 1].piece) ||
        board[square.row][square.col - 1].piece == null
      ) {
        moves.push([square.row, square.col - 1]);
      }
    }
    if (square.row < 7) {
      if (
        isBlack(board[square.row + 1][square.col].piece) ||
        board[square.row + 1][square.col].piece == null
      ) {
        moves.push([square.row + 1, square.col]);
      }
      if (square.col > 0) {
        if (
          isBlack(board[square.row + 1][square.col - 1].piece) ||
          board[square.row + 1][square.col - 1].piece == null
        ) {
          moves.push([square.row + 1, square.col - 1]);
        }
      }
      if (square.col < 7) {
        if (
          isBlack(board[square.row + 1][square.col + 1].piece) ||
          board[square.row + 1][square.col + 1].piece == null
        ) {
          moves.push([square.row + 1, square.col + 1]);
        }
      }
    }
    if (square.col < 7) {
      if (
        isBlack(board[square.row][square.col + 1].piece) ||
        board[square.row][square.col + 1].piece == null
      ) {
        moves.push([square.row, square.col + 1]);
      }
    }
  }
  return moves;
}

export default KingMoves;
