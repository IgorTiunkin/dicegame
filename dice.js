function rollDices() {
    let player1 = document.querySelector("img.img1");
    let player2 = document.querySelector("img.img2");

    let player1Roll = getRandomRoll();
    let img1 = chooseImage(player1Roll);
    player1.setAttribute("src", img1);

    let player2Roll = getRandomRoll();
    let img2 = chooseImage(player2Roll);
    player2.setAttribute("src", img2);

    setWinner(player1Roll, player2Roll);

}

function chooseImage(playerRoll) {
    return "./images/dice" + playerRoll + ".png";
}

function getRandomRoll() {
    return Math.floor(Math.random()*6)+1;
}

function setWinner(player1Roll, player2Roll) {
    let winnerBlock = document.querySelector("h1");
    if (player1Roll>player2Roll) {
        winnerBlock.innerHTML = "Player1 wins";
    } else if (player1Roll<player2Roll) {
        winnerBlock.innerHTML = "Player2 wins";
    } else {
        winnerBlock.innerHTML = "Deuce";
    }
}

