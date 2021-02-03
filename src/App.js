import './App.css';

function App() {


  const shipFactory = (lenght) => {
    // TODO create an array with Y*x false, representing hp
    let hp = [false, false, false]
    let hit = (position) => hp[position] = true;
    let sunk = false;
    // checks if the ship is sunk, the ship is sunk if hp array is full of true
    let isSunk = () => console.log(sunk)
    return { hit, sunk }
  }

  // HP [false, false, false]
  // hit() takes a number and marks a position as hit

  let dupa = shipFactory(1);
  console.log(dupa);

  dupa.hit()

  return (
    <div className="App">

    </div>
  );
}

export default App;
