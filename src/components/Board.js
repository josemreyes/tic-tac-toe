import React, { useState } from "react";
import { CalculateWinner } from "./Winner";
import Square from "./Square";

function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winningInfo = CalculateWinner(boardSquares);
  const winner = winningInfo.winner;

  const winnerHighLight = winningInfo.line;

  let status;
  if (winner) {
    status = `The winner is ${winner}`;
  } else if (winningInfo.isDraw) {
    status = "It's a Draw...";
  } else {
    status = `Next player is ${xIsNext ? "X" : "O"}`;
  }

  function renderSquare(index) {
    return (
      <Square
        value={boardSquares[index]}
        onClick={() => handleClick(index)}
        highlightWinner={winnerHighLight && winnerHighLight.includes(index)}
      />
    );
  }

  function handleClick(index) {
    const squares = [...boardSquares];
    if (winner || squares[index]) return;

    squares[index] = xIsNext ? "X" : "O";

    setBoardSquares(squares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row ">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row ">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default React.memo(Board);
