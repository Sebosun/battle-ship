const ShipFactory = require('./shipFactory')

xtest('tests if lenght property returned by new ship matches the lenght given', () => {
    let newShip = ShipFactory(3);
    expect(newShip.lenght).toBe(3);
});

test('')