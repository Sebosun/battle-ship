// const Player = require('../Player');
import Player from "../Player"

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test(`attackEnemyBoard should return false if place under 
      attack has already been struck`, () =>{
    let playerOne = Player(
            {}, 
            { board:
                [
                [ "O",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ],
                receiveAttack: () => {}
            },
            '',
        );
    expect(playerOne.attackEnemyBoard(0,0)).toBe(false);
})

test(`attackEnemyBoard should return true if position was never struck`, () =>{
    let playerOne = Player(
            {}, 
            {board:
               [[ "O",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ],
            receiveAttack: () => {}},
            '',
        );
    expect(playerOne.attackEnemyBoard(1,1)).toBe(true);
})

test(`attackEnemyBoard should return false if place under 
      attack has already been struck`, () =>{
    let playerOne = Player(
            {}, 
            {board:
               [[ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "O",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
                [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
            ],
            receiveAttack: () => {}},
            '',
        );
    expect(playerOne.attackEnemyBoard(1,1)).toBe(false);
})

test(`checks if makeRandomMove correctly calls attackEnemyBoard`, () =>{
    let boardOne = [
        [ "X",  "",  "",  "",  "O",  "O",  "O",  "O",  "O",  "O"],
        [ "X",  "",  "",  "",  "O",  "O",  "O",  "O",  "O",  "O"],
        [ "X",  "",  "",  "",  "O",  "O",  "O",  "O",  "O",  "O"],
        [ "",  "",  "",  "",  "",  "",  "",  "",  ""],
        [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
        [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
    ]
    let playerOne = Player(
            {}, 
            {board: boardOne,
            receiveAttack: (y, x) => boardOne[y][x] = 'H'},
            '',
        );
    playerOne.makeRandomMove();
    console.log(boardOne);
    expect(boardOne[1][1]).toBe("H");
})

// test(`tests if random move returns false if fails`, () =>{
//     let boardOne = [
//         [ "H",  "",  "",  "",  "O",  "O",  "O",  "O",  "O",  "O"],
//         [ "H",  "",  "",  "",  "O",  "O",  "O",  "O",  "O",  "O"],
//         [ "H",  "",  "",  "",  "O",  "O",  "O",  "O",  "O",  "O"],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  ""],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
//         [ "",  "",  "",  "",  "",  "",  "",  "",  "",  ""],
//     ]
//     let playerOne = Player(
//             {}, 
//             {board: boardOne,
//             receiveAttack: (y, x) => boardOne[y][x] = 'H'},
//             '',
//         );
//         playerOne.makeRandomMove();
//     expect(boardOne[1][1]).toBe("H");
// })
