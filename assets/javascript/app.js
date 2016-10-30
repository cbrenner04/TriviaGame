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
var responseIsCorrect = false;

function playGame() {
  // render question area
  renderQuestionArea();
  // print question text
  printQuestion();
  // check response
  checkCorrectResponse();
  // listen for response and print new question
  updateQuestionUponResponse();
}

function setCurrentQuestion() {
  currentQuestion = objects[questionCounter];
}

function printQuestion() {
  setCurrentQuestion();
  $('label').text(currentQuestion.question);
  for (var i = 0; i < 4; i++) {
    $('#response' + i).text(currentQuestion.answers[i]);
  }
}

function checkCorrectResponse() {
  $('.response').on('click', function() {
    if ($(this).text() === currentQuestion.correctAnswer) {
      correctAnswers += 1;
      responseIsCorrect = true;
    } else {
      responseIsCorrect = false;
    }
  });
}

function updateQuestionUponResponse() {
  $('.response').on('click', function() {
    questionCounter += 1;
    printQuestion();
  });
}
