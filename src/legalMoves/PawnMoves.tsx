import KingInCheck from "../KingInCheck";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { isBlack, isWhite } from "../HelperFunctions";
import type { chessSquare, promotionOptions } from "../types";

//when pawn takes , the pawn behind it disappears
export function PawnMoves({
  gameHistory,
  board,
  square,
}: {
  gameHistory: chessSquare[][][];
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  if (square.piece == "bP") {
    if (square.row == 4) {
      //en-passant logic
      if (square.col < 7 && board[square.row][square.col + 1].piece == "wP") {
        if (
          gameHistory[gameHistory.length - 2][square.row][square.col + 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row + 1][square.col + 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row + 2][square.col + 1]
            .piece == "wP"
        ) {
          //check if pawn moved 2 squares at once and in previous turn it was on home rank (right pawn)
          moves.push([square.row + 1, square.col + 1]);
        }
      }
      if (square.col > 0 && board[square.row][square.col - 1].piece == "wP") {
        if (
          gameHistory[gameHistory.length - 2][square.row][square.col - 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row + 1][square.col - 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row + 2][square.col - 1]
            .piece == "wP"
        ) {
          //check if pawn moved 2 squares at once and in previous turn it was on home rank (left pawn)
          moves.push([square.row + 1, square.col - 1]);
        }
      }
    }
    if (board[square.row + 1][square.col].piece == null) {
      //checking if the square ahead is empty
      moves.push([square.row + 1, square.col]);
      if (
        square.row == 1 &&
        board[square.row + 2][square.col].piece == null //checking if the 2nd square ahead is empty only when on starting rank
      ) {
        moves.push([square.row + 2, square.col]);
      }
    }

    if (square.col < 7) {
      //checking for captures on right flank/corner of pawn
      if (board[square.row + 1][square.col + 1].piece != null) {
        if (isWhite(board[square.row + 1][square.col + 1].piece)) {
          moves.push([square.row + 1, square.col + 1]);
        }
      }
    }
    if (square.col > 0) {
      //checking for captures on left flank/corner of pawn
      if (board[square.row + 1][square.col - 1].piece != null) {
        if (isWhite(board[square.row + 1][square.col - 1].piece)) {
          moves.push([square.row + 1, square.col - 1]);
        }
      }
    }
  } else {
    if (square.row == 3) {
      //en-passant logic
      if (square.col < 7 && board[square.row][square.col + 1].piece == "bP") {
        if (
          gameHistory[gameHistory.length - 2][square.row][square.col + 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row - 1][square.col + 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row - 2][square.col + 1]
            .piece == "bP"
        ) {
          //check if pawn moved 2 squares at once and in previous turn it was on home rank (right pawn)
          moves.push([square.row - 1, square.col + 1]);
        }
      }
      if (square.col > 0 && board[square.row][square.col - 1].piece == "bP") {
        if (
          gameHistory[gameHistory.length - 2][square.row][square.col - 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row - 1][square.col - 1]
            .piece == null &&
          gameHistory[gameHistory.length - 2][square.row - 2][square.col - 1]
            .piece == "bP"
        ) {
          //check if pawn moved 2 squares at once and in previous turn it was on home rank (left pawn)
          moves.push([square.row - 1, square.col - 1]);
        }
      }
    }
    if (board[square.row - 1][square.col].piece == null) {
      //checking if the square ahead is empty
      moves.push([square.row - 1, square.col]);
      if (square.row == 6 && board[square.row - 2][square.col].piece == null) {
        //checking if the 2nd square ahead is empty only when on starting rank
        moves.push([square.row - 2, square.col]);
      }
    }

    if (square.col < 7) {
      //checking for captures on right flank/corner of pawn
      if (board[square.row - 1][square.col + 1].piece != null) {
        if (!isWhite(board[square.row - 1][square.col + 1].piece)) {
          moves.push([square.row - 1, square.col + 1]);
        }
      }
    }
    if (square.col > 0) {
      //checking for captures on left flank/corner of pawn
      if (board[square.row - 1][square.col - 1].piece != null) {
        if (!isWhite(board[square.row - 1][square.col - 1].piece)) {
          moves.push([square.row - 1, square.col - 1]);
        }
      }
    }
  }
  if (isBlack(square.piece)) {
    return moves.filter(
      (item) =>
        !KingInCheck("b", [square.row, square.col], [item[0], item[1]], board),
    );
  } else {
    return moves.filter(
      (item) =>
        !KingInCheck("w", [square.row, square.col], [item[0], item[1]], board),
    );
  }
}

//TODO: improve display for pawn promotion
export function PawnPromotion({
  color,
  setPromotionPiece,
  open,
  setOpen,
}: {
  color: "w" | "b";
  promotionPiece: promotionOptions;
  setPromotionPiece: (promotionPiece: promotionOptions) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onClick={() => setOpen(false)}
        className="z-10000 flex h-[10vh] w-[10vh] "
      >
        <div className="h-10 w-10">
          <img
            src={`/assets/${color}B.svg`}
            onClick={() => setPromotionPiece(`${color}B`)}
          />
          <img
            src={`/assets/${color}N.svg`}
            onClick={() => setPromotionPiece(`${color}N`)}
          />
          <img
            src={`/assets/${color}R.svg`}
            onClick={() => setPromotionPiece(`${color}R`)}
          />
          <img
            src={`/assets/${color}Q.svg`}
            onClick={() => setPromotionPiece(`${color}Q`)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PawnAttackSquares({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  if (isBlack(square.piece)) {
    moves.push([square.row + 1, square.col - 1]);
    moves.push([square.row + 1, square.col + 1]);
    return moves.filter(
      (item) =>
        item[1] <= 7 && item[1] >= 0 && isWhite(board[item[0]][item[1]].piece),
    );
  } else {
    moves.push([square.row + 1, square.col - 1]);
    moves.push([square.row + 1, square.col + 1]);
    return moves.filter(
      (item) =>
        item[1] <= 7 && item[1] >= 0 && isBlack(board[item[0]][item[1]].piece),
    );
  }
}
