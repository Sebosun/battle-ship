const ShipFactory = (len) => {
  // an array of 'len' lenght which is by default set to false
  // true value reflects hit position
  let health = Array.from({ length: len }, (i) => (i = false));
  const length = len;

  const hit = (number) => {
    health[number] = true;
  };

  // returns true or false depending whether all the ships hp has been set to true
  const isSunk = () => {
    let isArrTrue = (value) => value;
    return health.every(isArrTrue);
  };

  return { length, health, hit, isSunk };
};

export default ShipFactory;

