const Ship = require("../src/factories/ship");
const Gameboard = require("../src/factories/gameboard");

test.skip("check placeShip", () => {
    const myBoard = Gameboard();
    const myShip = Ship(3);

    myBoard.placeShip(myShip, [0, 0]);
    myBoard.placeShip(myShip, [9, 8]);
    // ship placement
    // expect(myBoard.placeShip(myShip, [0, 0])).toBe(true);

    // //ship overlap
    // expect(myBoard.placeShip(myShip, [0, 2])).toBe(false);
    // //ship out of bounds
    // expect(myBoard.placeShip(myShip, [0, 9])).toBe(false);
});
