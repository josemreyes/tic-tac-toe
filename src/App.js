import React from "react";
import Board from "./components/Board";
import "./components/styles.css";
// import { render } from "@testing-library/react";

function App() {
  return <Board />; //<Board />;
}

export default React.memo(App);
