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
  // set question
  setCurrentQuestion();
  // print the question in the label
  $('label').text(currentQuestion.question);
  // print the responses in the buttons
  for (var i = 0; i < 4; i++) {
    $('#response' + i).text(currentQuestion.answers[i]);
  }
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
    printResults();
    questionCounter += 1;
  });
}

function printResults() {
  // hide question area
  $('.question').addClass('hidden');
  // show result area
  $('.result').removeClass('hidden');
  // print question
  $('strong').text(currentQuestion.question);
  // give feedback on response
  if (responseIsCorrect === true) {
    $('h3').addClass('text-success').text('Correct!');
  } else {
    $('h3').addClass('text-danger').text('Nope!');
  }
  // print user response
  $('.your-response').append(yourResponse);
  // print correct response
  $('.correct-answer').append(currentQuestion.correctAnswer);
}
