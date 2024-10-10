const Player = require("../src/factories/player");

test("test computer player", () => {
    const myComputer = Player(false);

    myComputer.playerGameboard.printBoard();
    console.log(myComputer.playerGameboard.board[0]);
});
