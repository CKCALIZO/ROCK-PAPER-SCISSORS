let player_Score = 0;
let CPU_Score = 0;
let playerMove = "";

function updateScores() {
    document.getElementById("playerScore").innerText = player_Score;
    document.getElementById("cpuScore").innerText = CPU_Score;
}

window.onload = function () {
    updateScores();
};

function CPU() {
    const CPU_moves = ["Rock", "Paper", "Scissors"];
    return CPU_moves[Math.floor(Math.random() * CPU_moves.length)];
}

function playGame() {
    document.querySelector(".play-Button").style.display = "none";
    document.querySelector(".scoreboard").style.display = "flex";
    
    document.querySelectorAll(".moves-paper, .moves-rock, .moves-scissors").forEach(button => {
        button.style.display = "block";
    });

    document.querySelectorAll(".game-state-button").forEach(button => button.style.display = "block");
}

// Store player's move
function selectMove(move) {
    playerMove = move; 
    document.getElementById("result").innerHTML = `You chose ${move}. Click 'Fight' to continue.`;
}

function fight() {
    if (!playerMove) {
        document.getElementById("result").innerHTML = "Select a move first!";
        return;
    }

    let cpuMove = CPU();
    let imageElement = document.getElementById("rps");

    if (document.getElementById("wrapper").classList.contains("dark")) {
        imageElement.src = `assets/images/${cpuMove.toLowerCase()}_white.png`;
    } else {
        imageElement.src = `assets/images/${cpuMove.toLowerCase()}.png`;
    }

    document.getElementById("result").innerHTML = `You chose ${playerMove}, CPU chose ${cpuMove}.`;

    determineWinner(playerMove, cpuMove);

    playerMove = "";  // Reset player move
}


function determineWinner(playerMove, cpuMove) {
    let resultText = "";

    if (playerMove === cpuMove) {
        resultText = "It's a tie!";
    } else if (
        (playerMove === "Rock" && cpuMove === "Scissors") ||
        (playerMove === "Paper" && cpuMove === "Rock") ||
        (playerMove === "Scissors" && cpuMove === "Paper")
    ) {
        player_Score++;
        resultText = "You win!";
    } else {
        CPU_Score++;
        resultText = "CPU wins!";
    }

    document.getElementById("result").innerText += ` - ${resultText}`;
    updateScores();
}

function resetGame() {
    document.getElementById("result").innerHTML = "";
    document.querySelector(".play-Button").style.display = "block";
    document.querySelector(".scoreboard").style.display = "none";

    document.querySelectorAll(".game-state-button").forEach(button => {
        button.style.display = "none";
    });

    document.querySelectorAll(".moves-rock, .moves-paper, .moves-scissors").forEach(button => {
        button.style.display = "none";
    });
    if (document.getElementById("wrapper").classList.contains("dark")) {
        document.getElementById("rps").src = "assets/images/rpswhite.png";
    } else {
        document.getElementById("rps").src = "assets/images/rock-paper-scissors.png";
    }
    player_Score = 0;
    CPU_Score = 0;
    updateScores();
}

function darkmode(){
    document.getElementById("wrapper").classList.toggle("dark");
    if (document.getElementById("wrapper").classList.contains("dark")) {
        document.getElementById("rps").src = "assets/images/rpswhite.png";
        document.querySelector(".moves-rock img").src = "assets/images/rock_white.png";
        document.querySelector(".moves-paper img").src = "assets/images/paper_white.png";
        document.querySelector(".moves-scissors img").src = "assets/images/scissors_white.png";
    } else {
        document.getElementById("rps").src = "assets/images/rock-paper-scissors.png";
        document.querySelector(".moves-rock img").src = "assets/images/rock.png";
        document.querySelector(".moves-paper img").src = "assets/images/paper.png";
        document.querySelector(".moves-scissors img").src = "assets/images/scissors.png";
    }
}