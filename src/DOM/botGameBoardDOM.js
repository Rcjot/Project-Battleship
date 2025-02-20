const Player = require("../factories/player");

export const botGameBoard = function () {
    const myBot = Player(false);
    const gameScreen = document.querySelector("#gameScreen");
    const player2Board = document.createElement("div");
    const botBoard = document.createElement("div");
    gameScreen.append(player2Board);
    player2Board.append(botBoard);
    player2Board.classList.add("player2");
    botBoard.setAttribute("id", "botBoard");
    myBot.playerGameboard.printBoard();
    const divArr = Array(10) //divArr to store all grid and have reference
        .fill(null)
        .map(() => Array(10).fill(null));

    function createBoard() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const grid = document.createElement("button");
                botBoard.append(grid);
                divArr[i][j] = grid;
                grid.setAttribute("id", "tile");
                grid.setAttribute("value", `${i},${j}`);
                grid.setAttribute("style", "background-color: skyblue");
            }
        }
    }

    function addGridEventListeners() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                divArr[i][j].addEventListener("click", () => {
                    if (myBot.playerGameboard.recieveAttack([j, i])) {
                        divArr[i][j].textContent = "hit";
                        divArr[i][j].disabled = true;
                    } else {
                        divArr[i][j].textContent = "nohit";
                        divArr[i][j].disabled = true;
                    }
                    const event = new Event("clickedBotTile");
                    document.dispatchEvent(event);
                });
            }
        }
    }

    function renderBoard() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                divArr[j][i].setAttribute("style", "background-color: skyblue");

                if (myBot.playerGameboard.board[j][i] === "x") {
                    divArr[j][i].textContent = "hit";
                    divArr[j][i].setAttribute(
                        "style",
                        "background-color: darkgoldenrod"
                    );
                    if (myBot.playerGameboard.coordsArr[j][i].isSunk()) {
                        divArr[j][i].setAttribute(
                            "style",
                            "background-color: red"
                        );
                    }
                } else if (myBot.playerGameboard.board[j][i] === "o") {
                    divArr[j][i].textContent = "nohit";
                    divArr[j][i].setAttribute(
                        "style",
                        "background-color: blue"
                    );
                }
            }
        }
    }

    function disableButtons() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                divArr[i][j].disabled = true;
            }
        }
    }

    function init() {
        createBoard();
        addGridEventListeners();
    }

    function checkAllShipsSunk() {
        return myBot.playerGameboard.checkAllShipsSunk();
    }

    return {
        init,
        checkAllShipsSunk,
        disableButtons,
        renderBoard,
    };
};
