// game play
// wait for document to load
$(document).ready(function() {
  // render dom
  renderDom();
  // play the damn game
  playGame();
});

// variables
var questionCounter = 0;
var currentQuestion;
var correctAnswers = 0;
var yourResponse = '';
var responseIsCorrect = false;
var timeRemaining;

function playGame() {
  // print question text
  printQuestion();
  // check response
  checkCorrectResponse();
  // listen for response
  showResultsUponResponse();
}

function setCurrentQuestion() {
  currentQuestion = objects[questionCounter];
}

function printQuestion() {
  // show question area
  $('.question').removeClass('hidden');
  // hide results area
  if (!$('.result').hasClass('hidden')) {
    $('.result').addClass('hidden');
  }
  // print starting timer
  $('#timer').text('Time remaining: 30');
  // set timer to 30 seconds
  timeRemaining = 30;
  // start timer
  startTimer();
  // set question
  setCurrentQuestion();
  // print the question in the label
  $('label').text(currentQuestion.question);
  // print the responses in the buttons
  for (var i = 0; i < 4; i++) {
    $('#response' + i).text(currentQuestion.answers[i]);
  }
  // increment question counter
  questionCounter += 1;
}

function checkCorrectResponse() {
  $('.response').on('click', function() {
    yourResponse = $(this).text();
    if (yourResponse === currentQuestion.correctAnswer) {
      correctAnswers += 1;
      responseIsCorrect = true;
    } else {
      responseIsCorrect = false;
    }
  });
}

function showResultsUponResponse() {
  $('.response').on('click', function() {
    // print results
    printResults();
  });
}

function printResults() {
  // stop timer
  stopTimer();
  // hide question area
  $('.question').addClass('hidden');
  // show result area
  $('.result').removeClass('hidden');
  // print question
  $('strong').text(currentQuestion.question);
  // give feedback on response
  if (responseIsCorrect === true) {
    $('.result-message').html('<h3 class="text-success">Correct!</h3>');
  } else if (timeRemaining <= 0) {
    $('.result-message').html('<h3 class="text-warning">Times up!</h3>');
  } else {
    $('.result-message').html('<h3 class="text-danger">Nope!</h3>');
  }
  // print user response
  $('.your-response').html('Your response was: ' + yourResponse);
  // print correct response
  $('.correct-answer').html(
    'The correct response is: ' + currentQuestion.correctAnswer
  );
}

function startTimer() {
  // start the timer
  timer = setInterval(decrement, 1000);
}

function decrement() {
  // subtract one from the time remaining
  timeRemaining--;
  // print the time remaining to the screen
  $('#timer').html('Time remaining: ' + timeRemaining);
  if (timeRemaining <= 0) {
    printResults();
  }
}

function stopTimer() {
  clearInterval(timer);
  // after waiting for 5 seconds print new question
  waitThenPrintNewQuestion();
}

function waitThenPrintNewQuestion() {
  setTimeout(printQuestion, 5 * 1000);
}
