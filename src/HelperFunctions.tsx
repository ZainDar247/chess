import { pieceNotations, type chessSquare } from "./types";

export function createBoard (){
  const squares: chessSquare[] = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      squares.push({
        row:row,
        col:col,
        color: (row + col) % 2 === 0 ? "white" : "brown",
        piece: null,
      });
    }
  }

  const result: chessSquare[][] = [];

  for (let i = 0; i < squares.length; i += 8) {
    result.push(squares.slice(i, i + 8));
  }

  return result;
};

 export function initialBoard(){
  const base = createBoard();

  return loadPosition(
    base,
    "rnbkqbnr" +
      "pppppppp" +
      "........" +
      "........" +
      "........" +
      "........" +
      "PPPPPPPP" +
      "RNBKQBNR"
  );
};

  function loadPosition(board:chessSquare[][],position: string) {
        const copy = board.map(row => row.map(cell => ({ ...cell })));
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


  export function isWhite(piece:string) : boolean{
   return piece.includes("w");
  }