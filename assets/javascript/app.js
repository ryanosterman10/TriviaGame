var questions = [

	{
		question: "Toy Story: Which of these is not a phrase that Woody says when his string is pulled?",
		choices: ["A: Someone's poisoned the water hole!", "B: You're my favorite deputy!", "C: Reach for the stars!", "D: There's a snake in my boot!"],
		correctAnswer: 2
	},
	{
		question: "A Bug's Life: Who was the leader of the grasshoppers and the main antagonist?",
		choices: ["A: Flik", "B: Thumper", "C: Dot", "D: Hopper"],
		correctAnswer: 3
	},
	{
		question: "Toy Story 2: What is the name of the cowgirl that joins Woody and the gang throughout this movie?",
		choices: ["A: Wendy", "B: Jessie", "C: Andy", "D: Mrs. Potato Head"],
		correctAnswer: 1
	},
	{
		question: "Monster's Inc.: What is Sulley's full name?",
		choices: ["A: Suller P. Claws", "B: Sullerman P. Rogers", "C: James P. Sullivan", "D: Sullivan P. Boo"],
		correctAnswer: 2
	},
	{
		question: "Finding Nemo: What did the younger fish call the 'boat' when the first saw it?",
		choices: ["A: a butt", "B: a bubble", "C: a barnacle", "D: a buoy"],
		correctAnswer: 0
	},
	{
		question: "The Incredibles: Which of the following superhuman abilities is NOT possessed by any of the members of the Parr family?",
		choices: ["A: super-speed", "B: super-strength", "C: flight", "D: invisibility"],
		correctAnswer: 2
	},
	{
		question: "WALL-E: When the audience first meets WALL-E, he is tirelessly cleaning up the masses of garbage left behind on Earth. Who or what is his one companion?",
		choices: ["A: a mouse", "B: WALL-A", "C: an old human janitor", "D: a cockroach"],
		correctAnswer: 3
	},
	{
		question: "Up: What is the name of the 13-foot-tall flightless bird that Carl and Russel meet along their journey?",
		choices: ["A: Dug", "B: Earl", "C: Kevin", "D: Snipe"],
		correctAnswer: 2
	},
	{
		question: "Toy Story 3: Why is Andy leaving home?",
		choices: ["A: he got a new job", "B: he is going off to college", "C: he is joining the military", "D: he is running away"],
		correctAnswer: 1
	},
	{
		question: "Inside Out: Which of the following is NOT an emotion depicted in the movie?",
		choices: ["A: Joy", "B: Trust", "C: Anger", "D: Fear"],
		correctAnswer: 1
	}
];

var currentQuestion = 0;
var correctAnswers = 0;
var triviaOver = false;
var countDown = 15;
var skippedAnswers = 0;

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
	
	run();

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
				stop();
				countDown = 16;
				run();

				if(currentQuestion < questions.length){
					displayCurrentQuestion();
				}
				else{
					stop();
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
			run();
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
	$(document).find('#trivia-container > .result').text("You correctly answered: " + correctAnswers + " out of " + questions.length);
	$(document).find('#trivia-container > .result').show();
}

function hideScore(){
	$(document).find('.result').hide();
}


