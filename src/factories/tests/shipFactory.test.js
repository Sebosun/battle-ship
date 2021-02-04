const ShipFactory = require('../shipFactory')

test('tests if lenght property returned by new ship matches the lenght given', () => {
    let newShip = ShipFactory(3);
    expect(newShip.length).toBe(3);
});

test('tests if lenght property returned by new ship matches the lenght given', () => {
    let newShip = ShipFactory(2);
    expect(newShip.length).toBe(2)
});

test('checks if the hit property works correctly', () => {
    let newShip = ShipFactory(3);
    newShip.hit(1);
    expect(newShip.health).toStrictEqual([false,true,false]);
})

test('checks if the isSunk returns false when the ship shoud be alive', () => {
    let newShip = ShipFactory(2);
    newShip.hit(1);
    expect(newShip.isSunk()).toBe(false);
});

test('checks if the isSunk returns true when the ship shoud be sunk', () => {
    let newShip = ShipFactory(1);
    newShip.hit(0);
    expect(newShip.isSunk()).toBe(true);
});
