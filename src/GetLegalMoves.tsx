
import { PawnMoves } from "./legalMoves/PawnMoves";
import type { chessSquare } from "./types"

function GetLegalMoves({board,square}:{board:chessSquare[][],square:chessSquare}) {

    let moves : [number,number][] = [];
    if(square.piece == "bP" || square.piece == "wP")
    {
        moves = PawnMoves({board:board,square:square});
    }
  return moves.filter((item) => (item[0] <= 7 && item[0] >=0) && (item[1] <=7 && item[1] >=0));
}

export default GetLegalMoves