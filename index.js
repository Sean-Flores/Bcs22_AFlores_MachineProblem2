
let counter = 0;
let limit = 10;
let userAns = prompt(`Guess the number between 1 and 100\n tries left: ${limit}`);
let ans = Math.floor(Math.random() * 100) + 1;

while (userAns != ans){
     if (userAns === null) { 
        console.log("Game ended by user.");
        break;
    }
    if (userAns.trim() === '') { 
        console.log("You entered nothing!");
        userAns = prompt(`Guess the number between 1 and 100\nTries left: ${limit}`);
        continue;
    }
    if (userAns < ans){
        counter += 1;
        limit -=1;
        userAns = prompt(`Too low\n tries left: ${limit}\n`);
    } else {
        counter += 1;
        limit -=1;
        userAns = prompt(`Too high\n tries left: ${limit}\n`);
    }
    if (userAns == ans){
        counter += 1;
        alert(`You guessed the right number!! \n Total tries ${counter}`);
        
    }
    if (counter == 10 && userAns != ans){
        alert(`Game Over! You exceeded the number of tries. The Right Answer is ${ans}. Thank you For Playing`);
        break;
    }
}
