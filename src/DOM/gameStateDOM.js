import { botGameBoard } from "./botGameBoardDOM";
import { playerGameBoard } from "./playerBoard/playerGameBoardDOM";
import { gameFlow } from "../gameFlow";
export const gameStates = (function () {
    const gameScreen = document.querySelector("#gameScreen");
    const backBtn = document.createElement("button");
    let currentState = "gameStart";

    backBtn.textContent = "back";

    backBtn.addEventListener("click", () => {
        location.reload();
    });

    function gameStart() {
        gameScreen.innerHTML = "";
        const titleDiv = document.createElement("div");
        titleDiv.textContent = "Battle Ship";
        const vsPlayerBtn = document.createElement("button");
        const vsBotBtn = document.createElement("button");
        vsPlayerBtn.textContent = "vs Player";
        vsBotBtn.textContent = "vs Bot";
        gameScreen.append(titleDiv);
        gameScreen.append(vsPlayerBtn);
        gameScreen.append(vsBotBtn);

        vsBotBtn.addEventListener("click", () => {
            vsBotGame();
        });
        vsPlayerBtn.addEventListener("click", () => {
            vsPlayerGame();
        });
    }

    function vsBotGame() {
        currentState = "vsBotGame";
        gameScreen.innerHTML = "";
        gameScreen.append(backBtn);

        const myPlayer = playerGameBoard();
        const myBot = botGameBoard();
        myPlayer.beforeGame.init();
        let previousAttack = null;
        let smartBotAttack = false;
        const toAttackStack = [];
        document.addEventListener("createBotBoard", () => {
            if (currentState != "vsBotGame") return;

            myPlayer.beforeGame.nextPhase();
            myBot.init();
        });
        function doRandomAttack() {
            let randx = Math.floor(Math.random() * 10);
            let randy = Math.floor(Math.random() * 10);
            while (!myPlayer.recieveAttack(randx, randy)) {
                console.log("HEY");
                randx = Math.floor(Math.random() * 10);
                randy = Math.floor(Math.random() * 10);
                console.log(randx, randy);
            }
            previousAttack = [randx, randy];
            if (myPlayer.checkCoordIfHit(previousAttack)) {
                console.log("hit!!!!!!!!!");
                console.log("smartbotattack  is going to activate!");
                smartBotAttack = true;
                const posAttacksArr = [
                    [randx - 1, randy, 0],
                    [randx + 1, randy, 1],
                    [randx, randy - 1, 2],
                    [randx, randy + 1, 3],
                ];

                for (let a of posAttacksArr) {
                    toAttackStack.push(a);
                }
            }
        }

        document.addEventListener("clickedBotTile", () => {
            if (currentState != "vsBotGame") return;
            myBot.renderBoard();
            if (myBot.checkAllShipsSunk() || myPlayer.checkAllShipsSunk()) {
                const event = new Event("gameOver");
                document.dispatchEvent(event);
            } else {
                if (!smartBotAttack) {
                    console.log("did random because not smartbot");
                    doRandomAttack();
                } else {
                    if (toAttackStack.length === 0) {
                        smartBotAttack = false;
                        doRandomAttack();
                        console.log("did random because stack is empty");
                        return;
                    }
                    let AttackDq = toAttackStack.pop();
                    let [x, y] = AttackDq;
                    let recievedYes = myPlayer.recieveAttack(x, y);
                    while (!recievedYes && toAttackStack.length != 0) {
                        AttackDq = toAttackStack.pop();
                        [x, y] = AttackDq;
                        recievedYes = myPlayer.recieveAttack(x, y);
                    }

                    if (!recievedYes) {
                        console.log("did random because not yes");
                        smartBotAttack = false;
                        doRandomAttack();
                    } else {
                        previousAttack = [x, y];
                        console.log(AttackDq);
                        if (myPlayer.checkCoordIfHit(previousAttack)) {
                            switch (AttackDq[2]) {
                                case 0:
                                    toAttackStack.push([
                                        AttackDq[0] - 1,
                                        AttackDq[1],
                                        0,
                                    ]);
                                    break;
                                case 1:
                                    toAttackStack.push([
                                        AttackDq[0] + 1,
                                        AttackDq[1],
                                        1,
                                    ]);
                                    break;
                                case 2:
                                    toAttackStack.push([
                                        AttackDq[0],
                                        AttackDq[1] - 1,
                                        2,
                                    ]);
                                    break;
                                case 3:
                                    toAttackStack.push([
                                        AttackDq[0],
                                        AttackDq[1] + 1,
                                        3,
                                    ]);
                                    break;
                            }
                        }
                    }
                }
                if (myBot.checkAllShipsSunk() || myPlayer.checkAllShipsSunk()) {
                    const event = new Event("gameOver");
                    document.dispatchEvent(event);
                }
                // put smart bot algo here
            }
        });

        document.addEventListener("gameOver", () => {
            if (currentState != "vsBotGame") return;

            myBot.disableButtons();
        });

        // while (gameFlow.getBoardComplete) {}
    }

    function vsPlayerGame() {
        gameScreen.innerHTML = "";
        currentState = "vsPlayerGame";
        gameScreen.append(backBtn);

        const myDialog = document.querySelector("dialog");
        const closeBtn = document.querySelector("dialog button");
        closeBtn.addEventListener("click", () => {
            myDialog.close();
        });
        const navBar = document.createElement("div");
        let gameBoardFinishedCnt = 0;
        const myPlayer = playerGameBoard();
        const myPlayer2 = playerGameBoard(true);
        let player1Turn = true;
        myPlayer.beforeGame.init();
        gameScreen.append(navBar);

        document.addEventListener("createBotBoard", () => {
            if (currentState != "vsPlayerGame") return;

            gameBoardFinishedCnt++;
            if (gameBoardFinishedCnt === 2) {
                console.log("finished two? should go next phase");
                myPlayer.beforeGame.nextPhase(true);
                myPlayer2.beforeGame.nextPhase(true);
                myDialog.showModal();
            } else {
                myPlayer.beforeGame.hideBoard();
                myPlayer2.beforeGame.init();
            }
        });

        document.addEventListener("nextTurn", () => {
            if (currentState != "vsPlayerGame") return;

            if (myPlayer.checkAllShipsSunk() || myPlayer2.checkAllShipsSunk()) {
                const event = new Event("gameOver");
                document.dispatchEvent(event);
                return;
            }
            if (player1Turn) {
                //player1 clicked so player2s turn now!
                myPlayer2.duringGameVSPlayer.disableBtns();
                myPlayer2.duringGameVSPlayer.hideBoard();
                createToNextPlayerBtn(player1Turn);
            } else {
                myPlayer.duringGameVSPlayer.disableBtns();
                myPlayer.duringGameVSPlayer.hideBoard();
                createToNextPlayerBtn(player1Turn);
            }
        });

        function createToNextPlayerBtn(p1) {
            console.log("here");
            const toNextBtn = document.createElement("button");
            navBar.append(toNextBtn);
            toNextBtn.textContent = "next";
            toNextBtn.addEventListener("click", () => {
                if (p1) {
                    myPlayer.duringGameVSPlayer.hideBoard();
                    myPlayer2.duringGameVSPlayer.renderBoard();
                    myPlayer.duringGameVSPlayer.enableBtns();
                    myDialog.showModal();
                    player1Turn = false;
                } else {
                    myPlayer2.duringGameVSPlayer.hideBoard();
                    myPlayer.duringGameVSPlayer.renderBoard();
                    myPlayer2.duringGameVSPlayer.enableBtns();
                    myDialog.showModal();
                    player1Turn = true;
                }
                navBar.innerHTML = "";
            });
        }

        document.addEventListener("gameOver", () => {
            if (currentState != "vsPlayerGame") return;
            console.log("gameover?");
            myPlayer.duringGameVSPlayer.renderBoard();
            myPlayer2.duringGameVSPlayer.renderBoard();
            myPlayer.duringGameVSPlayer.disableBtns();
            myPlayer2.duringGameVSPlayer.disableBtns();
        });
    }

    function gameEnd() {}

    return {
        gameStart,
        vsBotGame,
        vsPlayerGame,
        gameEnd,
    };
})();
