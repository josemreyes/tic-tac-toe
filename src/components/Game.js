import React, { useState } from "react";
import Board from "./Board";
import { CalculateWinner } from "./Winner";
import Square from "./Square";

function Game() {
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

  function handleClick(index) {
    const squares = [...boardSquares];
    if (winner || squares[index]) return;

    squares[index] = xIsNext ? "X" : "O";

    setBoardSquares(squares);
    setXIsNext(!xIsNext);
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

  function handleReset() {
    setBoardSquares(Array(9).fill(null));
    setXIsNext(true);
    status = `Next player is ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game-container">
      <Board status={status} renderSquare={renderSquare} />
      <button className="btn" onClick={() => handleReset()}>
        Reset Game
      </button>
    </div>
  );
}

export default Game;
