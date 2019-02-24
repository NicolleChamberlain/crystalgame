
//Global Vars

var randNum = 0;
var wins = 0;
var losses = 0;
var playerScore = 0;

console.log(playerScore);
console.log(randNum);
console.log(wins);
console.log(losses);

var num1 = Math.floor(Math.random() * 11 + 1)
var num2 = Math.floor(Math.random() * 11 + 1)
var num3 = Math.floor(Math.random() * 11 + 1)
var num4 = Math.floor(Math.random() * 11 + 1)

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);


$(".red").attr("data-value", num1);
$(".purple").attr("data-value", num2);
$(".blue").attr("data-value", num3);
$(".orange").attr("data-value", num4);

var targetNumber = "";
console.log(targetNumber);

//start Jquery/JS
$(document).ready(function () {

    //create a random number between 19 and 70
    var Random = Math.floor(Math.random() * 51 + 19);
    console.log(Random);

    //store target number in the class target number
    $(".targetNum").text(Random);

    //select number to guess
    $(".targetNum").html("<p>Your Number: " + Random + "</p>")

    //open reset

    function reset() {
        random = Math.floor(Math.random() * 51+19);
        console.log(random);
     
        $("#randomNumber").text(random);
     
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
     
        playerScore = 0;
        $(".playerScore").text(playerScore);
     }
    //close reset 

    //add wins
     function win() {
        alert("You Win!");
        win++;
        $("#Wins").html(wins);
        reset();
     }
    //add losses 
     function loss() {
        alert("You Lost!");
        loss++;
        $("#Losses").html(losses);
        reset();
     }
    

    

    //click crytsal and add to player score
    $(".crystal").on("click", function () {
        playerScore = playerScore + parseInt($(this).attr("data-value"));
        console.log(playerScore)

    //add to player score
    $(".playerScore").text("Total Collected: " + playerScore);

    
    //if player score is equal to target number/random number --->run win function--->reset
    if(playerScore === targetNumber){
        win();
    }
    //if player score is more then target number/random number--->run loss function--->reset
    else if(playerScore > targetNumber){
        loss();
    }


 
 
   

         
    //close crystal function
    
    });




    //

    //Close JQuery
});
