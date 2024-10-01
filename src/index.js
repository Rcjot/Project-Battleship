import "./style.css";
const Player = require("./factories/player");

const divGameboard = document.querySelector("#gameboard");
const checkBoxes = document.querySelectorAll(
    ".shipPanel input[type='checkbox']"
);

const myPlayer = Player(true);

for (let checkbox of checkBoxes) {
    checkbox.addEventListener("change", () => {
        checkBoxes.forEach((item) => {
            if (checkbox !== item) item.checked = false;
        });
    });
}
const divArr = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const grid = document.createElement("div");
        divGameboard.append(grid);
        divArr[i][j] = grid;
        grid.setAttribute("id", "tile");
        grid.setAttribute("value", `${i},${j}`);
    }
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        divArr[i][j].addEventListener("mouseover", () => {
            if (
                checkBoxes[0].checked === true ||
                checkBoxes[1].checked === true ||
                checkBoxes[2].checked === true ||
                checkBoxes[3].checked === true ||
                checkBoxes[4].checked === true
            ) {
                divArr[i][j].setAttribute("style", "background-color: red");
                divArr[i][j + 1].setAttribute(
                    "style",
                    "background-color: blue"
                );
            }
        });
    }
}
// check if any ship button is pressed
/**
             * if so {
             *
             * pass off this.div.value to a function that will
             *  light all positions the ship will go to.
             *
             *lightallPosition {
                
             }
             *
             * }
             */
