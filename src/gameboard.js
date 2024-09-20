const Ship = require("./ship");

const Gameboard = function () {
    const board = Array(10)
        .fill(null)
        .map(() =>
            Array(10)
                .fill(null)
                .map(() => ["."])
        );
    const coordsArr = Array(10)
        .fill(null)
        .map(() =>
            Array(10)
                .fill(null)
                .map(() => "")
        );
    function placeShip(ship) {
        coordsArr[0][0] = ship;
        coordsArr[0][1] = ship;
        coordsArr[0][2] = ship;

        coordsArr[9][5] = ship;
        coordsArr[9][4] = ship;
        coordsArr[9][3] = ship;

        for (let i = 0; i < coordsArr.length; i++) {
            for (let j = 0; j < coordsArr.length; j++) {
                if (coordsArr[i][j] !== "") {
                    board[i][j] = 1;
                }
            }
        }
    }

    function printBoard() {
        let myBoard = "";
        for (let i = 0; i < board.length; i++) {
            myBoard += board[i].join("") + "\n";
        }

        console.log(myBoard);
    }

    function recieveAttack(coords) {
        const x = coords[0];
        const y = coords[1];

        if (board[x][y] === 1) {
            board[x][y] = "x";
            coordsArr[x][y].hit();
        } else {
            board[x][y] = "o";
        }
    }

    return {
        placeShip,
        printBoard,
        recieveAttack,
    };
};

module.exports = Gameboard;
