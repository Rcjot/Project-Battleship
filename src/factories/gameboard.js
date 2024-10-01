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
        const validObj = checkValid(ship, coords);
        console.log(validObj);
        if (validObj.validity) {
            for (let coords of validObj.coveredCoordsArr) {
                coordsArr[coords[1]][coords[0]] = ship;
            }
            updateBoard();
            return true;
        } else {
            return false;
        }
    }

    function checkValid(ship, coords) {
        const xcoords = coords[0];
        const ycoords = coords[1];
        const length = ship.getLength();
        const coveredCoordsArr = [];
        const bounds = [
            ycoords + length - 1,
            xcoords - (length - 1),
            ycoords - (length - 1),
            xcoords + length - 1,
        ];
        const Valid = {
            validity: true,
            coveredCoordsArr: coveredCoordsArr,
        };

        switch (ship.getPosition()) {
            case 0: //south
                for (let i = ycoords; i <= bounds[0]; i++) {
                    if (checkBounds(i)) {
                        Valid.coveredCoordsArr.push([xcoords, i]);
                        if (coordsArr[i][xcoords] !== "") {
                            Valid.validity = false;
                            return Valid;
                        }
                    } else {
                        Valid.validity = false;
                        return Valid;
                    }
                }
                return Valid;
            case 1: //west
                for (let i = xcoords; i >= bounds[1]; i--) {
                    if (checkBounds(i)) {
                        Valid.coveredCoordsArr.push([i, ycoords]);
                        if (coordsArr[ycoords][i] !== "") {
                            Valid.validity = false;
                            return Valid;
                        }
                    } else {
                        Valid.validity = false;
                        return Valid;
                    }
                }
                return Valid;
            case 2: //north
                for (let i = ycoords; i >= bounds[2]; i--) {
                    if (checkBounds(i)) {
                        Valid.coveredCoordsArr.push([xcoords, i]);
                        if (coordsArr[i][xcoords] !== "") {
                            Valid.validity = false;
                            return Valid;
                        }
                    } else {
                        Valid.validity = false;
                        return Valid;
                    }
                }
                return Valid;

            case 3: //east
                for (let i = xcoords; i <= bounds[3]; i++) {
                    console.log(i);
                    if (checkBounds(i)) {
                        Valid.coveredCoordsArr.push([i, ycoords]);
                        if (coordsArr[ycoords][i] !== "") {
                            Valid.validity = false;
                            return Valid;
                        }
                    } else {
                        Valid.validity = false;
                        return Valid;
                    }
                }
                return Valid;
        }
    }

    function checkBounds(bounds) {
        if (bounds >= 0 && bounds <= 9) {
            return true;
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
        checkValid,
    };
};

module.exports = Gameboard;
