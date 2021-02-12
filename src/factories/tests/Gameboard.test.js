const Gameboard = require('../Gameboard');
const ShipFactory = require('../shipFactory');

test('if arrays generates correctly', () => {
    let gameBrd = Gameboard(10, 10);
    expect(gameBrd.board).toStrictEqual(
        [
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
});


test('if array generates correctly', () => {
    let gameBrd = Gameboard(10, 9);
    expect(gameBrd.board).toStrictEqual(
        [
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
});

test('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 0 , {length: 5}, 'horizontal');
    //  // console.log(gameBoard.board);
    expect(gameBoard.board).toStrictEqual(
        [
            ["X",  "X",  "X",  "X",  "X",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
})

test('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(1,  1,  {length: 5}, 'horizontal');
     // console.log(gameBoard.board);
    expect(gameBoard.board).toStrictEqual(
        [
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "X",  "X",  "X",  "X",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
})

xtest('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(9, 5, {length: 4}, 'horizontal');
     // console.log(gameBoard.board);
    expect(gameBoard.board).toStrictEqual(
        [
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "X",  "X",  "X",  "X",  "",  ""],
        ]
    );
})

xtest('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 0 , {length: 4}, 'vertical');
     // console.log(gameBoard);
    expect(gameBoard.board).toStrictEqual(
        [
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
})

test('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 0, {length: 4}, 'vertical');
    gameBoard.placeShip(3, 3, {length: 3}, 'horizontal');
     // console.log(gameBoard);
    expect(gameBoard.board).toStrictEqual(
        [
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ["X",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ["X",  "",  "",  "X",  "X",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
})

xtest('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 5, {length: 4}, 'vertical');
    gameBoard.placeShip(5, 7, {length: 3}, 'horizontal');
    gameBoard.placeShip(7, 3, {length: 3}, 'horizontal');
     // console.log(gameBoard);
    expect(gameBoard.board).toStrictEqual(
        [
            [ "",  "",  "",  "",  "X",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "X",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "X",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "X",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "X",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "X",  "X",  "X"],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            [ "",  "",  "",  "X",  "X",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        ]
    );
})

test("if ships are attacking, creates new ship on 0,0 and attacks that 0,0 position", () => {
    
    let gameBoard = Gameboard(10, 10)
    let newShip = ShipFactory(3);

    gameBoard.placeShip(0, 0, newShip, 'vertical')
    gameBoard.receiveAttack(0, 0);

    expect(gameBoard.ships[0].ship.health).toEqual([true, false, false])
});


test("if ships take dmg, but on more than one position", () => {
    
    let gameBoard = Gameboard(10, 10)
    let newShip = ShipFactory(3);
    
    gameBoard.placeShip(0, 0, newShip, 'horizontal')
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(0, 2);

    expect( gameBoard.ships[0].ship.isSunk() ).toBe(true);
});

test("receive attack on a vertical ship and check if the ship is sunk", () => {
    
    let gameBoard = Gameboard(10, 10)
    let newShip = ShipFactory(3);

    

    
    gameBoard.placeShip(0, 0, newShip, 'vertical')
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(1, 0);
    gameBoard.receiveAttack(2, 0);
    
    expect( gameBoard.ships[0].ship.isSunk() ).toBe(true);
});


xtest("if ships take dmg, but on more than one position", () => {
    
    let gameBoard = Gameboard(10, 10);
    let newShip = ShipFactory(3);
    
    gameBoard.placeShip(0, 5, newShip, 'horizontal');
    gameBoard.receiveAttack(0, 5);
    gameBoard.receiveAttack(0, 6);
    gameBoard.receiveAttack(0, 7);
    
    expect( gameBoard.ships[0].ship.isSunk() ).toBe(true);
});


