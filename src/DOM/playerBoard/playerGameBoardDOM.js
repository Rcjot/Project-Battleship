const Player = require("../../factories/player");
import { gridEventListeners } from "./gridEventListeners";

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
            this.checkBoxes.forEach((checkbox) => {
                if (checkbox.disabled === false) return false;
                return true;
            });
        },
        init: function () {
            this.initCheckBoxes();
            this.createModifyBoard();
            this.addGridEventListeners();
            this.gridEventListeners.keyBindRotateShip(this.checkBoxes);
        },
    };

    const duringGameRun = {
        divArr: Array(10) //divArr to store all grid and have reference
            .fill(null)
            .map(() => Array(10).fill(null)),
        createBoard: function () {},
    };

    return {
        startOfGame: beforeGame,
        duringGameRun,
    };
};
