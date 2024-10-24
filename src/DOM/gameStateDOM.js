import { botGameBoard } from "./botGameBoardDOM";
import { playerGameBoard } from "./playerBoard/playerGameBoardDOM";
import { gameFlow } from "../gameFlow";

export const gameStates = (function () {
    function gameStart() {
        const gameScreen = document.querySelector("#gameScreen");
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
        vsPlayerBtn.addEventListener("click", () => {});
    }

    function vsBotGame() {
        const myPlayer = playerGameBoard();
        const myBot = botGameBoard();
        myPlayer.beforeGame.init();
        document.addEventListener("createBotBoard", () => {
            myBot.init();
        });

        // while (gameFlow.getBoardComplete) {}
    }

    function modifyBoard(Player) {
        const gameScreen = document.querySelector("#gameScreen");
        gameScreen.innerHTML = "";

        Player.createBoard();
    }
    function gameRun() {}
    function gameEnd() {}

    return {
        gameStart,
        vsBotGame,
        modifyBoard,
        gameRun,
        gameEnd,
    };
})();
