import { useEffect, useState } from "react";
import GetLegalMoves from "./GetLegalMoves";
import { initialBoard, isBlack, isWhite } from "./HelperFunctions";
import { PawnPromotion } from "./legalMoves/PawnMoves";
import { type chessSquare, type promotionOptions } from "./types";
//Implement Castling
function App() {
  const [board, setBoard] = useState<chessSquare[][]>(() => initialBoard());
  const [gameHistory, setGameHistory] = useState<chessSquare[][][]>([board]);
  const [position, setPosition] = useState<number>(0);
  const [turn, setTurn] = useState<"w" | "b">("w");
  const [selectedSquares, setSelectedSquares] = useState<chessSquare[]>([]);
  const [promotionSquares, SetPromotionSquares] = useState<chessSquare[]>([]);
  const [highLightedSquares, setHighLightedSquares] = useState<
    [number, number][]
  >([]);
  const [promotionPiece, setPromotionPiece] =
    useState<promotionOptions>("none");
  const [promotionColor, setPromotionColor] = useState<"w" | "b">("w");
  const [open, setOpen] = useState<boolean>(false);

  const HandlePieceClick = (square: chessSquare) => {
    if (selectedSquares?.length == 0) {
      setSelectedSquares((prev) => [...prev, square]);
    } else {
      if (
        (isBlack(selectedSquares[0].piece) && isBlack(square.piece)) ||
        (isWhite(selectedSquares[0].piece) && isWhite(square.piece))
      ) {
        setSelectedSquares([square]);
      }
      else {
        setSelectedSquares((prev) => [...prev, square]);
      }
    }
    console.log(selectedSquares)
  }

  useEffect(() => {
    if (selectedSquares.length == 0) return;

    if (selectedSquares?.length === 1) {
      if (selectedSquares[0].piece == null) {
        setHighLightedSquares([]);
        setSelectedSquares([]);
      } else {
        if (turn == "w" && isWhite(selectedSquares[0].piece)) {
          setHighLightedSquares(
            GetLegalMoves({
              gameHistory: gameHistory,
              board: board,
              square: selectedSquares[0],
            }),
          );
        }
        if (turn == "b" && isBlack(selectedSquares[0].piece)) {
          setHighLightedSquares(
            GetLegalMoves({
              gameHistory: gameHistory,
              board: board,
              square: selectedSquares[0],
            }),
          );
        }
      }
    } else if (selectedSquares?.length > 1) {
      const copy = board.map((row) => row.map((cell) => ({ ...cell })));
      const oldPosition = selectedSquares[0];
      const newPosition = selectedSquares[1];

      let legalMove: boolean = false;
      highLightedSquares.map((item) => {
        if (item[0] == newPosition.row && item[1] == newPosition.col) {
          legalMove = true;
        }
      });

      if (legalMove) {
        if (oldPosition.piece == "wP" && newPosition.row == 0) {
          setPromotionColor("w");
          setOpen(true);
          SetPromotionSquares(selectedSquares);
        } else if (oldPosition.piece == "bP" && newPosition.row == 7) {
          setPromotionColor("b");
          setOpen(true);
          SetPromotionSquares(selectedSquares);
        } else {
          // if (oldPosition.piece == "wP") {
          //   if (
          //     newPosition.row == oldPosition.row - 1 &&
          //     (newPosition.col == oldPosition.col - 1 ||
          //       newPosition.col == oldPosition.col + 1)
          //   ) {
          //     copy[newPosition.row + 1][newPosition.col].piece = null;
          //   }
          // } else if (oldPosition.piece == "bP") {
          //   if (
          //     newPosition.row == oldPosition.row + 1 &&
          //     (newPosition.col == oldPosition.col - 1 ||
          //       newPosition.col == oldPosition.col + 1)
          //   ) {
          //     copy[newPosition.row - 1][newPosition.col].piece = null;
          //   }
          // }
          console.log(oldPosition.piece);
          if (oldPosition.piece == "wP") {
            if (newPosition.isenpassant) {
              console.log(newPosition.isenpassant);
              console.log(copy[newPosition.row + 1][newPosition.col].piece);
              copy[newPosition.row + 1][newPosition.col].piece = null;
            }
          } else if (oldPosition.piece == "bP") {
            if (newPosition.isenpassant) {
              console.log(newPosition.isenpassant);
              console.log(copy[newPosition.row - 1][newPosition.col].piece);
              copy[newPosition.row - 1][newPosition.col].piece = null;
            }
          }
          copy[newPosition.row][newPosition.col].piece =
            copy[oldPosition.row][oldPosition.col].piece;
          copy[oldPosition.row][oldPosition.col].piece = null;
          setBoard(copy);
          setGameHistory((prev) => [...prev, copy]);
          setPosition(position + 1);
          setTurn(turn == "w" ? "b" : "w");
        }
      }
      setHighLightedSquares([]);
      setSelectedSquares([]);
    }
  }, [selectedSquares]);

  useEffect(() => {
    if (selectedSquares.length == 0) {
      const copy = board.map((row, r) =>
        row.map((cell, c) => ({
          ...cell,
          color: (r + c) % 2 === 0 ? "white" : "brown",
        })),
      );
      setBoard(copy);
    }
    if (highLightedSquares.length === 0) return;

    const copy = board.map((row, r) =>
      row.map((cell, c) => ({
        ...cell,
        color: (r + c) % 2 === 0 ? "white" : "brown",
      })),
    );

    highLightedSquares.forEach(([r, c]) => {
      const oldPosition = selectedSquares[0];
      if (
        isWhite(oldPosition.piece) &&
        copy[r][c].piece != null &&
        !isWhite(copy[r][c].piece)
      ) {
        copy[r][c].color = "red";
      } else if (
        !isWhite(oldPosition.piece) &&
        copy[r][c].piece != null &&
        isWhite(copy[r][c].piece)
      ) {
        copy[r][c].color = "red";
      } else {
        copy[r][c].color = "orange";
      }
    });

    setBoard(copy);
  }, [highLightedSquares]);

  useEffect(() => {
    const copy = board.map((row) => row.map((cell) => ({ ...cell })));
    if (promotionPiece == "none") {
      return;
    } else {
      const oldPosition = promotionSquares[0];
      const newPosition = promotionSquares[1];
      copy[newPosition.row][newPosition.col].piece = promotionPiece;
      copy[oldPosition.row][oldPosition.col].piece = null;
      SetPromotionSquares([]);
    }
    setBoard(copy);
    setGameHistory((prev) => [...prev, copy]);
    setPosition(position + 1);
  }, [promotionPiece]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
                onClick={() => HandlePieceClick(square)}
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
            )),
          )}
        </div>
      </div>
      {open && (
        <PawnPromotion
          color={promotionColor}
          promotionPiece={promotionPiece}
          setPromotionPiece={setPromotionPiece}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
}

export default App;
