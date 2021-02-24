import React, {useState} from "react";
import './App.css';
import './factories/shipFactory'
import Gameboard from "./factories/Gameboard"
import ShipFactory from "./factories/shipFactory.js";
import Player from "./factories/Player";
import DrawBoard from "./components/DrawBoard"

function App() {

  let [PlayerGameboard, setPlayerBoard] = useState(Gameboard(10,10));
  let [NPCGameboard, setNPCGameboard] = useState(Gameboard(10,10));
 
  NPCGameboard.receiveAttack(1,1);
  console.log(NPCGameboard.board);



  // The idea is that board will be forwarded to components, once the state changes, the board will redraw
  return (
    <div className="App">
      <DrawBoard 
        board={PlayerGameboard.board}
      />
    </div>
  );
}

export default App;
