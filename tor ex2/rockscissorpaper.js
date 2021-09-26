function computerPlay(){
    let rps = ["Rock", "Paper", "Scissor"];
    let ranNum = Math.floor(Math.random()*3);
    return rps[ranNum];
}

function play(playerSelection, computerSelection){
    let x = `Result is DRAW, ${playerSelection} vs ${computerSelection}`;
    let y = `Result is WIN, ${playerSelection} vs ${computerSelection}`;
    let z = `Result is LOSE, ${playerSelection} vs ${computerSelection}`;

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return x;
    }
    if (playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "Paper"){
            return z;
        } else {
            return y;
        }
    }

    if (playerSelection.toLowerCase() === "scissor"){
        if (computerSelection === "Rock"){
            return z;
        } else{
            return y;
        }
    }

    if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "Rock"){
            return y;
        } else{
            return z;
        }
    }

    return "inputlu salah bro!";
}

function game(){
    let score = 0;

    alert("Warning, you will battle with computer in rock paper scissor game in 5 round");

    for (let i = 0; i < 5; i++){
        let userSelection = prompt("What is your choice");
        let computerSelection = computerPlay();
        alert(play(userSelection, computerSelection));
        console.log(play(userSelection, computerSelection));
    }
}

game();
