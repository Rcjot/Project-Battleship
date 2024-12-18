import { botGameBoard } from "./botGameBoardDOM";
import { playerGameBoard } from "./playerBoard/playerGameBoardDOM";
import { gameFlow } from "../gameFlow";
export const gameStates = (function () {
    const gameScreen = document.querySelector("#gameScreen");

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
        gameScreen.innerHTML = "";

        const myPlayer = playerGameBoard();
        const myBot = botGameBoard();
        myPlayer.beforeGame.init();
        let previousAttack = null;
        let smartBotAttack = false;
        let toStack = false;
        const toAttackStack = [];
        document.addEventListener("createBotBoard", () => {
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
