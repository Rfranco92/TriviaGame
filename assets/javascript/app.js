var correctanswers = 0;
var incorrectanswers = 0;

var number = 120;
var intervalId;



$("button").on("click", stop);

function run() {
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {

    number--;

    $("#timegame").html("<h2>Time left " + number + "</h2>");

    if (number === 0) {

    stop();

    alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
 
	  var questionvalue = [$("input[type='radio'][name='question1']:checked").val(),
	  						$("input[type='radio'][name='question2']:checked").val(),
	  					    $("input[type='radio'][name='question3']:checked").val(),
	  						$("input[type='radio'][name='question4']:checked").val(),
	  					    $("input[type='radio'][name='question5']:checked").val(),
	  						$("input[type='radio'][name='question6']:checked").val(),
	  						$("input[type='radio'][name='question7']:checked").val(),
	  						$("input[type='radio'][name='question8']:checked").val(),
	  						$("input[type='radio'][name='question9']:checked").val(),
	  						$("input[type='radio'][name='question10']:checked").val(),
	  						$("input[type='radio'][name='question11']:checked").val()
	  						];

	  for (var i = 0; i < questionvalue.length; i++){
	  	if (questionvalue[i] == "correct"){
	  		correctanswers++;
	  	}
	  	else{
	  		incorrectanswers++;
	  	}
	  }

	  $("#correct").html("You had " + correctanswers + " correct answers.");
	  $("#incorrect").html("You had " + incorrectanswers + " incorrect answers.");
	  $("#timeleft").html("You took " + (120-number) + " seconds to answer this quiz");
	}
 run();