import React from "react";
import "./DrawBoard.css";

export default function DrawBoard(props) {
  const colors = {
    E: "#5eb3b3",
    O: "#3d7575",
    X: "#7fbf1f",
    H: "#9e302b",
  };

  const board = props.board;
  const generateBoard = board.map((element, y_index) => {
    return (
      <div key={y_index} className="row">
        {element.map((elem, x_index) => {
          return (
            <div
              key={x_index}
              className="field"
              style={{ backgroundColor: colors[board[y_index][x_index]] }}
            ></div>
          );
        })}
      </div>
    );
  });

  return <div className="board">{generateBoard}</div>;
}

