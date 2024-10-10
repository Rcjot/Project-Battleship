const Player = require("./factories/player");
import { gameBoardDOM } from "./gameBoardDOM";
import { playerGameBoard } from "./playerGameBoardDOM";
import { botGameBoard } from "./botGameBoardDOM";

export const playerModule = function (playerBool) {
    // const myPlayer = Player(playerBool);

    if (!playerBool) {
        botGameBoard.init();
        return;
        // const myAIboard = gameBoardDOM;
        // myAIboard.createBoard();
        // const board = myPlayer.playerGameboard.board;
        // myPlayer.playerGameboard.printBoard();
        // for (let i = 0; i < 10; i++) {
        //     for (let j = 0; j < 10; j++) {
        //         console.log(board[i][j]);
        //         if (board[i][j] === 1) {
        //             myAIboard.fillBotTile([i, j]);
        //         }
        //     }
        // }
        // return;
    }

    // const myRealBoard = gameBoardDOM;
    // myRealBoard.init();
    playerGameBoard.init();
    return;
};
