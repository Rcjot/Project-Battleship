import "./style.css";
import { gameBoardModule } from "./gameBoardDOM";
const Player = require("./factories/player");

gameBoardModule.init();
/*
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
const divArr = Array(10) //divArr to store all grid and have reference
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
            // console.log(`${j}, ${i}`);
            if (checkBoxes[0].checked === true) {
                const validObj = myPlayer.myGameboard.checkValid(
                    myPlayer.myGameboard.shipArr[0],
                    [j, i]
                );

                if (validObj.validity) {
                    console.log(validObj.coveredCoordsArr);
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
            }
        });
        divArr[i][j].addEventListener("mouseleave", () => {
            // console.log(`${j}, ${i}`);
            if (checkBoxes[0].checked === true) {
                const validObj = myPlayer.myGameboard.checkValid(
                    myPlayer.myGameboard.shipArr[0],
                    [j, i]
                );

                if (validObj.validity) {
                    console.log(validObj.coveredCoordsArr);
                    for (let coords of validObj.coveredCoordsArr) {
                        divArr[coords[1]][coords[0]].removeAttribute("style");
                    }
                } else {
                    for (let coords of validObj.coveredCoordsArr) {
                        divArr[coords[1]][coords[0]].removeAttribute("style");
                    }
                }
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
