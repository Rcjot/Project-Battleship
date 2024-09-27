const Ship = require("../src/ship");
const Gameboard = require("../src/gameboard");

test("place a ship, south", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
    //ship placement
    expect(myBoard.placeShip(myShip, [0, 0])).toBe(true);

    //ship overlap
    expect(myBoard.placeShip(myShip, [0, 2])).toBe(false);

    //ship out of bounds
    expect(myBoard.placeShip(myShip, [0, 9])).toBe(false);
});

test.skip("place a ship test overlap, south", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
    myBoard.placeShip(myShip, [1, 0]);
    myBoard.printBoard();
    expect(myBoard.placeShip(myShip, [1, 2])).toBe(false);
    myBoard.printBoard();
});

test.skip("place a ship test out of bounds, south", () => {
    const myShip = Ship(3);
    const myBoard = Gameboard();
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
