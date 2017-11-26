$(document).ready(function(){
  
var magic8Ball = {};

magic8BallAnswers = ["Yaaass", "Nope", "Possibly...", "Absolutely yes!", "Hell nah", "Of course, maybe", "I don't think so", "Impossible"];
  
$("#answer").hide();
 
magic8Ball.askQuestion = function(question){     
                                   
  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * magic8BallAnswers.length;           
  var randomIndex = Math.floor(randomNumberArray);
  var answer = magic8BallAnswers[randomIndex];
   
  $("#answer").text(answer);
  
  console.log(question);
  console.log(answer);
};                                        
 
$("#answer").hide();
  
var askMeAnything = function() {
  
  var question = prompt("Ask a  YES/NO question!");
  $("#8ball").effect( "shake" );
  $("#answer").fadeIn(4000);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  magic8Ball.askQuestion(question);
};

$("#questionButton").click( askMeAnything );
  

});