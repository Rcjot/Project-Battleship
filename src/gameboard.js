const Ship = require("./ship");

const Gameboard = function () {
    // array of ships
    const shipArr = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

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

    function placeShip(ship, coords) {
        // check the ships position and coords, check if it is a placement is valid.
        const xcoords = coords[0];
        const ycoords = coords[1];
        let bounds;
        let overlapped = false;
        const coveredCoordsArr = [];
        switch (ship.getPosition()) {
            case 0: //south
                bounds = ycoords + ship.getLength() - 1;
                if (bounds >= 0 && bounds <= 9) {
                    for (let i = ycoords; i <= bounds; i++) {
                        coveredCoordsArr.push([xcoords, i]);
                        if (coordsArr[i][xcoords] !== "") {
                            overlapped = true;
                            break;
                        }
                    }
                }

                break;
            case 1: //west
                bounds = xcoords - (ship.getLength() - 1);
                if (bounds >= 0 && bounds <= 9) {
                    for (let i = xcoords; i >= bounds; i--) {
                        coveredCoordsArr.push([i, ycoords]);
                        if (coordsArr[ycoords][i] !== "") {
                            overlapped = true;
                            break;
                        }
                    }
                }

                break;
            case 2: //north
                bounds = ycoords - (ship.getLength() - 1);
                if (bounds >= 0 && bounds <= 9) {
                    for (let i = ycoords; i >= bounds; i--) {
                        coveredCoordsArr.push([xcoords, i]);
                        if (coordsArr[i][xcoords] !== "") {
                            overlapped = true;
                            break;
                        }
                    }
                }

                break;
            case 3: //east
                bounds = xcoords + ship.getLength() - 1;
                if (bounds >= 0 && bounds <= 9) {
                    for (let i = xcoords; i <= bounds; i++) {
                        coveredCoordsArr.push([i, ycoords]);
                        if (coordsArr[ycoords][i] !== "") {
                            overlapped = true;
                            break;
                        }
                    }
                }

                break;
        }
        // console.log(coveredCoordsArr);
        // console.log(bounds);
        if (bounds >= 0 && bounds <= 9 && overlapped === false) {
            // should be validated inside switch case: bounds >= 0 && bounds <= 9
            for (let coords of coveredCoordsArr) {
                coordsArr[coords[1]][coords[0]] = ship; // exchange coords position, because the board is in (y,x) instead of (x,y)
            }
            updateBoard();
            return true;
        } else {
            return false;
        }
    }

    function updateBoard() {
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
        const y = coords[0];
        const x = coords[1];

        if (board[x][y] === 1) {
            board[x][y] = "x";
            coordsArr[x][y].hit();
        } else {
            board[x][y] = "o";
        }
    }

    function checkAllShipsSunk() {
        for (let ship of shipArr) {
            console.log(ship.isSunk());
            if (ship.isSunk() === false) return false;
        }
        return true;
    }

    return {
        placeShip,
        printBoard,
        recieveAttack,
        shipArr,
        checkAllShipsSunk,
    };
};

module.exports = Gameboard;
