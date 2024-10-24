const Player = require("../src/factories/player");

test.skip("test computer player", () => {
    const myComputer = Player(false);

    myComputer.playerGameboard.printBoard();
    console.log(myComputer.playerGameboard.board[0]);
});
