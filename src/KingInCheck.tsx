
import { GetAllAttackedSquares } from "./GetAllAttackedSquares";
import { kingPosition } from "./HelperFunctions";
import type { chessSquare } from "./types";

function KingInCheck(
    color:"w"|"b",
    oldPosition:[number,number],
    newPosition:[number,number],
    board:chessSquare[][],
) : boolean {

    const moves:[number,number][] = [];
    const copy = board.map((row) => row.map((cell) => ({ ...cell })));
    copy[newPosition[0]][newPosition[1]].piece = copy[oldPosition[0]][oldPosition[1]].piece;
    copy[oldPosition[0]][oldPosition[1]].piece = null;
    if(color == "w"){
        const position = kingPosition(board,"w")
        moves.push(...GetAllAttackedSquares({board:copy,color:"b"}))
        return moves.some((item) => item[0] == position[0] && item[1] == position[1])
    }
    else if(color == "b"){
        const position = kingPosition(board,"b")
        moves.push(...GetAllAttackedSquares({board:copy,color:"w"}))
        return moves.some((item) => item[0] == position[0] && item[1] == position[1])
    }
  return false;
}

export default KingInCheck