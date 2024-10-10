const Player = require("./factories/player");

export const playerGameBoard = (function () {
    const myPlayer = Player(true);

    const divGameboard = document.querySelector("#playerBoard");
    const checkBoxes = document.querySelectorAll(
        ".shipPanel input[type='checkbox']"
    );
    const rotateButton = document.querySelector(".rotateBtn");

    function initCheckBoxes() {
        for (let checkbox of checkBoxes) {
            // checkBox, only check one
            checkbox.addEventListener("change", () => {
                checkBoxes.forEach((item) => {
                    if (checkbox !== item) item.checked = false;
                });
            });
        }
    }

    //board creation
    const divArr = Array(10) //divArr to store all grid and have reference
        .fill(null)
        .map(() => Array(10).fill(null));

    function createBoard() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const grid = document.createElement("button");
                divGameboard.append(grid);
                divArr[i][j] = grid;
                grid.setAttribute("id", "tile");
                grid.setAttribute("value", `${i},${j}`);
            }
        }
    }

    function addGridEventListeners() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                divArr[i][j].addEventListener("mouseover", () => {
                    if (checkBoxes[0].checked === true) {
                        mouseOverEvent(i, j, 0);
                    } else if (checkBoxes[1].checked === true) {
                        mouseOverEvent(i, j, 1);
                    } else if (checkBoxes[2].checked === true) {
                        mouseOverEvent(i, j, 2);
                    } else if (checkBoxes[3].checked === true) {
                        mouseOverEvent(i, j, 3);
                    } else if (checkBoxes[4].checked === true) {
                        mouseOverEvent(i, j, 4);
                    } else {
                    }
                });
                divArr[i][j].addEventListener("mouseleave", () => {
                    if (checkBoxes[0].checked === true) {
                        mouseLeaveEvent(i, j, 0);
                    } else if (checkBoxes[1].checked === true) {
                        mouseLeaveEvent(i, j, 1);
                    } else if (checkBoxes[2].checked === true) {
                        mouseLeaveEvent(i, j, 2);
                    } else if (checkBoxes[3].checked === true) {
                        mouseLeaveEvent(i, j, 3);
                    } else if (checkBoxes[4].checked === true) {
                        mouseLeaveEvent(i, j, 4);
                    } else {
                    }
                    // console.log(hoveredCell);
                });
                divArr[i][j].addEventListener("click", () => {
                    console.log([i, j]);
                    if (checkBoxes[0].checked === true) {
                        mouseClickEvent(i, j, 0);
                    } else if (checkBoxes[1].checked === true) {
                        mouseClickEvent(i, j, 1);
                    } else if (checkBoxes[2].checked === true) {
                        mouseClickEvent(i, j, 2);
                    } else if (checkBoxes[3].checked === true) {
                        mouseClickEvent(i, j, 3);
                    } else if (checkBoxes[4].checked === true) {
                        mouseClickEvent(i, j, 4);
                    } else {
                    }
                });
            }
        }
    }

    function mouseOverEvent(i, j, ship) {
        // console.log("mouseOverEvent");
        const validObj = myPlayer.playerGameboard.checkValid(
            myPlayer.playerGameboard.shipArr[ship],
            [j, i]
        );

        if (validObj.validity) {
            // console.log(validObj.coveredCoordsArr);
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].setAttribute(
                    "style",
                    "background-color: green"
                );
            }
        } else {
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].setAttribute(
                    "style",
                    "background-color: red"
                );
            }
        }
        updateRenderBoard();
    }

    function mouseLeaveEvent(i, j, ship) {
        const validObj = myPlayer.playerGameboard.checkValid(
            myPlayer.playerGameboard.shipArr[ship],
            [j, i]
        );

        if (validObj.validity) {
            // console.log(validObj.coveredCoordsArr);
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].removeAttribute("style");
            }
        } else {
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].removeAttribute("style");
            }
        }
        updateRenderBoard();
    }

    function mouseClickEvent(i, j, ship) {
        const validObj = myPlayer.playerGameboard.checkValid(
            myPlayer.playerGameboard.shipArr[ship],
            [j, i]
        );

        if (validObj.validity) {
            // console.log(validObj.coveredCoordsArr);
            myPlayer.playerGameboard.placeShip(
                myPlayer.playerGameboard.shipArr[ship],
                [j, i]
            );
            checkBoxes[ship].checked = false;
            checkBoxes[ship].disabled = true;
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].setAttribute(
                    "style",
                    "background-color: blue !important"
                );
            }
            myPlayer.playerGameboard.printBoard();
        } else {
        }
        updateRenderBoard();
    }

    function updateRenderBoard() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let show = myPlayer.playerGameboard.board[j][i];
                if (show == 1) {
                    divArr[j][i].removeAttribute("style");
                    divArr[j][i].setAttribute(
                        "style",
                        "background-color: blue !important"
                    );
                }
            }
        }
        // myPlayer.playerGameboard.printBoard();
    }

    function keyBindRotateShip() {
        rotateButton.addEventListener("click", () => {
            rotateShip();
        });
    }

    function rotateShip() {
        // console.log("ship Rotated");
        if (checkBoxes[0].checked === true) {
            myPlayer.playerGameboard.shipArr[0].rotateShip();
        } else if (checkBoxes[1].checked === true) {
            myPlayer.playerGameboard.shipArr[1].rotateShip();
        } else if (checkBoxes[2].checked === true) {
            myPlayer.playerGameboard.shipArr[2].rotateShip();
        } else if (checkBoxes[3].checked === true) {
            myPlayer.playerGameboard.shipArr[3].rotateShip();
        } else if (checkBoxes[4].checked === true) {
            myPlayer.playerGameboard.shipArr[4].rotateShip();
        }
    }

    function checkAllShipsPlaced() {
        checkBoxes.forEach((checkbox) => {
            if (checkbox.disabled === false) return false;
            return true;
        });
    }

    function init() {
        initCheckBoxes();
        createBoard();
        addGridEventListeners();
        keyBindRotateShip();
        rotateShip();
    }

    return {
        init,
        checkAllShipsPlaced,
    };
})();
