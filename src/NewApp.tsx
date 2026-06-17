import { useEffect, useState } from "react";
import { pieceNotations, type chessSquare } from "./types";

function NewApp() {
  const [board, setBoard] = useState<chessSquare[][]>(() => {
    const squares: chessSquare[] = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        squares.push({
          color: (row + col) % 2 === 0 ? "white" : "brown",
          piece: null,
        });
      }
    }

    return Array.from({ length: 8 }, (_, r) =>
      squares.slice(r * 8, r * 8 + 8)
    );
  });

  function applyPosition(board: chessSquare[][], position: string) {
    const copy = board.map(row => row.map(cell => ({ ...cell })));

    let i = 0;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const char = position[i];

        if (char !== ".") {
          copy[r][c].piece = pieceNotations[char];
        }

        i++;
      }
    }

    return copy;
  }

  useEffect(() => {
    const start =
      "rnbkqbnr" +
      "pppppppp" +
      "........" +
      "........" +
      "........" +
      "........" +
      "PPPPPPPP" +
      "RNBKQBNR";

    setBoard(prev => applyPosition(prev, start));
  }, []);

  return (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(8, 50px)",
      width: "fit-content",
      border: "2px solid black",
    }}
  >
    {board.map((row, r) =>
      row.map((square, c) => (
        <div
          key={`${r}-${c}`}
          style={{
            width: 50,
            height: 50,
            backgroundColor: square.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {square.piece && (
            <img
              src={`/assets/${square.piece}.svg`}
              style={{
                width: "90%",
                height: "90%",
              }}
            />
          )}
        </div>
      ))
    )}
  </div>
);
}

export default NewApp;