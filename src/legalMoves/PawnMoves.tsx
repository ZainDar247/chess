import { Dialog, DialogContent } from "../components/ui/dialog";
import { isWhite } from "../HelperFunctions";
import type { chessSquare, promotionOptions } from "../types";

export function PawnMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {
  const moves: [number, number][] = [];
  if (square.piece == "bP") {
    //TODO: en-passant and Promotion logic remainingq
    if (square.row < 7) {
      if (board[square.row + 1][square.col].piece == null) {
        moves.push([square.row + 1, square.col]);
        if (
          square.row == 1 &&
          board[square.row + 2][square.col].piece == null
        ) {
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
    }
  } else {
    if (square.row > 0) {
      if (board[square.row - 1][square.col].piece == null) {
        moves.push([square.row - 1, square.col]);
        if (
          square.row == 6 &&
          board[square.row - 2][square.col].piece == null
        ) {
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
  }

  return moves;
}

//TODO: improve display for pawn promotion
export function PawnPromotion({
  color,
  setPromotionPiece,
  open,
  setOpen
}:{
  color:"w"|"b"
  promotionPiece: promotionOptions
  setPromotionPiece: (promotionPiece: promotionOptions) => void
  open: boolean;
  setOpen: (open: boolean) => void;
}){
  return(
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent onClick={() => setOpen(false)} className="z-10000 flex h-[10vh] w-[10vh] ">
    <div className="h-10 w-10">
    <img src={`/assets/${color}B.svg`} onClick={() => setPromotionPiece(`${color}B`)}/>
    <img src={`/assets/${color}N.svg`} onClick={() => setPromotionPiece(`${color}N`)}/>
    <img src={`/assets/${color}R.svg`} onClick={() => setPromotionPiece(`${color}R`)}/>
    <img src={`/assets/${color}Q.svg`} onClick={() => setPromotionPiece(`${color}Q`)}/>
    </div>
  </DialogContent>
</Dialog>
  );
}
