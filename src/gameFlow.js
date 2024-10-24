import { playerInit } from "./DOM/playerInitDOM";

export const gameFlow = (function () {
    let playerCreatingBoard = true;

    function setBoardComplete() {
        playerCreatingBoard = false;
    }

    function getBoardComplete() {
        return playerCreatingBoard;
    }

    const playerVsBot = {};

    const playerVsPlayer = {};

    return {
        setBoardComplete,
        getBoardComplete,
        playerVsBot,
        playerVsPlayer,
    };
})();

/**
 * let them choose if its against a bot or a player
 *
 * if a bot {
 *
 * playerInit(true);
 * playerInit(false);
 *
 * }
 */

/**
 * player boards should return something, so that you will know when
 * the game can start
 *
 */
