const Ship = require("../src/factories/ship");
const Gameboard = require("../src/factories/gameboard");

test.skip("place ship with different size", () => {
    const myShip1 = Ship(1);
    const myShip2 = Ship(2);
    const myShip3 = Ship(3);
    const myShip4 = Ship(4);
    const myShip5 = Ship(5);
    const myBoard = Gameboard();

    expect(myBoard.placeShip(myShip1, [0, 0])).toBe(true);
    expect(myBoard.placeShip(myShip2, [1, 0])).toBe(true);
    expect(myBoard.placeShip(myShip3, [2, 0])).toBe(true);
    expect(myBoard.placeShip(myShip4, [3, 0])).toBe(true);
    expect(myBoard.placeShip(myShip5, [4, 0])).toBe(true);

    myBoard.printBoard();
});

test.skip("place a ship, south", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
    //ship placement
    expect(myBoard.placeShip(myShip, [0, 0])).toBe(true);

    //ship overlap
    expect(myBoard.placeShip(myShip, [0, 2])).toBe(false);

    //ship out of bounds
    expect(myBoard.placeShip(myShip, [0, 9])).toBe(false);
});

test.skip("place a ship, west", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
    myShip.rotateShip();

    //ship placement
    expect(myBoard.placeShip(myShip, [3, 0])).toBe(true);
    expect(myBoard.placeShip(myShip, [9, 0])).toBe(true);
    expect(myBoard.placeShip(myShip, [9, 2])).toBe(true);
    expect(myBoard.placeShip(myShip, [3, 5])).toBe(true);

    //ship overlap
    expect(myBoard.placeShip(myShip, [4, 0])).toBe(false);

    //ship out of bounds
    expect(myBoard.placeShip(myShip, [0, 0])).toBe(false);

    myBoard.printBoard();
});

test.skip("place a ship, north", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
    myShip.rotateShip();
    myShip.rotateShip();
    //ship placement
    expect(myBoard.placeShip(myShip, [5, 3])).toBe(true);
    expect(myBoard.placeShip(myShip, [9, 9])).toBe(true);
    expect(myBoard.placeShip(myShip, [9, 2])).toBe(true);
    expect(myBoard.placeShip(myShip, [3, 5])).toBe(true);

    //ship overlap
    expect(myBoard.placeShip(myShip, [9, 7])).toBe(false);

    //ship out of bounds
    expect(myBoard.placeShip(myShip, [0, 0])).toBe(false);

    // myBoard.printBoard();
});

test.skip("place a ship, east", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
    myShip.rotateShip();
    myShip.rotateShip();
    myShip.rotateShip();

    //ship placement
    expect(myBoard.placeShip(myShip, [3, 0])).toBe(true);
    expect(myBoard.placeShip(myShip, [0, 0])).toBe(true);
    expect(myBoard.placeShip(myShip, [5, 2])).toBe(true);
    expect(myBoard.placeShip(myShip, [3, 5])).toBe(true);
    expect(myBoard.placeShip(myShip, [7, 9])).toBe(true);

    //ship overlap
    expect(myBoard.placeShip(myShip, [9, 0])).toBe(false);

    //ship out of bounds
    expect(myBoard.placeShip(myShip, [9, 9])).toBe(false);

    myBoard.printBoard();
});
