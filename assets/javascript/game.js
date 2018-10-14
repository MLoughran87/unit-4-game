// Setting up the variables, the four crystals get thier own var, and total score

// var randomNumber is a random number between 1-120
var randomNumber = Math.floor(Math.random() * 120) + 1;

// setting up the variables for each crystal randomly between 1-12
var crystals = Math.floor(Math.random() * 11) + 1;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

// unsure if to set vars to 0, and create function and use 'this' to apply each start

//var total score is 0, to be changed by functions and events
//Scoretarget set to false, so that when true, resets game
var totalScore = 0
var scoreTarget = false;


// function, if target number equals the total score, then the player wins and things reset
function targetNumber(){
    var scoreTarget = Math.floor(Math.random() * 120) + 1;

    if (totalScore === scoreTarget){
        wins++;
        $("wins").html("wins");
        //resetfunction 
    }
    // dont know if this needs an else, or if the If statement is good enough on its own
   // else ()
}

// step - set up a page load function so when the page loads, it sets target number function to run, 
// assigned each crystal a score


//step - set up function to lose when the number in Scoretarget exceeds totalScore. 

function overtarget() {
    if (totalScore < scoreTarget){
        losses++;
        $("losses").html("losses");
        //resetfunction 
    }
}

// event handles

$