const Player = require("../src/player");

test("test computer player", () => {
    const myComputer = Player(false);

    myComputer.myGameboard.printBoard();
});
