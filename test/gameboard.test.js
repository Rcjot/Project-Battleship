const Ship = require("../src/factories/ship");
const Gameboard = require("../src/factories/gameboard");

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

test("actual gameplay test", () => {
    // , place all ships, attack all, ask if all ships sunk
    const myBoard = Gameboard();

    myBoard.placeShip(myBoard.shipArr[0], [0, 0]);
    myBoard.placeShip(myBoard.shipArr[1], [1, 0]);
    myBoard.placeShip(myBoard.shipArr[2], [2, 0]);
    myBoard.placeShip(myBoard.shipArr[3], [3, 0]);
    myBoard.placeShip(myBoard.shipArr[4], [4, 0]);
    myBoard.recieveAttack([0, 0]);
    myBoard.recieveAttack([0, 1]);
    myBoard.recieveAttack([0, 2]);
    myBoard.recieveAttack([0, 3]);
    myBoard.recieveAttack([0, 4]);
    myBoard.recieveAttack([1, 2]);
    myBoard.recieveAttack([9, 9]);
    myBoard.recieveAttack([3, 5]);

    expect(myBoard.shipArr[0].getHitCount()).toBe(5);
    expect(myBoard.shipArr[0].isSunk()).toBe(true);
    expect(myBoard.shipArr[1].getHitCount()).toBe(1);
    expect(myBoard.checkAllShipsSunk()).toBe(false);
    myBoard.recieveAttack([1, 0]);
    myBoard.recieveAttack([1, 1]);
    myBoard.recieveAttack([1, 2]);
    myBoard.recieveAttack([1, 3]);
    myBoard.recieveAttack([1, 4]);
    myBoard.recieveAttack([2, 0]);
    myBoard.recieveAttack([2, 1]);
    myBoard.recieveAttack([2, 2]);
    myBoard.recieveAttack([2, 3]);
    myBoard.recieveAttack([2, 4]);
    myBoard.recieveAttack([3, 0]);
    myBoard.recieveAttack([3, 1]);
    myBoard.recieveAttack([3, 2]);
    myBoard.recieveAttack([4, 0]);
    myBoard.recieveAttack([4, 1]);
    myBoard.recieveAttack([4, 2]);

    expect(myBoard.checkAllShipsSunk()).toBe(true);

    myBoard.printBoard();
});
