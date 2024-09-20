const Ship = require("../src/ship");
const Gameboard = require("../src/gameboard");
test("got hit test", () => {
    const myShip = Ship(3);
    myShip.hit();
    expect(myShip.getHitCount()).toBe(1);
});

test("isSunk test", () => {
    const myShip = Ship(3);
    myShip.hit();
    expect(myShip.isSunk()).toBe(false);
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBe(true);
});

test.skip("print board", () => {
    const myBoard = Gameboard();
    const myShip = Ship(3);
    myBoard.placeShip(myShip);
    myBoard.printBoard();
});

test("recieve Attack", () => {
    const myBoard = Gameboard();
    const myShip = Ship(3);
    myBoard.placeShip(myShip);
    myBoard.printBoard();
    myBoard.recieveAttack([0, 1]);
    myBoard.recieveAttack([0, 0]);
    myBoard.recieveAttack([0, 2]);
    myBoard.recieveAttack([9, 9]);
    myBoard.recieveAttack([3, 5]);
    myBoard.printBoard();
    expect(myShip.getHitCount()).toBe(3);
    expect(myShip.isSunk()).toBe(true);
});
