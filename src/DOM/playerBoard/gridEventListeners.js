export const gridEventListeners = function (myPlayer) {
    function addAllEvents(divArr, i, j, checkBoxes) {
        divArr[i][j].addEventListener("mouseover", () => {
            divArr = divArr;
            checkBoxes = checkBoxes;
            if (checkBoxes[0].checked === true) {
                mouseOverEvent(i, j, 0, divArr);
            } else if (checkBoxes[1].checked === true) {
                mouseOverEvent(i, j, 1, divArr);
            } else if (checkBoxes[2].checked === true) {
                mouseOverEvent(i, j, 2, divArr);
            } else if (checkBoxes[3].checked === true) {
                mouseOverEvent(i, j, 3, divArr);
            } else if (checkBoxes[4].checked === true) {
                mouseOverEvent(i, j, 4, divArr);
            } else {
            }
        });
        divArr[i][j].addEventListener("mouseleave", () => {
            if (checkBoxes[0].checked === true) {
                mouseLeaveEvent(i, j, 0, divArr);
            } else if (checkBoxes[1].checked === true) {
                mouseLeaveEvent(i, j, 1, divArr);
            } else if (checkBoxes[2].checked === true) {
                mouseLeaveEvent(i, j, 2, divArr);
            } else if (checkBoxes[3].checked === true) {
                mouseLeaveEvent(i, j, 3, divArr);
            } else if (checkBoxes[4].checked === true) {
                mouseLeaveEvent(i, j, 4, divArr);
            } else {
            }
            // console.log(hoveredCell);
        });
        divArr[i][j].addEventListener("click", () => {
            console.log([i, j]);
            if (checkBoxes[0].checked === true) {
                mouseClickEvent(i, j, 0, divArr, checkBoxes);
            } else if (checkBoxes[1].checked === true) {
                mouseClickEvent(i, j, 1, divArr, checkBoxes);
            } else if (checkBoxes[2].checked === true) {
                mouseClickEvent(i, j, 2, divArr, checkBoxes);
            } else if (checkBoxes[3].checked === true) {
                mouseClickEvent(i, j, 3, divArr, checkBoxes);
            } else if (checkBoxes[4].checked === true) {
                mouseClickEvent(i, j, 4, divArr, checkBoxes);
            } else {
            }
            const event = new Event("checkShips");
            document.dispatchEvent(event);
        });
    }

    function mouseOverEvent(i, j, ship, divArr) {
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
        updateRenderBoard(divArr);
    }

    function mouseLeaveEvent(i, j, ship, divArr) {
        const validObj = myPlayer.playerGameboard.checkValid(
            myPlayer.playerGameboard.shipArr[ship],
            [j, i]
        );

        if (validObj.validity) {
            // console.log(validObj.coveredCoordsArr);
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].setAttribute(
                    "style",
                    "background-color: skyblue"
                );
            }
        } else {
            for (let coords of validObj.coveredCoordsArr) {
                divArr[coords[1]][coords[0]].setAttribute(
                    "style",
                    "background-color: skyblue"
                );
            }
        }
        updateRenderBoard(divArr);
    }

    function mouseClickEvent(i, j, ship, divArr, checkBoxes) {
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

        updateRenderBoard(divArr);
    }

    function updateRenderBoard(divArr) {
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

    function keyBindRotateShip(checkBoxes) {
        const rotateButton = document.querySelectorAll(".rotateBtn");
        for (let btn of rotateButton) {
            btn.addEventListener("click", () => {
                rotateShip(checkBoxes);
            });
        }
    }

    function rotateShip(checkBoxes) {
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

    return {
        addAllEvents,
        keyBindRotateShip,
        updateRenderBoard,
    };
};
