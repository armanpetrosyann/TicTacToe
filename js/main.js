'use strict';

// Tic Tac Toe

let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];

let player = "x";


while (true) {
    let boardStr = board[0].join("   ") + "\n" + board[1].join("   ") + "\n" + board[2].join("   ");

    alert(`Now is playing ${player} player`);

    let row = +prompt("Please provider the value for row \n \n" + boardStr);

    let column = +prompt("Please provider the value for column \n \n" + boardStr);

    if (board[row][column] !== "_") {
        alert("Not a legal move, you lose!");
        break;
    }

    board[row][column] = player;

    if (player === "x") {
        player = "o";
    } else {
        player = "x";
    }

}
