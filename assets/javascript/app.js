
// start game by clicking Start Game button
$("#start").on("click", function() {
	game.start();
})

$(document).on('click', '#end', function(){
	game.done();
})

// Arrays for questions, answers and correct answers

var questions = [{
	question:"What are the names of Mars' moons?",
	answers:["Io and Enceladus ", "Phobos and Deimos ", "Pluto and Luna ", "Voyager and Explorer"],
	correctAnswer:"Phobos and Deimos"

}, {
	question:"How many planets are there?",
	answers:["8  ", "9  ", "10  ", "11  "],
	correctAnswer:"10"
}, {
	question:"What year did humanity land on the moon?",
	answers:["Never ", "1974 ", "1968 ", "1969 "],
	correctAnswer:"1969 "
}, {
	question:"What was the name of the moon landing missions?",
	answers:["Gemini ", "Millenium Falcon ", "Apollo ", "Deep Space Nine"],
	correctAnswer:"Apollo"
},{
	question:"How long does it take sunlight to reach Earth?",
	answers:["Five minutes ", "Eight and a half minutes ", "Twenty minutes ", "Nine and a half minutes"],
	correctAnswer:"Nine and a half minutes"
}, {
	question:"What is the name of our nearest neighbor solr system?",
	answers:["Alpha Centauri ", "Jupiter ", "Alpha Proxima ", "Beatlguese"],
	correctAnswer:"Alpha Proxima"
}, {
	question:"Which came first, the chicken or the egg?",
	answers:["Egg ", "Chicken ", "Platypus ", "Watson"],
	correctAnswer:"Chicken"
}, {
	question:"To escape Earth's gravity well, a spacecraft must be moving at least how fast?",
	answers:["20,000 mph ", "25,000 mph ", "13,000 mph ", "18,000 mph"],
	correctAnswer:"18,000 mph"


}];

// Set initial parameters and start counter
var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countDown: function() {
		game.counter --;
		$("#counter").html(game.counter);
		if(game.counter <=0) {
			console.log("Time is up");
			game.done();
		}
	},
	start: function() {
		timer = setInterval(game.countDown, 990);
		$("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'> 120</span> Seconds</h2>");
		$("#start").remove();
			for(var i = 0; i < questions.length; i++) {
				$("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
				for (var j = 0; j < questions[i].answers.length; j++) {
					$("#subwrapper").append("<input type='radio' name='question-" + i +"' value='" + questions[i].answers[j] +"'>" + questions[i].answers[j])
				}
			}
			$("#subwrapper").append('<br><button id="end">DONE</button>');
	},
	// Check if answer is correct or incorrect
	done: function() {
		$.each($('input[name="question-0"] :checked'), function() {			
			if($(this).val() == questions[0].correctAnswer) {
				game.correct++;					
			} 
			else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 1"]:checked'), function() {
			if($(this).val() == questions[1].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 2"]:checked'), function() {
			if($(this).val() == questions[2].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 3"]:checked'), function() {
			if($(this).val() == questions[3].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 4"]:checked'), function() {
			if($(this).val() == questions[4].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 5"]:checked'), function() {
			if($(this).val() == questions[5].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 6"]:checked'), function() {
			if($(this).val() == questions[6].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question - 7"]:checked'), function() {
			if($(this).val() == questions[7].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	// Display result of games (correct, incorrect and ununswered)

		result: function() {
			clearInterval(timer);
			$("#subwrapper h2").remove();

			$("#subwrapper").html("<h2>All Done</h2>");
			$("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
			$("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
			$("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
		}

	}

