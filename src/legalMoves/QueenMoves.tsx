import { isWhite } from "../HelperFunctions";
import type { chessSquare } from "../types";

function QueenMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  if (square.piece == "bQ") {
    let j = square.col + 1;
    for (let i = square.row + 1; i <= 7; i++) {
      //moves toward bottom right
      if (j > 7) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
      j++;
    }

    j = square.col - 1;
    for (let i = square.row + 1; i <= 7; i++) {
      //moves toward bottom left
      if (j < 0) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
      j--;
    }

    j = square.col + 1;
    for (let i = square.row - 1; i >= 0; i--) {
      //moves toward top right
      if (j > 7) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
      j++;
    }

    j = square.col - 1;
    for (let i = square.row - 1; i >= 0; i--) {
      //moves toward top left
      if (j < 0) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
      j--;
    }
    j = square.col;
    for (let i = square.row - 1; i >= 0; i--) {
      //moves toward left
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }

    j = square.col;
    for (let i = square.row + 1; i <= 7; i++) {
      //moves toward right
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }

    let i = square.row;
    for (let j = square.col + 1; j <= 7; j++) {
      //moves toward bottom
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }

    i = square.row;
    for (let j = square.col - 1; j >= 0; j--) {
      //moves toward top
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }
  } else {
    let j = square.col + 1;
    for (let i = square.row + 1; i <= 7; i++) {
      //moves toward bottom right
      if (j > 7) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
      j++;
    }

    j = square.col - 1;
    for (let i = square.row + 1; i <= 7; i++) {
      //moves toward bottom left
      if (j < 0) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
      j--;
    }

    j = square.col + 1;
    for (let i = square.row - 1; i >= 0; i--) {
      //moves toward top right
      if (j > 7) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
      j++;
    }

    j = square.col - 1;
    for (let i = square.row - 1; i >= 0; i--) {
      //moves toward top left
      if (j < 0) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
      j--;
    }
    j = square.col;
    for (let i = square.row - 1; i >= 0; i--) {
      //moves toward top
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
    }

    j = square.col;
    for (let i = square.row + 1; i <= 7; i++) {
      //moves toward bottom
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
    }

    let i = square.row;
    for (let j = square.col + 1; j <= 7; j++) {
      //moves toward right
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
    }

    i = square.row;
    for (let j = square.col - 1; j >= 0; j--) {
      //moves toward left
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (!isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (isWhite(board[i][j].piece)) {
        break;
      }
    }
  }
  return moves;
}

export default QueenMoves;
