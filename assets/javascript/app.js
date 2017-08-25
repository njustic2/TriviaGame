// Create variables for the title page words and start button
// Display the title page
// A funtion that responds to clicking start that will load the rest of the game
// Create variables for the title page words and start button.
// Display the title page.
// A funtion that responds to clicking start that will load the rest of the game.
// Create an array of objects. Each object should have a question and several answers to choose from. also, images and sounds?
// Create a function that displays the questions in order
// Create a function that displays the questions in order.
// Create a function that determines if the correct answer has been chosen. And if so, adds to a counter Also, a way to move on to the next question.
// Create a timer that takes a set amount of time and applys it to each question in turn. Also pushes the next question if the timer runs out.
// Create a function that determines the the game is over and displays the number of correct answers and wrong answers
// if time, add in music or sound effects and images
// Create a timer that takes a set amount of time and applies it to each question in turn. Also pushes the next question if the timer runs out.
// Create a function that determines the the game is over and displays the number of correct answers and wrong answers.
// if time, add in music or sound effects and images.
  
  var questionArray = [ 	//An array of objects. Each object has properties (question and answers) and values(the string containing the words in this case)
  	
     { // Position 0 of questionArray with a key of questA declaring an object that contains questions and answers.
		question: "What is the shortest unit of measurment?", 	// A Question to be displayed in the upper left corner
		answerA: "A quark pair",	// Questions that appear in order in the center bottom of the screen
  		answerB: "A planck length",
  		answerC: "One micron",
  		answerD: "A helameter",
		correctAnswer: "A planck length"	// The correct answer that can be compared to the the chosen answer in the checkAnswer function.
  	}, 

    {
    	question: " Which talks about Geological chemistry ?",
    	answerA: " The hardest emelent in the table of chemicals",
   		answerB: "An ongoing chemical reaction where hydrogen is turned into helium",
  		answerC: "The star that is nearest to earth",
  		answerD: "All of the above",
     	correctAnswer: "All of the above"
  	},
  
  	{
  		question: "What is a quantum superposition ?",
  		answerA: "A thought experiment that represents the paridoxial nature of quantum superposition.",
		answerB: "Based on the Greek myth; Opening Pandora's box to see if the cat is alive or dead represents taking a seemingly innocent and tiny action that ends up having all consuming and disatorous concequences.",
  		answerC: "Marie Curie's short term lab assistent's cat, who was unintentianaly (and unfortunatly for the cat), instramental in the discovery of radiation.",
  		answerD: "When the Cromulens show up on earth, and force the planet to compete in an inter-planitary version of who's got talent, in episode 5, season 1 of Rick and Morty (Get Schwifty). Shrodinger's Cat was the name of one of the more unique bands that competed against earth and ultimatly lost and got their planet destroyed.",
 		correctAnswer: "A thought experiment that represents the paridoxial nature of quantum superposition.",	
  	},
  
  	{
  		question: "The guinius who solved the best solution to a problem in a movie ?",
  		answerA: "Mike Tyson",
  		answerB: "Dr. Richard Dawkins",
  		answerC: "Neil Degrasse Tyson",
  		answerD: "Steven Hawkins",
 		correctAnswer: "Neil Degrasse Tyson",
  	},
  
  	{
  		question: "What did certain NASA like astronauts do ?",
  		answerA: "Walk the moon",
  		answerB: "NASA scientists created a machine that was temperaraly attached to the satalite in a subsequent mission in 1993, that meticulously re-ground the main lense to componsate for the warping that occurred during launch",
  		answerC: "The focusing proplem seemed to just 'fix itself'. One of the many misteries of space.",
  		answerD: "Performing a record setting 5 space walks in 5 days, astronauts retrofitted the telescope with software and hardware that compensated for the miscalculation in the design of convex angle of the main telescope lense.",
		correctAnswer: "Performing a record setting 5 space walks in 5 days, astronauts retrofitted the telescope with software and hardware that compensated for the miscalculation in the design of convex angle of the main telescope lense.",
		
  	}
  ];
  console.log("Entire array ", questionArray);
  console.log("One Item ", questionArray[2]);
  console.log("Question C ", questionArray[2].correctAnswer);

  
var title = "Cosmic Quiz";	// A variable for the game title.
var startButton = "Click Here to Start";	// A variable for the start button.
var count;
var counter;
var order=-1;	// The starting order of the Array
var timerRunning = false;	// This variable checks to see if the timer is running
var rightAnswers = 0;	// This variable increases by one for each correct answer 
var wrongAnswers = 0;	// This variable increases by one for each wrong answer
var missedAnswers = 0;	// This variable increases by one for each missed answer due to timeout.
var chosenAnswer;	// A varaible that represents the each answer chosen by the user.
  
  $("#title").text(title);	// Displays the game title.
  $("#start").text(startButton);	// Displays the start button
  
