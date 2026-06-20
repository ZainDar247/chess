import {
  createContext
} from "react";
import type { chessSquare } from "./types";

export type ChessContextType = {
  gameHistory: chessSquare[][][];
  setGameHistory: React.Dispatch<
    React.SetStateAction<chessSquare[][][]>
  >;
};

export const ChessContext = createContext<ChessContextType | null>(null);
