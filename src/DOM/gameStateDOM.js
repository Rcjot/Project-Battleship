import { botGameBoard } from "./botGameBoardDOM";
import { playerGameBoard } from "./playerBoard/playerGameBoardDOM";
import { gameFlow } from "../gameFlow";
const myQueue = require("./Queue");
export const gameStates = (function () {
    const gameScreen = document.querySelector("#gameScreen");
    let previousAttack = null;
    let smartBotAttack = false;
    let toStack = false;
    const toAttackQueue = new myQueue();
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

    function doRandomAttack(myPlayer) {
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
            smartBotAttack = true;
            const posAttacksArr = [
                [randx - 1, randy, 0],
                [randx + 1, randy, 1],
                [randx, randy - 1, 2],
                [randx, randy + 1, 3],
            ];

            for (let a of posAttacksArr) {
                toAttackQueue.enqueue(a);
            }
            console.log(smartBotAttack);
            console.log(toAttackQueue.stack2);
            console.log(toAttackQueue.stack1);
        }
    }

    function vsBotGame() {
        gameScreen.innerHTML = "";

        const myPlayer = playerGameBoard();
        const myBot = botGameBoard();
        myPlayer.beforeGame.init();
        document.addEventListener("createBotBoard", () => {
            myPlayer.beforeGame.nextPhase();
            myBot.init();
        });

        document.addEventListener("clickedBotTile", () => {
            if (myBot.checkAllShipsSunk() || myPlayer.checkAllShipsSunk()) {
                const event = new Event("gameOver");
                document.dispatchEvent(event);
            } else {
                if (!smartBotAttack) {
                    doRandomAttack(myPlayer);
                } else {
                    console.log("smartbot activated!!");
                    if (toStack) {
                        console.log("to Stack");
                        console.log(toAttackQueue.stack1, 1);
                        let AttackDq = toAttackQueue.myPop();
                        let [x, y] = AttackDq;
                        let dontpass = true;
                        while (!myPlayer.recieveAttack(x, y) && dontpass) {
                            if (!toAttackQueue.isEmpty()) {
                                console.log(toAttackQueue.stack1, 2);
                                AttackDq = toAttackQueue.myPop();
                                console.log(toAttackQueue.stack1, 3);

                                [x, y] = AttackDq;
                            } else {
                                console.log("dont passsssssssssssssssed");
                                dontpass = false;
                            }
                        }
                        console.log(toAttackQueue.stack1, "before enqueue");

                        if (dontpass) {
                            previousAttack = [x, y];

                            if (myPlayer.checkCoordIfHit(previousAttack)) {
                                toAttackQueue.myPop();
                                switch (AttackDq[2]) {
                                    case 0:
                                        toAttackQueue.enqueue([
                                            AttackDq[0] - 1,
                                            AttackDq[1],
                                            0,
                                        ]);
                                        break;
                                    case 1:
                                        toAttackQueue.enqueue([
                                            AttackDq[0] + 1,
                                            AttackDq[1],
                                            1,
                                        ]);
                                        break;
                                    case 2:
                                        toAttackQueue.enqueue([
                                            AttackDq[0],
                                            AttackDq[1] - 1,
                                            2,
                                        ]);
                                        break;
                                    case 3:
                                        toAttackQueue.enqueue([
                                            AttackDq[0],
                                            AttackDq[1] + 1,
                                            3,
                                        ]);
                                        break;
                                }
                            } else {
                                if (toAttackQueue.isEmpty()) {
                                    smartBotAttack = false;
                                    toStack = false;
                                    toAttackQueue.clear();
                                }
                            }
                        } else {
                            console.log(dontpass, "dont pass");
                            doRandomAttack(myPlayer);
                            smartBotAttack = false;
                            toStack = false;
                            toAttackQueue.clear();
                        }
                        console.log(toAttackQueue.stack1, "after enqueue");
                    } else {
                        if (!toAttackQueue.isEmpty()) {
                            console.log("not to stack");
                            let AttackDq = toAttackQueue.dequeue();
                            console.log(AttackDq);
                            let [x, y] = AttackDq;
                            let dontpass = true;
                            while (!myPlayer.recieveAttack(x, y) && dontpass) {
                                if (!toAttackQueue.isEmpty()) {
                                    AttackDq = toAttackQueue.dequeue();
                                    [x, y] = AttackDq;
                                } else {
                                    console.log("dont passsssssssssssssssed");
                                    dontpass = false;
                                }
                            }
                            if (dontpass) {
                                previousAttack = [x, y];
                                console.log("attacked: ", previousAttack);

                                if (myPlayer.checkCoordIfHit(previousAttack)) {
                                    toStack = true;
                                    toAttackQueue.clear();
                                    switch (AttackDq[2]) {
                                        case 0:
                                            toAttackQueue.enqueue([
                                                AttackDq[0] + 2,
                                                AttackDq[1],
                                                1,
                                            ]);
                                            toAttackQueue.enqueue([
                                                AttackDq[0] - 1,
                                                AttackDq[1],
                                                0,
                                            ]);
                                            break;
                                        case 1:
                                            toAttackQueue.enqueue([
                                                AttackDq[0] - 2,
                                                AttackDq[1],
                                                0,
                                            ]);
                                            toAttackQueue.enqueue([
                                                AttackDq[0] + 1,
                                                AttackDq[1],
                                                1,
                                            ]);
                                            break;
                                        case 2:
                                            toAttackQueue.enqueue([
                                                AttackDq[0],
                                                AttackDq[1] + 2,
                                                3,
                                            ]);
                                            toAttackQueue.enqueue([
                                                AttackDq[0],
                                                AttackDq[1] - 1,
                                                2,
                                            ]);
                                            break;
                                        case 3:
                                            toAttackQueue.enqueue([
                                                AttackDq[0],
                                                AttackDq[1] - 2,
                                                2,
                                            ]);
                                            toAttackQueue.enqueue([
                                                AttackDq[0],
                                                AttackDq[1] + 1,
                                                3,
                                            ]);

                                            break;
                                    }
                                }
                            } else {
                                doRandomAttack(myPlayer);
                            }
                        } else {
                            doRandomAttack(myPlayer);
                            smartBotAttack = false;
                            toStack = false;
                            toAttackQueue.clear();
                        }
                    }
                }

                // put smart bot algo here
            }
        });

        document.addEventListener("gameOver", () => {
            myBot.disableButtons();
        });

        // while (gameFlow.getBoardComplete) {}
    }

    function vsPlayerGame() {
        gameScreen.innerHTML = "";

        let gameBoardFinishedCnt = 0;
        const myPlayer = playerGameBoard();
        const myPlayer2 = playerGameBoard();

        myPlayer.beforeGame.init();

        document.addEventListener("createBotBoard", () => {
            gameBoardFinishedCnt++;
            if (gameBoardFinishedCnt === 2) {
                myPlayer.beforeGame.nextPhase(true);
                myPlayer2.beforeGame.nextPhase(true);
            } else {
                myPlayer2.beforeGame.init();
            }
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
