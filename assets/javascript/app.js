var questions = [

	{
		question: "Toy Story Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "A Bug's Life Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Toy Story 2 Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Monster's Inc. Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Finding Nemo Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "The Incredibles Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "WALL-E Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Up Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Toy Story 3 Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Monsters University Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Inside Out Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer: 0
	},
	{
		question: "Finding Dory Q",
		choices: ["A", "B", "C", "D"],
		correctAnswer:0
	}
];

var currentQuestion = 0;
var correctAnswers = 0;
var triviaOver = false;
var countDown = 15;

function run(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	countDown--;
	$('.timer').html("Time Remaining: " + countDown + " Seconds");
	if(countDown === 0){
		stop();
		alert("Time is up! Moving on to the next question...");
	}
}

function stop(){
	clearInterval(counter);
}

$(document).ready(function(){

	displayCurrentQuestion();
	
	// run();

	$(this).find('.triviaMessage').hide();

	$(this).find('.nextButton').on('click', function(){
		if(!triviaOver){

			value = $("input[type='radio']:checked").val();

			if(value == undefined){
				$(document).find('.triviaMessage').text("Please select an answer");
				$(document).find('.triviaMessage').show();
			}
			else{
				$(document).find('.triviaMessage').hide();
				if(value == questions[currentQuestion].correctAnswer){
					correctAnswers++;
				}

				currentQuestion++;

				if(currentQuestion < questions.length){
					displayCurrentQuestion();
				}
				else{
					showScore();
					$(document).find('.nextButton').text("Play Again?");
					triviaOver = true;
				}
			}
		}

		else{
			triviaOver = false;
			$(document).find('.nextButton').text("Next Question");
			resetTrivia();
			displayCurrentQuestion();
			hideScore();
		}

	});

});		// document.ready close

function displayCurrentQuestion(){
	var question = questions[currentQuestion].question;
	var questionClass = $(document).find('#trivia-container > .question');
	var answerList = $(document).find('#trivia-container > .answerList');
	var numAnswers = questions[currentQuestion].choices.length;

	$(questionClass).text(question);
	console.log(question);

	$(answerList).find('li').remove();

	var choice;
	for(i=0; i < numAnswers; i++) {
		choice = questions[currentQuestion].choices[i];
		$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(answerList);
	}
}

function resetTrivia(){
	currentQuestion = 0;
	correctAnswers = 0;
	hideScore();
}

function showScore(){
	$(document).find('#trivia-container > .result').text("You correctly answered: " + correctAnswers + " out of: " + questions.length);
	$(document).find('#trivia-container > .result').show();
}

function hideScore(){
	$(document).find('.result').hide();
}


// $(document).ready(function(){

// 	displayCurrentQuestion();
	
// 	// run();

// 	$(this).find('.triviaMessage').hide();

// 	$(this).find('.nextButton').on('click', function(){
// 		if(!triviaOver){

// 			value = $("input[type='radio']:checked").val();

// 			if(value == undefined){
// 				$(document).find('.triviaMessage').text("Please select an answer");
// 				$(document).find('.triviaMessage').show();
// 			}
// 			else{
// 				$(document).find('.triviaMessage').hide();
// 				if(value == questions[currentQuestion].correctAnswer){
// 					correctAnswers++;
// 				}

// 				currentQuestion++;

// 				if(currentQuestion < qestions.length){
// 					displayCurrentQuestion();
// 				}
// 				else{
// 					showScore();
// 					$(document).find('.nextButton').text("Play Again?");
// 					triviaOver = true;
// 				}
// 			}
// 		}

// 		else{
// 			triviaOver = false;
// 			$(document).find('.nextButton').text("Next Question");
// 			resetTrivia();
// 			displayCurrentQuestion();
// 			hideScore();
// 		}

// 	});

// });		// document.ready close



