const Player = require("../factories/player");

export const botGameBoard = function () {
    const myBot = Player(false);
    const divGameboard = document.querySelector("#botBoard");
    myBot.playerGameboard.printBoard();
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
    };
};
