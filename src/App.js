import React, { useState } from "react";
import "./App.css";
import "./factories/shipFactory";
import Gameboard from "./factories/Gameboard";
import ShipFactory from "./factories/shipFactory.js";
import Player from "./factories/Player";
import DrawBoard from "./components/DrawBoard";

function App() {
  let [PlayerBoard, setPlayerBoard] = useState(Gameboard(10, 10));
  let [NPCBoard, setNPCBoard] = useState(Gameboard(10, 10));

  NPCBoard.receiveAttack(1, 1);
  NPCBoard.receiveAttack(1, 7);
  NPCBoard.receiveAttack(1, 5);
  NPCBoard.receiveAttack(4, 1);
  // The idea is that board will be forwarded to components, once the state changes, the board will redraw

  return (
    <div className="main">
      <div className="npccontainer">
        <p>NPC</p>
        <DrawBoard board={NPCBoard.board} />
      </div>
      <div className="playercontainer">
        <p>Player</p>
        <DrawBoard board={PlayerBoard.board} />
      </div>
    </div>
  );
}

export default App;
