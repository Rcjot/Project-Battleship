const Player = require("../../factories/player");
import { gridEventListeners } from "./gridEventListeners";
import { gameFlow } from "../../gameFlow";

export const playerGameBoard = function () {
    const myPlayer = Player(true);

    const divGameboard = document.querySelector("#playerBoard");

    const beforeGame = {
        checkBoxes: document.querySelectorAll(
            ".shipPanel input[type='checkbox']"
        ),
        gridEventListeners: gridEventListeners(myPlayer),
        divArr: Array(10) //divArr to store all grid and have reference
            .fill(null)
            .map(() => Array(10).fill(null)),
        initCheckBoxes: function () {
            for (let checkbox of this.checkBoxes) {
                // checkBox, only check one
                checkbox.addEventListener("change", () => {
                    this.checkBoxes.forEach((item) => {
                        if (checkbox !== item) item.checked = false;
                    });
                });
            }
        },
        createModifyBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const grid = document.createElement("button");
                    divGameboard.append(grid);
                    this.divArr[i][j] = grid;
                    grid.setAttribute("id", "tile");
                    grid.setAttribute("value", `${i},${j}`);
                }
            }
        },
        addGridEventListeners: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    this.gridEventListeners.addAllEvents(
                        this.divArr,
                        i,
                        j,
                        this.checkBoxes
                    );
                }
            }
        },
        checkAllShipsPlaced: function () {
            for (let i = 0; i < this.checkBoxes.length; i++) {
                if (this.checkBoxes[i].disabled === false) return false;
            }
            return true;
        },
        nextPhase: function (bool = false) {
            // gameFlow.setBoardComplete();
            if (bool) {
                duringGameVSPlayer.init();
            } else {
                duringGameVSBot.init();
            }
        },
        init: function () {
            this.initCheckBoxes();
            this.createModifyBoard();
            this.addGridEventListeners();
            this.gridEventListeners.keyBindRotateShip(this.checkBoxes);
            let botCreated = false;
            document.addEventListener("checkShips", () => {
                if (this.checkAllShipsPlaced() && !botCreated) {
                    const event = new Event("createBotBoard");
                    document.dispatchEvent(event);
                    botCreated = true;
                }
            });
        },
    };

    const duringGameVSBot = {
        divArr: Array(10) //divArr to store all grid and have reference
            .fill(null)
            .map(() => Array(10).fill(null)),
        createBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const grid = document.createElement("button");
                    divGameboard.append(grid);
                    this.divArr[i][j] = grid;
                    grid.setAttribute("id", "tile");
                    grid.setAttribute("value", `${i},${j}`);
                }
            }
        },
        renderBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (myPlayer.playerGameboard.board[j][i] === 1) {
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: yellow"
                        );
                    }
                    if (myPlayer.playerGameboard.board[j][i] === "x") {
                        this.divArr[j][i].textContent = "hit";
                    } else if (myPlayer.playerGameboard.board[j][i] === "o") {
                        this.divArr[j][i].textContent = "nohit";
                    }
                }
            }
        },
        init: function () {
            divGameboard.innerHTML = "";
            this.createBoard();
            this.renderBoard();
            document.addEventListener("recievedAttack", () => {
                this.renderBoard();
                myPlayer.playerGameboard.printBoard();
            });
        },
    };

    const duringGameVSPlayer = {
        divArr: Array(10) //divArr to store all grid and have reference
            .fill(null)
            .map(() => Array(10).fill(null)),
        createBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const grid = document.createElement("button");
                    divGameboard.append(grid);
                    this.divArr[i][j] = grid;
                    grid.setAttribute("id", "tile");
                    grid.setAttribute("value", `${i},${j}`);
                }
            }
        },
        addGridEventListeners: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    divArr[i][j].addEventListener("click", () => {
                        if (myPlayer.playerGameboard.recieveAttack([j, i])) {
                            divArr[i][j].textContent = "hit";
                        } else {
                            divArr[i][j].textContent = "nohit";
                        }
                    });
                }
            }
        },
    };

    function recieveAttack(randx, randy) {
        if (myPlayer.playerGameboard.checkTile([randx, randy])) {
            console.log("goes here!");
            myPlayer.playerGameboard.recieveAttack([randx, randy]);
            const event = new Event("recievedAttack");
            document.dispatchEvent(event);
            return true;
        }
        return false;
    }

    function checkAllShipsSunk() {
        return myPlayer.playerGameboard.checkAllShipsSunk();
    }

    return {
        beforeGame,
        duringGameVSPlayer,
        duringGameVSBot,
        recieveAttack,
        checkAllShipsSunk,
    };
};
