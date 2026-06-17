export type chessSquare = {
  row:number;
  col:number;
  color: string;
  piece: string | null;
};

export const pieceNotations = {
    b:"bB",
    k:"bK",
    n:"bN",
    p:"bP",
    q:"bQ",
    r:"bR",
    B:"wB",
    K:"wK",
    N:"wN",
    P:"wP",
    Q:"wQ",
    R:"wR",
}