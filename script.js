const rules = document.querySelector(".rules");
const whoWon = document.querySelector(".who-won");
const yourWins = document.querySelector(".your-wins");
const compWins = document.querySelector(".computer-wins");
const ties = document.querySelector(".ties");
const currentRound = document.querySelector(".current-round");
const resetButton = document.querySelector(".reset");
const roundSetUp = document.querySelector(".round-set-up");
const weaponSelect = document.querySelector("#weapon-select");
const challengeButton = document.querySelector(".challenge");
const roundResults = document.querySelector(".round-results");
const yourChoice = document.querySelector(".your-choice")
const computerChoice = document.querySelector(".computer-choice");
const results = document.querySelector(".results");
const nextButton = document.querySelector(".next");
const body = document.querySelector("body");

let yourWin;
let compWin;
let tie;
let round;

function gameSetUp() {
    yourWin = 0;
    compWin = 0;
    tie = 0;
    round = 1;
    
    yourWins.innerText =`Your wins: ${yourWin}`;
    compWins.innerText =`Computer Wins: ${compWin}`;
    ties.innerText =`Ties: ${tie}`; 
    currentRound.innerText = `Round: ${round}`;

    rules.classList.remove("hide");
    whoWon.classList.add("hide");
    resetButton.classList.add("hide");
    roundSetUp.classList.remove("hide");
    body.classList.remove("win", "lose", "tie");
};

gameSetUp();

function currentRoundUpdate() {
    round += 1;
    if (round < 5) {
        currentRound.innerText = `Round: ${round}`
    }
    if (round === 5) {
        currentRound.innerText = `Round: ${round}`
        nextButton.innerText = "View results"
    }
    if (round > 5) {
        gameOver();
    } 
};

function gameOver() {
    if (yourWin > compWin) {
        whoWon.innerText = `Congratulations! You beat the computer!`;
        body.classList.add("win")
    } else if (compWin > yourWin) {
        whoWon.innerText = `Sorry, looks like the computer won this time!`;
        body.classList.add("lose")
    } else {
        whoWon.innerText = `It looks like an even match, you tied!`;
        body.classList.add("tie")
    };
    rules.classList.add("hide");
    whoWon.classList.remove("hide");
    roundSetUp.classList.add("hide");
    resetButton.classList.remove("hide");
};

function computerSelection() {
    const weaponArray = ["rock", "paper", "scissors"];
    randomIndex = Math.floor(Math.random() * 3);
    const computerWeapon = weaponArray[randomIndex];
    computerChoice.innerText = `Computer Choice: ${computerWeapon}`;
    yourChoice.innerText = `Your Choice: ${weaponSelect.value}`;
    roundSetUp.classList.add("hide");
    challengeButton.classList.add("hide");
    compareWeapons(computerWeapon);
};

function compareWeapons(computerWeapon) {
    if (weaponSelect.value === "paper" && computerWeapon === "paper") {
        results.innerText = "That's a tie! You both chose paper.";
        roundResults.classList.add("tie")
        tie += 1;
        ties.innerText = `Ties: ${tie}`;
    } else if (weaponSelect.value === "paper" && computerWeapon === "rock") {
        results.innerText = "You win this round! Paper beats rock.";
        roundResults.classList.add("win")
        yourWin += 1;
        yourWins.innerText = `Your wins: ${yourWin}`;
    } else if (weaponSelect.value === "paper" && computerWeapon === "scissors") {
        results.innerText = "You lose this round! Scissors beat paper.";
        roundResults.classList.add("lose")
        compWin += 1;
        compWins.innerText = `Computer Wins: ${compWin}`;
    } else if (weaponSelect.value === "rock" && computerWeapon === "paper") {
        results.innerText = "You lose this round! Paper beats rock.";
        roundResults.classList.add("lose")
        compWin += 1;
        compWins.innerText = `Computer Wins: ${compWin}`;
    } else if (weaponSelect.value === "rock" && computerWeapon === "rock") {
        results.innerText = "That's a tie! You both chose rock.";
        roundResults.classList.add("tie")
        tie += 1;
        ties.innerText = `Ties: ${tie}`;
    } else if (weaponSelect.value === "rock" && computerWeapon === "scissors") {
        results.innerText = "You win this round! Rock beats scissors.";
        roundResults.classList.add("win")
        yourWin += 1;
        yourWins.innerText = `Your wins: ${yourWin}`;
    } else if (weaponSelect.value === "scissor" && computerWeapon === "paper") {
        results.innerText = "You win this round! Scissors beat paper.";
        roundResults.classList.add("win")
        yourWin += 1;
        yourWins.innerText = `Your wins: ${yourWin}`;
    } else if (weaponSelect.value === "scissor" && computerWeapon === "rock") {
        results.innerText = "You lose this round!. Rock beats scissors.";
        roundResults.classList.add("lose")
        compWin += 1;
        compWins.innerText = `Computer Wins: ${compWin}`;
    } else if (weaponSelect.value === "scissor" && computerWeapon === "scissors") {
        results.innerText = "That's a tie! You both chose scissors.";
        roundResults.classList.add("tie")
        tie += 1;
        ties.innerText = `Ties: ${tie}`;
    }
    roundResults.classList.remove("hide");
};

weaponSelect.addEventListener("change", function(){
    challengeButton.classList.remove("hide");
});

challengeButton.addEventListener("click", function() {
    computerSelection();
});

nextButton.addEventListener("click", function() {
    roundResults.classList.add("hide");
    roundResults.classList.remove("win", "lose", "tie")
    weaponSelect.value = "";
    roundSetUp.classList.remove("hide");
    currentRoundUpdate();
});

resetButton.addEventListener("click", function(){
    gameSetUp();
});