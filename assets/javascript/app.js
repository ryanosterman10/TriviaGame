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

function displayCurrentQuestion(){

}

function resetTrivia(){
	currentQuestion = 0;
	correctAnswers = 0;
	hideScore();
}

function showScore(){

}

function hideScore(){

}


$(document).ready(function(){

	run();

});		// document.ready close