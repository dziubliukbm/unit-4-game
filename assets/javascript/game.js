var totalScore=0;
var totalWins=0;
var totalLosses=0;
var number1=0;
var number2=0;
var number3=0;
var number4=0;



window.onload = function reset() {
var randomNumber = Math.floor(Math.random() * 101 + 19); 
$("#random").text(randomNumber);


//  generate 4 numbers from 1 to 12 for each crystal
 number1 = Math.floor(Math.random() * 11 + 1);
 number2 = Math.floor(Math.random() * 11 + 1);
 number3 = Math.floor(Math.random() * 11 + 1);
 number4 = Math.floor(Math.random() * 11 + 1);
 totalScore=0;
 //show scores
 $("#total_score").text(totalScore);
 $("#wins").text(totalWins);
 $("#losses").text(totalLosses);
 $("#blue").on ('click', function(){
    totalScore = totalScore + number1;
    $("#total_score").text(totalScore); 
//sets win/lose 
        if (totalScore == randomNumber){
          win();
        }
        else if ( totalScore > randomNumber){
          lose();
        }      
  })  

  $("#pink").on ('click', function(){
    totalScore = totalScore + number2;
    $("#total_score").text(totalScore); 
        if (totalScore == randomNumber){
          win();
        }
        else if ( totalScore > randomNumber){
          lose();
        }   
      }) 

      $("#purple").on ('click', function(){
        totalScore = totalScore + number3;
        $("#total_score").text(totalScore); 
            if (totalScore == randomNumber){
              win();
            }
            else if ( totalScore > randomNumber){
              lose();
            }   
          }) 
          $("#yellow").on ('click', function(){
            totalScore = totalScore + number3;
            $("#total_score").text(totalScore); 
                if (totalScore == randomNumber){
                  win();
                }
                else if ( totalScore > randomNumber){
                  lose();
                }   
              }) 


//addes the losses to the totalScore
 function win(){
    alert("You won!");
    totalWins++; 
      $("#wins").text(totalWins);
      delete totalScore;
      reset();
    }
    //addes the losses to the totalScore
function lose(){
    alert ("You lose!");
    totalLosses++;
      $("#losses").text(totalLosses);
      delete totalScore;
      reset()
    }
}
