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

        vsPlayerBtn.addEventListener("click", () => {});
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
        modifyBoard,
        gameRun,
        gameEnd,
    };
})();
