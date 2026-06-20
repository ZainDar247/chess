import { useState, type ReactNode } from "react";
import type { chessSquare } from "./types";
import { ChessContext, type ChessContextType } from "./context";
import { initialBoard } from "./HelperFunctions";

export function ChessProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [gameHistory, setGameHistory] = useState<chessSquare[][][]>([initialBoard()]);

  const value: ChessContextType = {
    gameHistory,
    setGameHistory,
  };

  return (
    <ChessContext.Provider value={value}>
      {children}
    </ChessContext.Provider>
  );
}