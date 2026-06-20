import { isBlack, isWhite } from "../HelperFunctions";
import type { chessSquare } from "../types";

function KnightMoves({
  board,
  square,
}: {
  board: chessSquare[][];
  square: chessSquare;
}) {

    const moves:[number,number][] = [];
    if(isBlack(square.piece)){
        if(square.row - 2 >= 0){ //top
            if(square.col > 0){ //left
                if(isWhite(board[square.row - 2][square.col - 1].piece) || board[square.row - 2][square.col -1].piece == null){
                    moves.push([square.row - 2,square.col - 1])
                }
            }
            if(square.col < 7){//right
                if(isWhite(board[square.row - 2][square.col + 1].piece) || board[square.row - 2][square.col + 1].piece == null){
                    moves.push([square.row - 2,square.col + 1])
                }
            }
        }
        if(square.row + 2 <= 7){ //bottom
            if(square.col > 0){ //left
                if(isWhite(board[square.row + 2][square.col - 1].piece) || board[square.row + 2][square.col -1].piece == null){
                    moves.push([square.row + 2,square.col - 1])
                }
            }
            if(square.col < 7){ //right
                if(isWhite(board[square.row + 2][square.col + 1].piece) || board[square.row + 2][square.col + 1].piece == null){
                    moves.push([square.row + 2,square.col + 1])
                }
            }
        }
        if(square.col - 2 >= 0){ //left
            if(square.row > 0){ //top
                if(isWhite(board[square.row - 1][square.col - 2].piece) || board[square.row - 1][square.col - 2].piece == null){
                    moves.push([square.row - 1,square.col - 2])
                }
            }
            if(square.row < 7){//bottom
                if(isWhite(board[square.row + 1][square.col - 2].piece) || board[square.row + 1][square.col - 2].piece == null){
                    moves.push([square.row + 1,square.col - 2])
                }
            }
        }
         if(square.col + 2 <= 7){ //Right
            if(square.row > 0){ //top
                if(isWhite(board[square.row - 1][square.col + 2].piece) || board[square.row - 1][square.col + 2].piece == null){
                    moves.push([square.row - 1,square.col + 2])
                }
            }
            if(square.row < 7){//bottom
                if(isWhite(board[square.row + 1][square.col + 2].piece) || board[square.row + 1][square.col + 2].piece == null){
                    moves.push([square.row + 1,square.col + 2])
                }
            }
        }
    }
    else{
        if(square.row - 2 >= 0){ //top
            if(square.col > 0){ //left
                if(isBlack(board[square.row - 2][square.col - 1].piece) || board[square.row - 2][square.col -1].piece == null){
                    moves.push([square.row - 2,square.col - 1])
                }
            }
            if(square.col < 7){//right
                if(isBlack(board[square.row - 2][square.col + 1].piece) || board[square.row - 2][square.col + 1].piece == null){
                    moves.push([square.row - 2,square.col + 1])
                }
            }
        }
        if(square.row + 2 <= 7){ //bottom
            if(square.col > 0){ //left
                if(isBlack(board[square.row + 2][square.col - 1].piece) || board[square.row + 2][square.col -1].piece == null){
                    moves.push([square.row + 2,square.col - 1])
                }
            }
            if(square.col < 7){ //right
                if(isBlack(board[square.row + 2][square.col + 1].piece) || board[square.row + 2][square.col + 1].piece == null){
                    moves.push([square.row + 2,square.col + 1])
                }
            }
        }
         if(square.col - 2 >= 0){ //left
            if(square.row > 0){ //top
                if(isBlack(board[square.row - 1][square.col - 2].piece) || board[square.row - 1][square.col - 2].piece == null){
                    moves.push([square.row - 1,square.col - 2])
                }
            }
            if(square.row < 7){//bottom
                if(isBlack(board[square.row + 1][square.col - 2].piece) || board[square.row + 1][square.col - 2].piece == null){
                    moves.push([square.row + 1,square.col - 2])
                }
            }
        }
         if(square.col + 2 <= 7){ //Right
            if(square.row > 0){ //top
                if(isBlack(board[square.row - 1][square.col + 2].piece) || board[square.row - 1][square.col + 2].piece == null){
                    moves.push([square.row - 1,square.col + 2])
                }
            }
            if(square.row < 7){//bottom
                if(isBlack(board[square.row + 1][square.col + 2].piece) || board[square.row + 1][square.col + 2].piece == null){
                    moves.push([square.row + 1,square.col + 2])
                }
            }
        }
    }

  return moves;
}

export default KnightMoves