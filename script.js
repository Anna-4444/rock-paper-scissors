const weaponSelect = document.querySelector("#weapon-select");
const challengeButton = document.querySelector(".challenge");
const roundSetUp = document.querySelector(".round-set-up");
const roundResults = document.querySelector(".round-results");
const computerChoice = document.querySelector(".computer-choice");
const results = document.querySelector(".results");
const nextButton = document.querySelector(".next");
const currentRound = document.querySelector(".current-round");
const yourWins = document.querySelector(".your-wins");
const compWins = document.querySelector(".computer-wins");
const ties = document.querySelector(".ties");
const resetButton = document.querySelector(".reset");
const rules = document.querySelector(".rules");
const whoWon = document.querySelector(".who-won");

let round = 1;
currentRound.innerText = `Round: ${round}`;

let yourWin = 0;
let compWin = 0;
let tie = 0;
yourWins.innerText =`Your wins: ${yourWin}`;
compWins.innerText =`Computer Wins: ${compWin}`;
ties.innerText =`Ties: ${tie}`;


weaponSelect.addEventListener("change", function(){
    challengeButton.classList.remove("hide");
});

challengeButton.addEventListener("click", function() {
    computerSelection();
    roundSetUp.classList.add("hide");
    roundResults.classList.remove("hide");
});

function computerSelection() {
    const weaponArray = ["rock", "paper", "scissors"];
    randomIndex = Math.floor(Math.random() * 3);
    const computerWeapon = weaponArray[randomIndex];
    computerChoice.innerText = `The computer chose ${computerWeapon}.`;
    compareWeapons(computerWeapon);
};

function compareWeapons(computerWeapon) {
    if (weaponSelect.value === "paper" && computerWeapon === "paper") {
        results.innerText = "That's a tie! You both chose paper.";
        tie += 1;
        ties.innerText = `Ties: ${tie}`;
    } else if (weaponSelect.value === "paper" && computerWeapon === "rock") {
        results.innerText = "You win this round! Paper beats rock.";
        yourWin += 1;
        yourWins.innerText = `Your wins: ${yourWin}`;
    } else if (weaponSelect.value === "paper" && computerWeapon === "scissors") {
        results.innerText = "You lose this round! Scissors beat paper.";
        compWin += 1;
        compWins.innerText = `Computer Wins: ${compWin}`;
    } else if (weaponSelect.value === "rock" && computerWeapon === "paper") {
        results.innerText = "You lose this round! Paper beats rock.";
        compWin += 1;
        compWins.innerText = `Computer Wins: ${compWin}`;
    } else if (weaponSelect.value === "rock" && computerWeapon === "rock") {
        results.innerText = "That's a tie! You both chose rock.";
        tie += 1;
        ties.innerText = `Ties: ${tie}`;
    } else if (weaponSelect.value === "rock" && computerWeapon === "scissors") {
        results.innerText = "You win this round! Rock beats scissors.";
        yourWin += 1;
        yourWins.innerText = `Your wins: ${yourWin}`;
    } else if (weaponSelect.value === "scissor" && computerWeapon === "paper") {
        results.innerText = "You win this round! Scissors beat paper.";
        yourWin += 1;
        yourWins.innerText = `Your wins: ${yourWin}`;
    } else if (weaponSelect.value === "scissor" && computerWeapon === "rock") {
        results.innerText = "You lose this round!. Rock beats scissors.";
        compWin += 1;
        compWins.innerText = `Computer Wins: ${compWin}`;
    } else if (weaponSelect.value === "scissor" && computerWeapon === "scissors") {
        results.innerText = "That's a tie! You both chose scissors.";
        tie += 1;
        ties.innerText = `Ties: ${tie}`;
    }
};
 
nextButton.addEventListener("click", function() {
    weaponSelect.value = "";
    challengeButton.classList.add("hide");
    roundResults.classList.add("hide");
    roundSetUp.classList.remove("hide");
    currentRoundUpdate();
});

function currentRoundUpdate() {
    round += 1;
    if (round <= 5) {
        currentRound.innerText = `Round: ${round}`
    } else {
        gameOver();
    }  
};

function gameOver() {
    rules.classList.add("hide");
    whoWon.classList.remove("hide");
    if (yourWin > compWin) {
        whoWon.innerText = `Congratulations! You beat the computer!`;
    } else if (compWin > yourWin) {
        whoWon.innerText = `Sorry, looks like the computer won this time!`;
    } else {
        whoWon.innerText = `It looks like an even match, you tied!`;
    };
    roundSetUp.classList.add("hide");
    resetButton.classList.remove("hide");
};

resetButton.addEventListener("click", function(){
    rules.classList.remove("hide");
    whoWon.classList.add("hide");
    yourWin = 0;
    compWin = 0;
    tie = 0;
    yourWins.innerText =`Your wins: ${yourWin}`;
    compWins.innerText =`Computer Wins: ${compWin}`;
    ties.innerText =`Ties: ${tie}`;
    round = 1;
    currentRound.innerText = `Round: ${round}`;
    roundSetUp.classList.remove("hide");
    resetButton.classList.add("hide");
});