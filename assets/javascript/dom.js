// render the base dom
function renderDom() {
  // jumbotron for game play -- added to body below
  var jumbotron = $('<div>').addClass('jumbotron text-center game')
                            // game heading
                            .append($('<h1>').text('So much Trivia!'))
                            // time display
                            .append($('<p>').attr('id', 'timer'));
  // set up body
  $('body').html(
    // add container to put everything in
    $('<div>').addClass('container')
              // first a row to push second row down
              .append($('<div>').addClass('row push'))
              // second row for all the things
              .append($('<div>').addClass('row').html(jumbotron))
  );

  // render question area
  renderQuestionArea();
  // render results area
  renderResultsArea();
}

function renderQuestionArea() {
  // question area
  var questionArea =
    $('<div>').addClass('form-group well well-lg question hidden');
  $('.jumbotron').append(questionArea);

  // question
  questionArea.append($('<label>').attr('for', 'buttonGroup'))
              .append($('<br><br>'));

  // button area for buttons
  var buttonArea = $('<div>').addClass('form-group-vertical')
                             .attr('id', 'buttonGroup');
  questionArea.append(buttonArea);

  // button for responses
  for (var i = 0; i < 4; i++) {
    buttonArea.append($('<button>').addClass('btn btn-primary response')
                                   .attr('id', 'response' + i))
              .append($('<br><br>'));
  }
}

function renderResultsArea() {
  // result area
  $('.jumbotron').append(
   $('<div>').addClass('well well-lg result hidden')
    // add question
    .append($('<strong>'))
    // result - to tell the player if they were correct or not
    .append($('<div>').addClass('result-message'))
    // tell the player what their answer was
    .append($('<p>').addClass('your-response'))
    // and what the correct answer was
    .append($('<p>').addClass('correct-answer'))
  );
}
