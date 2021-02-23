const Player = (playerGameboard, enemyGameboard, ships) => {
    // const ownGameboard = playerGameboard;
    // const enemyGameboard = enemyGameboard;
    
    // what this should do, is it generates 2 random numbers, passes them to
    // attackEnemyBoard, and if it returns true (while condition has ! at the beggining)
    // then end loop
    let makeRandomMove = () => {
        let randY = randomMove();
        let randX = randomMove();
        console.log(randY, randX);       
        
        while(!attackEnemyBoard(randY, randX)){
           randY = randomMove();
           randX = randomMove();
           console.log(randY, randX);
       }
    };

    let placePlayerShip = (x, y, ship, direction) => {
        playerGameboard.placeShip(x, y, ship, direction);
    };

    // attacks enemy gameboard
    // returns true or false, depending whether the move is valid and has been made
    // "O" indicates that the position has already been struck
    const attackEnemyBoard = (y, x) => {
        if (enemyGameboard.board[y][x] != "O" && enemyGameboard.board[y][x] != "H"){
            enemyGameboard.receiveAttack(y, x);
            return true
        } else {
            return false
        }
    }
    return {attackEnemyBoard, makeRandomMove, placePlayerShip}
}

let randomMove = () =>{
   return Math.floor(Math.random() * Math.floor(10))
}

// module.exports = Player;
export default Player;