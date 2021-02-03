const ShipFactory = (len) => {

  // this sould create an array of len lenght, filling it with falses
  // false represents no damage, true represents damage
  let hp = Array.from({length: len}, i => i = false);
  let lenght = len; 

  const hit = (number) => {
    hp[number] = true;
  }

  const isSunk = () => {
    let isArrTrue = (value) => value;
    //this should return true if all are true and false if at least one is false
    return hp.every(isArrTrue);
  }
  return {lenght, hit, isSunk}
}

// What i want shipfactry to 
// HP [false, false, false]
// hit() takes a number and marks a position as hit

// module.exports = shipFactory;



module.exports = ShipFactory;

// export default ShipFactory;