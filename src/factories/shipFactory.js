const ShipFactory = (len) => {
  let health = Array.from({length: len}, i => i = false);
  let lenght = len; 
  const hit = (number) => {
    health[number] = true;
  }

  const isSunk = () => {
    let isArrTrue = (value) => value;
    return health.every(isArrTrue);
  }

  return {lenght, hit, isSunk}
}

// What i want shipfactry to 
// HP [false, false, false]
// hit() takes a number and marks a position as hit

// module.exports = shipFactory;



module.exports = ShipFactory;

// export default ShipFactory;