function nextQuestion() {	// A function that pushes through the array and pushes the next question and possible answers to the page.
  		
	if (order < (questionArray.length - 1)) {	// An if statement that checks the order number against the number of objects in the array.

	order++;	// This indicates to add one to the order variable.
	count = 45;	// This sets the counter to 45 seconds.

		$("#question").text(questionArray[order].question);	// This sets the current question value to the upper right corner of the screen.
    	$("#answerA").text(questionArray[order].answerA);	// These set the current answer values to the center of the screen in order.
      	$("#answerB").text(questionArray[order].answerB);
      	$("#answerC").text(questionArray[order].answerC);
      	$("#answerD").text(questionArray[order].answerD);
  	} 
  
	else {	// An else statement that triggers the endGame function if the order number is not smaller then the number of things in the array.
  		endGame();
  	}
  };
  
	function timer() {	// A function that works the timer.
	count=count-1;	// Makes the count decrement by 1.
	document.getElementById("timer").innerHTML = count;	// Displays the number of remaining seconds.

	if (!timerRunning) {	// Checks to see if the timer is running.
		counter=setInterval(timer, 1000);	// Sets the length of time between decrements to 1 per second.
		timerRunning = true;	// Sets the timerRunning variable to true.
  	}
  

	if (count <= 0) {	// Checks to see if the count reaches zero.
		missedAnswers++;	// increments the missedAnswers variable by 1.
		nextQuestion();	// Calls the nextQuestion function
  	}
  };

function answerChecker() {	// A function that checks the chosen answer against the correct answer.
	var correctAnswers = questionArray[order].correctAnswer;	// A variable that sets itself the the current object and answer.
	
	if (chosenAnswer === correctAnswers) {	// An if statement that checks to see if the user chosen answers string is equal to the correnct answers string.
		rightAnswers++;	// Increments the rightAnswer variable by 1.

	} else if (chosenAnswer !== correctAnswers) {	// an if statment that checks if the user chosen answers string is not equal to the correct answers string.
		wrongAnswers++;	// Increments the wrongAnswer variable by 1.
  	}
  };
  
function endGame() {	// A function that sets the end game peramiters.

	clearInterval(counter);	// This stops the counter from decrimenting.

	$("#timer").remove();	// This removes the timer.
	$("#question").remove();	// This removes the question.
	$("#title").text(title);	// This displays the title.
	$("#answerA").text("You got " + rightAnswers + " answers correct"); // This displays how many correct answers the user chose.
   	$("#answerB").text("You got " + wrongAnswers + " answers wrong");	// This displays how many incorrect answers the user chose.
    $("#answerC").text("You ran out of time " + missedAnswers + " times");	// This displays how many answers wher missses.
    $("#answerD").text("Great Job Space Traveler!")	// This displays the string praising the user.
  
  };
  
  $(".start").on("click", function() {	// A function that responds to clicking the start button.
 	$("#title").remove();	//Removes the title.
 	$("#start").remove();	//Removes the start button.
 	nextQuestion();		// This calls the next queston function.
 	timer();	// This calls the timer function.
  });
  

 $(".answerA").on("click", function() {	// This function responds to clicking the first answer.
 	chosenAnswer = questionArray[order].answerA;	// Thos makes the answer clicked into the chosen answer.
 	answerChecker();	// This calls the answer checker function.
 	nextQuestion();		// This calls the next question function.
 	timer();	// This calls the timer function.
  
  });


 $(".answerB").on("click", function() {	// This function responds to clicking the first answer.
 	chosenAnswer = questionArray[order].answerB;	// Thos makes the answer clicked into the chosen answer.
 	answerChecker();	// This calls the answer checker function.
 	nextQuestion();		// This calls the next question function.
 	timer();	// This calls the timer function.
  
  });

  $(".answerC").on("click", function() {	// This function responds to clicking the first answer.
 	chosenAnswer = questionArray[order].answerC;	// Thos makes the answer clicked into the chosen answer.
 	answerChecker();	// This calls the answer checker function.
 	nextQuestion();		// This calls the next question function.
 	timer();	// This calls the timer function.
  
  });

   $(".answerD").on("click", function() {	// This function responds to clicking the first answer.
 	chosenAnswer = questionArray[order].answerD;	// Thos makes the answer clicked into the chosen answer.
 	answerChecker();	// This calls the answer checker function.
 	nextQuestion();		// This calls the next question function.
 	timer();	// This calls the timer function.
  
  });






 

  