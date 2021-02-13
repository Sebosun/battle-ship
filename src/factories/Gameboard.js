const ShipFactory = require("./shipFactory");

const Gameboard = (x_axis, y_axis) => {
    let ships = []

    let board = generateArray(y_axis, x_axis);


    let placeShip = (position_y, position_x, ship, direction) => {

        
        // thinking of doing input verification before even calling this method 
        // this is doubtful, makes me anxious rethink

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



    const receiveAttack = (atkPos_y, atkPos_x) => {
        if (board[atkPos_y][atkPos_x] === "X") {

            let shipUnderAttack = determineShip(atkPos_y, atkPos_x, ships);
            if (shipUnderAttack.direction == 'horizontal') {  
                //compare ships starting position with the attack position
                // so     // [Y, 4] // [Y, 3] - [Y, 6]
                shipUnderAttack.ship.hit( atkPos_x - shipUnderAttack.position_x );
            } else {
                shipUnderAttack.ship.hit( atkPos_y - shipUnderAttack.position_y );
            }
        }
        else {
            board[atkPos_y][atkPos_x] = "O";
        }
    }

    return { board, placeShip, receiveAttack, ships };
}

const checkAttackPos = (atkPos_x) =>{
    // [Y, 4]
    // [Y, 3] - [Y, 6]
    // we pressupose here that we know which ship we're attacking
    return atkPos_x - shipStartPlace
}

// let newShip = ShipFactory(10);
const determineShip = (atkPos_y, atkPos_x, ships) => {
    // loop over every ship
    // use array.prototype.reduce to loop over each item and return only when it matches the pattern
    // if all goes well, it should return only 1 item 
    //    console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));
    let correctShip = ships.reduce((acc, currentShip) => { 
        // console.log(acc, currentShip)
        // console.log(`Reading cur ship pos ${currentShip.direction}`)
        console.log(`Current ship Y ${currentShip.position_y} X ${currentShip.position_x}`)
        if (currentShip.direction == 'horizontal'){
            let posY = currentShip.position_y;
            let posX = [];
            
            for (let i = 0; i < currentShip.ship.length; i++) posX.push(i + currentShip.position_x)
            console.log(`PosY: ${posY}  PosX:  ${posX} atkPosY: ${atkPos_y} atkPosX: ${atkPos_x}`)
            // It seems like the way i check if the ship is being attacked is wrong
            // cuz it doesnt even get to this if
            if (atkPos_y == posY && posX.includes(atkPos_x)){
                acc.push(currentShip)
                return acc
            } else {
                return acc
            }
        } else if (currentShip.direction == 'vertical'){
            let posX = currentShip.position_x;
            // posY is an array of all Y places the ship occupies
            let posY = [];
            
            for (let i = 0; i < currentShip.ship.length; i++) posY.push(i + currentShip.position_y)

            console.log(`PosY: ${posY}  PosX:  ${posX} atkPosY: ${atkPos_y} atkPosX: ${atkPos_x}`)
            if (atkPos_x == posX && posY.includes(atkPos_y)){
                acc.push(currentShip)
                return acc
            } else {
                return acc
            }
        } else {
            return acc
        }
    }, []);

    console.log(`Correct Ship: ${correctShip}`);
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



module.exports = Gameboard;





// test('if ships take damage'), () => {
//     let gameBoard = Gameboard(10, 10);

    
