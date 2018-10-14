// Setting up the variables, the four crystals get thier own var, and total score

var randomnumber = 0;

var crystals = Math.floor(Math.random() * 11) + 1;
var crystal1 = randomnumber(1,12);
var crystal2 = randomnumber(1,12);
var crystal3 = randomnumber(1,12);
var crystal4 = randomnumber(1,12);

var totalScore = 0;
var scoreTarget = 0;

function targetNumber(){
    var scoreTarget = Math.floor(Math.random() * 120) + 1;

    if (totalScore === scoreTarget){
        $("wins").html()
    }
}