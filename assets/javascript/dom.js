// render the base dom
function renderDom() {
  // clear body
  $('body').html('');

  // add container to put everything in
  var container = $('<div>').addClass('container');
  $('body').append(container);

  // need a couple of rows
  // first to push second down
  container.append($('<div>').addClass('row push'));

  // second row for all the things
  var gameRow = $('<div>').addClass('row');
  container.append(gameRow);

  // add jumbotron for game play
  var jumbotron = $('<div>').addClass('jumbotron text-center game');
  gameRow.html(jumbotron);

  // game heading
  jumbotron.append($('<h1>').text('So much Trivia!'));

  // time display
  jumbotron.append($('<p>').text('Time remaining: ').attr('id', 'timer'));
}

function renderQuestionArea() {
  // question area
  var questionArea = $('<div>').addClass('form-group well well-lg questions');
  $('.jumbotron').append(questionArea);

  // question
  questionArea.append($('<label>').attr('for', 'buttonGroup'));
  questionArea.append($('<br><br>'));

  // buttons for responses
  var buttonArea = $('<div>').addClass('form-group-vertical')
                             .attr('id', 'buttonGroup');
  questionArea.append(buttonArea);
  for (var i = 0; i < 4; i++) {
    buttonArea.append(
      $('<button>').addClass('btn btn-primary response')
                   .attr('id', 'response' + i)
    );
    buttonArea.append($('<br><br>'));
  }
}
