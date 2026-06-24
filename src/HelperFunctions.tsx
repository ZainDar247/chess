import { pieceNotations, type chessSquare } from "./types";

export function createBoard() {
  const squares: chessSquare[] = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      squares.push({
        row: row,
        col: col,
        color: (row + col) % 2 === 0 ? "white" : "brown",
        piece: null,
        isenpassant: false,
      });
    }
  }

  const result: chessSquare[][] = [];

  for (let i = 0; i < squares.length; i += 8) {
    result.push(squares.slice(i, i + 8));
  }

  return result;
}

export function initialBoard() {
  const base = createBoard();

  return loadPosition(
    base,
    "rnbqkbnr" +
    "pppppppp" +
    "........" +
    "........" +
    "........" +
    "........" +
    "PPPPPPPP" +
    "RNBQKBNR",
  );
}

function loadPosition(board: chessSquare[][], position: string) {
  const copy = board.map((row) => row.map((cell) => ({ ...cell })));
  let i = 0;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (position[i] != ".") {
        copy[row][col].piece = pieceNotations[position[i]];
      } else {
        copy[row][col].piece = null;
      }
      i++;
    }
  }

  return copy;
}

export function isWhite(piece: string | null): boolean {
  return piece == null ? false : piece.includes("w");
}

export function isBlack(piece: string | null): boolean {
  return piece == null ? false : piece.includes("b");
}

export function isPawn(piece: string | null): boolean {
  return piece == null ? false : piece.includes("P");
}

export function isRook(piece: string | null): boolean {
  return piece == null ? false : piece.includes("R");
}

export function isKnight(piece: string | null): boolean {
  return piece == null ? false : piece.includes("N");
}

export function isBishop(piece: string | null): boolean {
  return piece == null ? false : piece.includes("B");
}

export function isKing(piece: string | null): boolean {
  return piece == null ? false : piece.includes("K");
}

export function isQueen(piece: string | null): boolean {
  return piece == null ? false : piece.includes("Q");
}

export function kingPosition(board: chessSquare[][], color: "w" | "b") {
  let position: [number, number];

  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (board[i][j].piece == `${color}K`) {
        position = [i, j];
        break;
      }
    }
  }
  return position;
}

export function moveTop(board: chessSquare[][], square: chessSquare) {
  const i = square.row;
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    for (let j = square.col - 1; j >= 0; j--) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }
  } else if (isWhite(square.piece)) {
    for (let j = square.col - 1; j >= 0; j--) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
    }
  }

  return moves;
}

export function moveBottom(board: chessSquare[][], square: chessSquare) {
  const i = square.row;
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    for (let j = square.col + 1; j <= 7; j++) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }
  } else if (isWhite(square.piece)) {
    for (let j = square.col + 1; j <= 7; j++) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
    }
  }

  return moves;
}

export function moveLeft(board: chessSquare[][], square: chessSquare) {
  const j = square.col;
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    for (let i = square.row - 1; i >= 0; i--) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }
  } else if (isWhite(square.piece)) {
    for (let i = square.row - 1; i >= 0; i--) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
    }
  }

  return moves;
}

export function moveRight(board: chessSquare[][], square: chessSquare) {
  const j = square.col;
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    for (let i = square.row + 1; i <= 7; i++) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isWhite(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isWhite(board[i][j].piece)) {
        break;
      }
    }
  } else if (isWhite(square.piece)) {
    for (let i = square.row + 1; i <= 7; i++) {
      if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
    }
  }

  return moves;
}

export function moveBottomRight(board: chessSquare[][], square: chessSquare) {
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    let j = square.col + 1;
    for (let i = square.row + 1; i <= 7; i++) {
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
  } else if (isWhite(square.piece)) {
    let j = square.col + 1;
    for (let i = square.row + 1; i <= 7; i++) {
      if (j > 7) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
      j++;
    }
  }

  return moves;
}
export function moveBottomLeft(board: chessSquare[][], square: chessSquare) {
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    let j = square.col - 1;
    for (let i = square.row + 1; i <= 7; i++) {
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
  } else if (isWhite(square.piece)) {
    let j = square.col - 1;
    for (let i = square.row + 1; i <= 7; i++) {
      if (j < 0) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
      j--;
    }
  }

  return moves;
}
export function moveTopRight(board: chessSquare[][], square: chessSquare) {
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    let j = square.col + 1;
    for (let i = square.row - 1; i >= 0; i--) {
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
  } else if (isWhite(square.piece)) {
    let j = square.col + 1;
    for (let i = square.row - 1; i >= 0; i--) {
      if (j > 7) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
      j++;
    }
  }

  return moves;
}
export function moveTopLeft(board: chessSquare[][], square: chessSquare) {
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    let j = square.col - 1;
    for (let i = square.row - 1; i >= 0; i--) {
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
  } else if (isWhite(square.piece)) {
    let j = square.col - 1;
    for (let i = square.row - 1; i >= 0; i--) {
      if (j < 0) {
        break;
      } else if (board[i][j].piece == null) {
        moves.push([i, j]);
      } else if (isBlack(board[i][j].piece)) {
        moves.push([i, j]);
        break;
      } else if (!isBlack(board[i][j].piece)) {
        break;
      }
      j--;
    }
  }

  return moves;
}
export function moveAllDirectionsOnce(
  board: chessSquare[][],
  square: chessSquare,
) {
  const moves: [number, number][] = [];
  moves.push([square.row - 1, square.col - 1]);
  moves.push([square.row - 1, square.col]);
  moves.push([square.row - 1, square.col + 1]);
  moves.push([square.row, square.col - 1]);
  moves.push([square.row, square.col + 1]);
  moves.push([square.row + 1, square.col - 1]);
  moves.push([square.row + 1, square.col]);
  moves.push([square.row + 1, square.col + 1]);

  if (isBlack(square.piece)) {
    return moves.filter(
      (item) =>
        item[0] <= 7 &&
        item[0] >= 0 &&
        item[1] <= 7 &&
        item[1] >= 0 &&
        (isWhite(board[item[0]][item[1]].piece) ||
          board[item[0]][item[1]].piece == null),
    );
  } else {
    return moves.filter(
      (item) =>
        item[0] <= 7 &&
        item[0] >= 0 &&
        item[1] <= 7 &&
        item[1] >= 0 &&
        (isBlack(board[item[0]][item[1]].piece) ||
          board[item[0]][item[1]].piece == null),
    );
  }
}
export function moveInLShape(
  board: chessSquare[][],
  square: chessSquare,
) {
  const moves: [number, number][] = [];
  moves.push([square.row - 2, square.col - 1]);
  moves.push([square.row - 2, square.col + 1]);
  moves.push([square.row - 1, square.col - 2]);
  moves.push([square.row + 1, square.col - 2]);
  moves.push([square.row - 1, square.col + 2]);
  moves.push([square.row + 1, square.col + 2]);
  moves.push([square.row + 2, square.col - 1]);
  moves.push([square.row + 2, square.col + 1]);


  if (isBlack(square.piece)) {
    return moves.filter(
      (item) =>
        item[0] <= 7 &&
        item[0] >= 0 &&
        item[1] <= 7 &&
        item[1] >= 0 &&
        (isWhite(board[item[0]][item[1]].piece) ||
          board[item[0]][item[1]].piece == null),
    );
  } else {
    return moves.filter(
      (item) =>
        item[0] <= 7 &&
        item[0] >= 0 &&
        item[1] <= 7 &&
        item[1] >= 0 &&
        (isBlack(board[item[0]][item[1]].piece) ||
          board[item[0]][item[1]].piece == null),
    );
  }
}
