const Ship = require("../src/ship");
const Gameboard = require("../src/gameboard");

test.skip("print board", () => {
    const myBoard = Gameboard();
    const myShip = Ship(3);
    myBoard.placeShip(myShip);
    myBoard.printBoard();
});

test.skip("recieve Attack", () => {
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

test.skip("recieve Attack pass array", () => {
    const shipArr = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

    const myBoard = Gameboard();
    const myShip = shipArr[2];
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
