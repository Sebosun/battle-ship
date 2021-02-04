const GameboardFactory = (x_axis, y_axis) => { 

    let board = generateArray(y_axis, x_axis);
    
    return { board };
}


//generates an 2d array 
let generateArray = (vertical, horizontal) => {
    let arr = Array.apply(null, Array(vertical))
    arr.forEach((element ,index) => arr[index] = genEmptyElems(horizontal))
    return arr;
};

//returns an array filled with empty strings based on number received
let genEmptyElems = (horizontal) => {
    let newArr = Array.apply(null, Array(horizontal));
    newArr.forEach( (element, index) => {
        newArr[index] = ''
    });
    return newArr;
};

module.exports = GameboardFactory;
