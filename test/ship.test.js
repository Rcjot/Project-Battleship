const Ship = require("../src/ship");

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

test("rotateShip test", () => {
    const myShip = Ship(3);
    myShip.rotateShip();
    myShip.rotateShip();
    myShip.rotateShip();
    myShip.rotateShip();
    myShip.rotateShip();
    expect(myShip.getPosition()).toBe(1);
});
