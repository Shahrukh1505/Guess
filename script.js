'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎉 Correct Answer';
document.querySelector('.number').textContent='15';
document.querySelector('.score').textContent='10';

document.querySelector('.guess').value='20';
*/
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore= 0;
//function for refracting code (function call will be made to this function with message as the parameter)(we can use functions for repetitive code)
const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
//when there is no input
if(!guess)
{
   /* document.querySelector('.message').textContent='⛔ No number'; */
   displayMessage('⛔ No number!'); //function call
}

//when player wins
else if(guess===secretNumber)
{
    //document.querySelector('.message').textContent='🎉 Correct Answer';
    displayMessage('🎉 Correct Answer');
    document.querySelector('.number').textContent=secretNumber;    
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';
if(score>highscore)
{
    highscore = score;
    document.querySelector('.highscore').textContent= highscore;
}
}
//when guess is wrong(DRY principle refracting our code)
else if(guess!==secretNumber)
{
    if(score>1)
    {
       // document.querySelector('.message').textContent= guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
       displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'); 
       score--;
        document.querySelector('.score').textContent=score;
    }
    else
    {
        //document.querySelector('.message').textContent='💥 You lost the game!';
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent=0;

    }

    
  
}
/*
//when guess is too high
else if(guess>secretNumber)
{
    if(score>1)
    {
        document.querySelector('.message').textContent='📈 Too High!';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else
    {
        document.querySelector('.message').textContent='💥 You lost the game!';
        document.querySelector('.score').textContent=0;

    }
}
//when guess is too low
else if(guess<secretNumber)
{
    if(score>1)
    {
        document.querySelector('.message').textContent='📉 Too Low!';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else
    {
        document.querySelector('.message').textContent='💥 You lost the game!';
        document.querySelector('.score').textContent=0;

    }
}
*/
});
//clicking the AGAIN button to restart the game
document.querySelector('.again').addEventListener('click', function()
{
   
    secretNumber = Math.trunc(Math.random()*20)+1;
score = 20;
document.querySelector('.score').textContent= score;
document.querySelector('.number').textContent = '?';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
document.querySelector('.guess').value='';
//document.querySelector('.message').textContent='Start guessing...';
displayMessage('Start guessing...');
 
});