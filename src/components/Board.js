import React from "react";
// import { CalculateWinner } from "./Winner";
// import Square from "./Square";
// import Game from "./Game";

function Board(props) {
  return (
    <div>
      <div className="status">{props.status}</div>
      <div className="board-row">
        {props.renderSquare(0)}
        {props.renderSquare(1)}
        {props.renderSquare(2)}
      </div>
      <div className="board-row ">
        {props.renderSquare(3)}
        {props.renderSquare(4)}
        {props.renderSquare(5)}
      </div>
      <div className="board-row ">
        {props.renderSquare(6)}
        {props.renderSquare(7)}
        {props.renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
