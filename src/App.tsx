import { useEffect, useState } from "react";
import { type chessSquare } from "./types";
import { initialBoard } from "./HelperFunctions";
import GetLegalMoves from "./GetLegalMoves";

//TODO: pieces should not be allowed to move out of bounds
function App() {

const [board, setBoard] = useState<chessSquare[][]>(() => initialBoard());
const [selectedSquares, setSelectedSquares] = useState<chessSquare[]>([])
const [highLightedSquares,setHighLightedSquares] = useState<[number,number][]>([])

useEffect(() => {
  if(selectedSquares.length == 0 ) return;

  if(selectedSquares?.length === 1)
  {
    if(selectedSquares[0].piece == null){
      setHighLightedSquares([]);
      setSelectedSquares([]);
    }
    else{
      console.log(selectedSquares[0])
      console.log(GetLegalMoves({board:board,square:selectedSquares[0]}))
      setHighLightedSquares(GetLegalMoves({board:board,square:selectedSquares[0]}))
    }
  }
  else if(selectedSquares?.length > 1){
     const copy = board.map(row => row.map(cell => ({ ...cell })));
     const oldPosition = selectedSquares[0];
     const newPosition = selectedSquares[1];

     let legalMove: boolean = false;
     highLightedSquares.map((item) => {
      if(item[0] == newPosition.row && item[1] == newPosition.col){
        legalMove = true;
      }
      })
    
      console.log(highLightedSquares)

    if(legalMove)
    {
      copy[newPosition.row][newPosition.col].piece = copy[oldPosition.row][oldPosition.col].piece
      copy[oldPosition.row][oldPosition.col].piece = null
      setBoard(copy)
    }
    setHighLightedSquares([]);
    setSelectedSquares([]);

  }
},[selectedSquares])

useEffect(() => {
  if(selectedSquares.length == 0 )
  {
      const copy = board.map((row, r) =>
    row.map((cell, c) => ({
      ...cell,
      color: (r + c) % 2 === 0 ? "white" : "brown",
    }))
  );
 setBoard(copy);
  }
  if (highLightedSquares.length === 0) return;


  const copy = board.map((row, r) =>
    row.map((cell, c) => ({
      ...cell,
      color: (r + c) % 2 === 0 ? "white" : "brown",
    }))
  );


  highLightedSquares.forEach(([r, c]) => {
    copy[r][c].color = "orange";
  });

  setBoard(copy);
}, [highLightedSquares]);

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
          onClick={() => setSelectedSquares(prev => [...prev, square])}
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

export default App;
