var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare=function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins"
        }
        else if(choice2==="paper"){
            return "paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "rock wins";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));





[ I am learning pull request ]




