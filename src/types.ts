export type chessSquare = {
  row: number;
  col: number;
  color: string;
  piece: string | null;
  isenpassant: boolean;
};

export const pieceNotations = {
  b: "bB",
  k: "bK",
  n: "bN",
  p: "bP",
  q: "bQ",
  r: "bR",
  B: "wB",
  K: "wK",
  N: "wN",
  P: "wP",
  Q: "wQ",
  R: "wR",
};

export type promotionOptions =
  | "none"
  | "bN"
  | "wN"
  | "bB"
  | "wB"
  | "bR"
  | "wR"
  | "bQ"
  | "wQ";
