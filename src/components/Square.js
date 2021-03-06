import React from "react";
function Square(props) {
  const className = `square ${props.highlightWinner ? "highlight" : "colorOs"}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default React.memo(Square);
