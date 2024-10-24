import "./style.css";
import { gameStates } from "./DOM/gameStateDOM";
import { playerGameBoard } from "./DOM/playerBoard/playerGameBoardDOM";

// gameStates.gameStart();
// const myAi = playerModule(false);

// gameBoardDOM.init();
const myBoard = playerGameBoard();

// myBoard.beforeGame.init();

gameStates.vsBotGame();

// gameStates.gameStart();
