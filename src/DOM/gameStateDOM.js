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
        document.addEventListener("createBotBoard", () => {
            myPlayer.beforeGame.nextPhase();
            myBot.init();
        });

        document.addEventListener("clickedBotTile", () => {
            if (!myBot.checkAllShipsSunk() && !myPlayer.checkAllShipsSunk()) {
                let randx = Math.floor(Math.random() * 10);
                let randy = Math.floor(Math.random() * 10);
                while (!myPlayer.recieveAttack(randx, randy)) {
                    console.log("HEY");
                    randx = Math.floor(Math.random() * 10);
                    randy = Math.floor(Math.random() * 10);
                    console.log(randx, randy);
                }
                // put smart bot algo here
                console.log(randx, randy);
            } else {
                const event = new Event("gameOver");
                document.dispatchEvent(event);
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
