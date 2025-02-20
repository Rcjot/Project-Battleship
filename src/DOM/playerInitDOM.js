import { playerGameBoard } from "./playerBoard/playerGameBoardDOM";
import { botGameBoard } from "./botGameBoardDOM";

export const playerInit = function (playerBool) {
    if (!playerBool) {
        botGameBoard.init();
        return;
    }

    playerGameBoard.init();
    return;
};
