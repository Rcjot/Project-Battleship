const Player = require("../../factories/player");
import { gridEventListeners } from "./gridEventListeners";
import { gameFlow } from "../../gameFlow";

export const playerGameBoard = function (player2Bool = false) {
    const myPlayer = Player(true);

    const gameScreen = document.querySelector("#gameScreen");
    const player1Board = document.createElement("div");
    const boardContainer = document.createElement("div");
    const playerBoard = document.createElement("div");
    const shipPanel = document.createElement("div");
    gameScreen.append(player1Board);
    player1Board.append(boardContainer);
    boardContainer.append(shipPanel);
    boardContainer.append(playerBoard);
    playerBoard.setAttribute("id", "playerBoard");

    const beforeGame = {
        // checkBoxes: document.querySelectorAll(
        //     ".shipPanel input[type='checkbox']"
        // ),
        checkBoxes: Array(5)
            .fill(null)
            .map((_, i) => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `btn${i + 1}`;
                checkbox.value = i + 1;

                return checkbox;
            }),
        gridEventListeners: gridEventListeners(myPlayer),
        divArr: Array(10) //divArr to store all grid and have reference
            .fill(null)
            .map(() => Array(10).fill(null)),
        initCheckBoxes: function () {
            const rotateBtn = document.createElement("button");
            rotateBtn.classList.add("rotateBtn");
            rotateBtn.textContent = "R";
            for (let checkbox of this.checkBoxes) {
                // checkBox, only check one
                checkbox.addEventListener("change", () => {
                    this.checkBoxes.forEach((item) => {
                        if (checkbox !== item) item.checked = false;
                    });
                });
                shipPanel.append(checkbox);
            }
            shipPanel.append(rotateBtn);
        },
        createModifyBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const grid = document.createElement("button");
                    playerBoard.append(grid);
                    this.divArr[i][j] = grid;
                    grid.setAttribute("id", "tile");
                    grid.setAttribute("value", `${i},${j}`);
                    grid.setAttribute("style", "background-color: skyblue");
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
        hideBoard: function () {
            for (let BtnSubArr of this.divArr) {
                for (let Btn of BtnSubArr) {
                    Btn.setAttribute("style", "background-color: skyblue");
                }
            }
        },
        init: function () {
            console.log("createdBoard");
            this.initCheckBoxes();
            this.createModifyBoard();
            this.addGridEventListeners();
            this.gridEventListeners.keyBindRotateShip(this.checkBoxes);
            let botCreated = false;
            document.addEventListener("checkShips", () => {
                if (this.checkAllShipsPlaced() && !botCreated) {
                    console.log("all ships placed");
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
                    playerBoard.append(grid);
                    this.divArr[i][j] = grid;
                    grid.setAttribute("id", "tile");
                    grid.setAttribute("value", `${i},${j}`);
                }
            }
        },
        renderBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    this.divArr[j][i].setAttribute(
                        "style",
                        "background-color: skyblue"
                    );

                    if (myPlayer.playerGameboard.board[j][i] === "x") {
                        this.divArr[j][i].textContent = "hit";
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: darkgoldenrod"
                        );
                        if (myPlayer.playerGameboard.coordsArr[j][i].isSunk()) {
                            this.divArr[j][i].setAttribute(
                                "style",
                                "background-color: red"
                            );
                        }
                    } else if (myPlayer.playerGameboard.board[j][i] === "o") {
                        this.divArr[j][i].textContent = "nohit";
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: blue"
                        );
                    } else if (myPlayer.playerGameboard.board[j][i] === 1) {
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: olive"
                        );
                    }
                }
            }
        },
        init: function () {
            shipPanel.innerHTML = "";
            playerBoard.innerHTML = "";
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
                    playerBoard.append(grid);
                    this.divArr[i][j] = grid;
                    grid.setAttribute("id", "tile");
                    grid.setAttribute("value", `${i},${j}`);
                    grid.setAttribute("style", "background-color: skyblue");
                }
            }
        },
        addGridEventListeners: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    this.divArr[i][j].addEventListener("click", () => {
                        if (myPlayer.playerGameboard.recieveAttack([j, i])) {
                            this.divArr[i][j].textContent = "hit";
                        } else {
                            this.divArr[i][j].textContent = "nohit";
                        }
                        const event = new Event("nextTurn");
                        document.dispatchEvent(event);
                    });
                }
            }
        },
        renderBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    this.divArr[j][i].setAttribute(
                        "style",
                        "background-color: skyblue"
                    );

                    if (myPlayer.playerGameboard.board[j][i] === "x") {
                        this.divArr[j][i].textContent = "hit";
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: darkgoldenrod"
                        );
                        if (myPlayer.playerGameboard.coordsArr[j][i].isSunk()) {
                            this.divArr[j][i].setAttribute(
                                "style",
                                "background-color: red"
                            );
                        }
                    } else if (myPlayer.playerGameboard.board[j][i] === "o") {
                        this.divArr[j][i].textContent = "nohit";
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: blue"
                        );
                    } else if (myPlayer.playerGameboard.board[j][i] === 1) {
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: olive"
                        );
                    }
                }
            }
        },
        hideBoard: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    this.divArr[j][i].setAttribute(
                        "style",
                        "background-color: skyblue"
                    );

                    if (myPlayer.playerGameboard.board[j][i] === "x") {
                        this.divArr[j][i].textContent = "hit";
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: darkgoldenrod"
                        );
                        if (myPlayer.playerGameboard.coordsArr[j][i].isSunk()) {
                            this.divArr[j][i].setAttribute(
                                "style",
                                "background-color: red"
                            );
                        }
                    } else if (myPlayer.playerGameboard.board[j][i] === "o") {
                        this.divArr[j][i].textContent = "nohit";
                        this.divArr[j][i].setAttribute(
                            "style",
                            "background-color: blue"
                        );
                    }
                }
            }
        },
        disableBtns: function () {
            for (let BtnSubArr of this.divArr) {
                for (let Btn of BtnSubArr) {
                    Btn.disabled = true;
                }
            }
        },
        enableBtns: function () {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (
                        myPlayer.playerGameboard.board[j][i] === "." ||
                        myPlayer.playerGameboard.board[j][i] === 1
                    ) {
                        this.divArr[j][i].disabled = false;
                    }
                }
            }
        },
        init: function () {
            shipPanel.innerHTML = "";
            playerBoard.innerHTML = "";
            this.createBoard();
            if (!player2Bool) {
                this.disableBtns();
                this.renderBoard();
            }
            this.addGridEventListeners();
        },
    };

    function recieveAttack(randx, randy) {
        // recieve??? wrong spelling
        if (myPlayer.playerGameboard.checkTile([randx, randy])) {
            console.log("goes here!");
            console.log(
                randx,
                randy,
                myPlayer.playerGameboard.checkTile([randx, randy])
            );
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

    function checkCoordIfHit(coords) {
        if (coords[0] < 0 || coords[0] > 9 || coords[1] < 0 || coords[1] > 9)
            return false;

        if (myPlayer.playerGameboard.board[coords[1]][coords[0]] === "x")
            return true;
        return false;
    }

    return {
        beforeGame,
        duringGameVSPlayer,
        duringGameVSBot,
        recieveAttack,
        checkAllShipsSunk,
        checkCoordIfHit,
    };
};
