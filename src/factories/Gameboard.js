const GameboardFactory = (x_axis, y_axis) => { 
    let ships = []

    let board = generateArray(y_axis, x_axis);

    let placeShip = (position_y, position_x, shipObject, mode) => {
        // thinking of doing input verification before even calling this method 
        
        let pos_y = position_y
        let pos_x = position_x

        if (mode === 0){
            for (let i = 0; i < shipObject.length; i++) {
                board[pos_y][pos_x] = 1;
                pos_x += 1
            }
        } else if (mode === 1) {
            for (let i = 0; i < shipObject.length; i++) {
                board[pos_y][pos_x] = 1;
                pos_y += 1
            }  
        } else { return -1 }
    }

    return { board, placeShip };
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
        newArr[index] = 0
    });
    return newArr;
};



module.exports = GameboardFactory;


