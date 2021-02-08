const ShipFactory = require("./shipFactory");



// No.	Class of ship	Size
// 1	Carrier	5
// 2	Battleship	4
// 3	Cruiser	3
// 4	Submarine	3
// 5	Destroyer	2


// let carrier = ShipFactory(5);
// let battleship = ShipFactory(4);
// let cruiser = ShipFactory(3);
// let submarine = ShipFactory(3);
// let destroyer = ShipFactory(2);

const Gameboard = (x_axis, y_axis) => {
    let ships = []

    let board = generateArray(y_axis, x_axis);



    /// TODO: FIRST THING WHEN YOU GET BACK IS TO CHANGE DIRECTION TO A STRING
    // SO ITS NOT SO CONFUSING
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
        
        if (direction === 0){
            for (let i = 0; i < ship.length; i++) {
                board[pos_y][pos_x] = "X";
                pos_x += 1;
            }
        } else if (direction === 1) {
            for (let i = 0; i < ship.length; i++) {
                board[pos_y][pos_x] = "X";
                pos_y += 1;
            }  
        } else { return -1 }
    }



    const receiveAttack = (atkPos_y, atkPos_x) => {

        if (board[atkPos_y][atkPos_x] === "X") {
            if (ships[0].direction === 0) {  
                //compare ships starting position with the attack position
                // so     // [Y, 4] // [Y, 3] - [Y, 6]
                ships[0].ship.hit( atkPos_x - ships[0].position_x );
                console.log(ships[0])
                console.log('dupa')
            } else {
                ships[0].ship.hit( atkPos_y - ships[0].position_y );
                console.log(ships[0])
                console.log(`${atkPos_y} bitch` )
            }
        }
        // else{
        //     board[atkPos_y][atkPos_x] = "O";
        // }
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

    
