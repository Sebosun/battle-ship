const Gameboard = (x_axis, y_axis) => {
    let ships = []

    let board = generateArray(y_axis, x_axis);


    let placeShip = (position_y, position_x, ship, direction) => {

        // TODO: Input verification, checking if ship already exists at a given position

        ships.push({
            position_x,
            position_y,
            ship,
            direction

        });
        // at the initialization here, note lenght, direction and set up pos_y max, posy_y min etc
        let pos_y = position_y;
        let pos_x = position_x;
        
        if (direction === 'horizontal'){
            for (let i = 0; i < ship.length; i++) {
                board[pos_y][pos_x] = "X";
                pos_x += 1;
            }
        } else if (direction === 'vertical') {
            for (let i = 0; i < ship.length; i++) {
                board[pos_y][pos_x] = "X";
                pos_y += 1;
            }  
        } else { return -1 }
    }

    // takes in y and x coordinates and if on the position attacked there's X
    // "attacks" that ship and marks it as "H" (hit)
    // otherwise marks the field as "O"
    const receiveAttack = (atkPos_y, atkPos_x) => {
        if (board[atkPos_y][atkPos_x] === "X") {

            let shipUnderAttack = determineShip(atkPos_y, atkPos_x, ships);
            if (shipUnderAttack.direction === 'horizontal') {  
                //compare ships starting position with the attack position
                // so     // [Y, 4] // [Y, 3] - [Y, 6]
                shipUnderAttack.ship.hit( atkPos_x - shipUnderAttack.position_x );
                board[atkPos_y][atkPos_x] = "H";
            } else {
                shipUnderAttack.ship.hit( atkPos_y - shipUnderAttack.position_y );
                board[atkPos_y][atkPos_x] = "H";
                // console.log(board);
            }
        }
        else {
            board[atkPos_y][atkPos_x] = "O";
        }
    }

    // loops over every ship and checks if all have been sunk
    // returns a boolean
    const areShipsSunk = () => {
        let arrSunk = [];

        ships.forEach(shipObj => {
            arrSunk.push(shipObj.ship.isSunk());
        })

        return arrSunk.every(value => value);
    }

    return { board, placeShip, receiveAttack, ships, areShipsSunk };
}

// const checkAttackPos = (atkPos_x) =>{
//     // [Y, 4]
//     // [Y, 3] - [Y, 6]
//     // we pressupose here that we know which ship we're attacking
//     return atkPos_x - shipStartPlace
// }

// determines which ship is being attacked based on the attack position given
const determineShip = (atkPos_y, atkPos_x, ships) => {
    // loop over every ship
    // use array.prototype.reduce to loop over each item and return only when it matches the pattern
    // if all goes well, it should return only 1 item 
    let correctShip = ships.reduce((acc, currentShip) => { 
        // console.log(`Current ship Y ${currentShip.position_y} X ${currentShip.position_x}`)
        if (currentShip.direction === 'horizontal'){
            let posY = currentShip.position_y;
            let posX = [];
            
            for (let i = 0; i < currentShip.ship.length; i++) posX.push(i + currentShip.position_x)
            // console.log(`PosY: ${posY}  PosX:  ${posX} atkPosY: ${atkPos_y} atkPosX: ${atkPos_x}`)
            if (atkPos_y === posY && posX.includes(atkPos_x)){
                acc.push(currentShip)
                return acc
            } else {
                return acc
            }
        } else if (currentShip.direction === 'vertical'){
            // posY is an array of all Y places the ship occupies
            let posX = currentShip.position_x;
            let posY = [];
            
            for (let i = 0; i < currentShip.ship.length; i++) posY.push(i + currentShip.position_y)

            // console.log(`PosY: ${posY}  PosX:  ${posX} atkPosY: ${atkPos_y} atkPosX: ${atkPos_x}`)
            if (atkPos_x === posX && posY.includes(atkPos_y)){
                acc.push(currentShip)
                return acc
            } else {
                return acc
            }
        } else {
            return acc
        }
    }, []);

    
    return correctShip[0]
}

//generates an 2d array 
const generateArray = (vertical, horizontal) => {
    let arr = Array.apply(null, Array(vertical))
    arr.forEach((element ,index) => arr[index] = genEmptyElems(horizontal))
    return arr;
};

//returns an array filled with empty strings based on number received
const genEmptyElems = (horizontal) => {
    let newArr = Array.apply(null, Array(horizontal));
    newArr.forEach( (element, index) => {
        newArr[index] = "";
    });
    return newArr;
};



export default Gameboard;




// test('if ships take damage'), () => {
//     let gameBoard = Gameboard(10, 10);

    
