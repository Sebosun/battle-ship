const Gameboard = require('../Gameboard');
const ShipFactory = require('../shipFactory');

xtest('if arrays generates correctly', () => {
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


xtest('if array generates correctly', () => {
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

xtest('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 0 , {length: 5}, 'horizontal');
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

test('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(9, 5, {length: 4}, 'horizontal');
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
            [ "",  "",  "",  "",  "",  "X",  "X",  "X",  "X",  ""],
        ]
    );
})

xtest('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 0 , {length: 4}, 'vertical');
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

test('if ships are being mapped onto the map', () => {
    let gameBoard = Gameboard(10, 10);
    // board.placeShip(position_y, position_x, length)
    gameBoard.placeShip(0, 5, {length: 4}, 'vertical');
    gameBoard.placeShip(5, 7, {length: 3}, 'horizontal');
    gameBoard.placeShip(8, 3, {length: 3}, 'horizontal');
    expect(gameBoard.board).toStrictEqual(
        [
            [ "",  "",  "",  "",  "",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "X",  "",  "",  "",  ""],
            [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
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


test("if ships take dmg, but on more than one position", () => {
    
    let gameBoard = Gameboard(10, 10);
    let newShip = ShipFactory(3);
    
    gameBoard.placeShip(0, 5, newShip, 'horizontal');
    gameBoard.receiveAttack(0, 5);
    gameBoard.receiveAttack(0, 6);
    gameBoard.receiveAttack(0, 7);
    
    expect( gameBoard.ships[0].ship.isSunk() ).toBe(true);
});

test("tests if the areShipsSunk returns bool", () => {

    let gameBoard = Gameboard(10,10);
    let newShip = ShipFactory(3);
    let newShip2 = ShipFactory(4);
    let newShip3 = ShipFactory(5);

    gameBoard.placeShip(0, 0, newShip, 'horizontal');
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(0, 2);
    gameBoard.placeShip(1, 1, newShip2, 'vertical');
    gameBoard.receiveAttack(1, 1);
    gameBoard.receiveAttack(2, 1);
    gameBoard.receiveAttack(3, 1);
    gameBoard.receiveAttack(4, 1);
    gameBoard.placeShip(4, 4, newShip3, 'horizontal');
    gameBoard.receiveAttack(4, 4);
    gameBoard.receiveAttack(4, 5);
    gameBoard.receiveAttack(4, 6);
    gameBoard.receiveAttack(4, 7);
    gameBoard.receiveAttack(4, 8);

    expect(gameBoard.areShipsSunk() ).toBe(true);
});

test("tests if the areShipsSunk returns bool", () => {

    let gameBoard = Gameboard(10,10);
    let newShip = ShipFactory(3);
    let newShip2 = ShipFactory(4);
    let newShip3 = ShipFactory(5);

    gameBoard.placeShip(0, 0, newShip, 'horizontal');
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(0, 2);
    gameBoard.placeShip(1, 1, newShip2, 'vertical');
    gameBoard.placeShip(4, 4, newShip3, 'horizontal');


    expect(gameBoard.areShipsSunk() ).toBe(false);
});
