const Gameboard = require("./gameboard");

const Player = function (real) {
    const myGameboard = Gameboard();

    if (!real) {
        for (let ship of myGameboard.shipArr) {
            const randposition = Math.floor(Math.random() * 4);
            let randxcoord = Math.floor(Math.random() * 10);
            let randycoord = Math.floor(Math.random() * 10);
            let coordsArr = [randxcoord, randycoord];
            for (let i = 0; i < randposition; i++) {
                ship.rotateShip();
            }
            // console.log(randposition);
            // console.log(coordsArr);
            // console.log(myGameboard.placeShip(ship, coordsArr));
            while (myGameboard.placeShip(ship, coordsArr) === false) {
                randxcoord = Math.floor(Math.random() * 10);
                randycoord = Math.floor(Math.random() * 10);
                coordsArr = [randxcoord, randycoord];
            }
        }
    }

    return { myGameboard };
};

module.exports = Player;
