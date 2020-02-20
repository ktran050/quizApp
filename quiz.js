const STORE = [
  {
    question: 'Which attraction is not part of Adventureland?',
    answers: [
      'Indiana Jones Adventure',
      "Peyton's Planet Pusher",
      'Jungle Cruise',
      "Tarzan's Adventure",
      'Enchanted Tiki Room'
    ],
    img: 'https://www.ocregister.com/wp-content/uploads/2019/05/AdventurelandSign2-1.jpg?w=620',
    answerIndex: 1
  },
  {
    question: 'When was Disneyland first built?',
    answers: ['2015', '1920', '1963', '1955', '1986'],
    img: 'https://user-images.githubusercontent.com/9054819/73940503-7a9b5e00-48e3-11ea-8538-1646ac67976e.jpg',
    answerIndex: 3
  },
  {
    question: `What is Disneyland\’s latest attraction?`,
    answers: [
      'Guardians of the Galaxy - Mission: BREAKOUT!',
      'Hyperspace Mountain',
      `California Screamin\'`,
      'Pirates of the Carribean',
      'Star Wars: Rise of the Resistance'
    ],
    img: 'https://wdwnt.com/wp-content/uploads/2019/01/unnamed-24-990x556.jpg',
    answerIndex: 4
  },
  {
    question: `Which attraction is a part of FantasyLand?`,
    answers: [
      'Matterhorn',
      'Bambi’s Playground',
      'Peter Pan’s Pirate Plunder',
      'Snow White and the Seven Mice',
      'Haunted Mansion'
    ],
    img: 'https://wdwnt.com/wp-content/uploads/2019/01/unnamed-24-990x556.jpg',
    answerIndex: 2
  },
  {
    question: `Which attraction is no longer at Disneyland, but instead at Disneyworld?`,
    answers: [
      'Tower of Terror',
      'Indiana Jones',
      'Mickey’s Magic Mile',
      'Star Wars: Jar Jar Pod Racing',
      'Marvel’s Avengers Assemble'
    ],
    img: 'https://i.ytimg.com/vi/PVNue9Mle4A/maxresdefault.jpg',
    answerIndex: 0
  }
];

let currentQuestionIndex = 0;
let currentScore = 0;

function renderForm() {
  console.log('form rendered');
  renderQuestion();
}

function prepareAnswers() {
  let options = '';
  STORE[currentQuestionIndex].answers.forEach(function(item) {
    options += `
      <input type="radio"
      class = "js-radio"
      name="${currentQuestionIndex}-ans" id="${item}"
      value="${item}" required>
      <label for="${item}" id="${item}-label">${item}</label><br />`;
  });
  return options;
}

function prepareAnswers(e) {
  let options = '';
  STORE[currentQuestionIndex].answers.forEach(function(item) {
    if(item != STORE[currentQuestionIndex].answers[e] || (e != STORE[currentQuestionIndex].answerIndex)){
    options += `
      <input type="radio"
      class = "js-radio"
      name="${currentQuestionIndex}-ans" id="${item}"
      value="${item}" required>
      <label for="${item}" id="${item}-label">${item}</label><br />`;
  }
  else{
    options += `
    <input type="radio"
    class = "js-radio js-correct-answer"
    name="${currentQuestionIndex}-ans" id="${item}"
    value="${item}" required>
    <label for="${item}" id="${item}-label" class="js-correct-answer">${item}</label><br />`;
  }
}
  );
  return options;
}

function renderCounter() {
  let counterHtml = `score: ${currentScore}`;
  $('.counter').html(counterHtml);
  console.log('counter rendered');
}

function renderQuestion() {
  const answersList = prepareAnswers();
  const questionHTML = `
  <fieldset required>
    <legend>Question ${currentQuestionIndex + 1} / ${STORE.length}:<br />
    ${STORE[currentQuestionIndex].question} </legend>
    <img
    src="${STORE[currentQuestionIndex].img}"
    class="placeholder"
    alt="placeholder image"
    /><br />

    ${answersList}

  </fieldset>
  <button type="submit" class="check-button">Check Answer</button>
  `;
  $('.content').html(questionHTML);
  console.log('question rendered');
}

function renderQuestion(e) {
  const answersList = prepareAnswers(e);
  const questionHTML = `
  <fieldset required>
    <legend>Question ${currentQuestionIndex + 1} / ${STORE.length}:<br />
    ${STORE[currentQuestionIndex].question} </legend>
    <img
    src="${STORE[currentQuestionIndex].img}"
    class="placeholder"
    alt="placeholder image"
    /><br />

    ${answersList}

  </fieldset>
  <button type="submit" class="check-button">Check Answer</button>
  `;
  $('.content').html(questionHTML);
  console.log('question rendered');
}

function renderResult() {
  console.log('result rendered');
}

function renderFinalResult() {
  console.log('final result rendered');
}

function handleAnswerSubmit() {
  if ($('button').hasClass('check-button')) {
    let correctAnswerString = STORE[currentQuestionIndex].answers[STORE[currentQuestionIndex].answerIndex]; // Maybe make this a pointer
    let feedback = '';
    let buttonText = 'Next';
    let answerBoxHtml = '';

    if ($(`input[name="${currentQuestionIndex}-ans"]:checked`).val() === correctAnswerString) {
      console.log('answer correct');
      feedback = `
            <div class="correct-feedback">
              Correct answer!
            </div>
          `;
      ++currentScore;
      renderCounter();
      // display feedback correct
    } else {
      console.log('answer wrong');
      feedback = `
        <div class="incorrect-feedback">
          Wrong answer! The correct answer was: ${correctAnswerString}
        </div>
      `;
      // display feedback incorrect
    }
    renderQuestion(STORE[currentQuestionIndex].answerIndex);
    disableAnswers();
    $('.check-button').addClass('next-button');
    $('.check-button').removeClass('check-button');
    $('.next-button').html(buttonText);
    $('.content').append(feedback);
  }
}

function handleNextQuestion() {
  if ($('button').hasClass('next-button')) {
    console.log('next question handled');
    ++currentQuestionIndex;
    if (currentQuestionIndex != STORE.length) {
      renderQuestion();
      console.log('handling next');
    } else {
      renderResultsPage();
    }
  }
}

function disableAnswers() {
  $(`.js-radio`).prop('disabled', true);
}

function renderResultsPage() {
  let resultsHtml = `<h1>Congratulations! You scored: ${currentScore} out of ${STORE.length}</h1>
  <button class="try-button">Try again?</button>`; // set html

  $('.counter').remove();
  $('.content').html(resultsHtml); // apply html to the form
}

function handleReplay() {
  currentQuestionIndex = 0;
  currentScore = 0;
  renderQuestion();
}

function handleSubmit() {
  $('#js-quiz-form').submit(function(event) {
    event.preventDefault();
    if ($('button').hasClass('check-button')) {
      handleAnswerSubmit();
    } else if ($('button').hasClass('next-button')) {
      handleNextQuestion();
    } else if ($('button').hasClass('try-button')) {
      handleReplay();
    }
  });
}

function handleQuiz() {
  console.log('handling quiz');
  renderForm();
  renderCounter();
  handleSubmit();
}

$(handleQuiz());

// Wasted time forgetting to link jquery
// wasted time forgettting the . in '.someClass'
// DO NOT LISTEN for multiples for the same event
// For ids with spaces in them you can references them using element[id=""]

// TODO: value of each item in prepareAnswers is just the first string ~~~~~~~~~~~~~~~~~
// check submitted answer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// display feedback based on the answer ~~~~~~~~~~~~~~~~~~~~~~~~
// increment based on the answer ~~~~~~~~~~~~~~~~~~~~~~
// lock submits ~~~~~~~~~~~~~~~~~~~~
// load next question ~~~~~~~~~~~~~~~~~~~~~~~~~
// recognize we are finished with the quiz and display results screen ~~~~~~~~~~~~~~~~~~~~~~~`
// ask about the listening for class changes using jquery?

// Require the input ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Add all questions ~~~~~~~~~~~~~~~~~~~~~~~~~~
// Finalize images for the questions
// Maybe add answer images 
// Highlight correct answers ~~~~~~~~~~~~~~~~~~~~~~
// Highlight incorrectly chosen answers
// Recognize the questions array is at its end ~~~~~~~~~~~~`
// Display a results screen ~~~~~~~~~~~~~~~~~~~``
// Add a replay button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Maybe add results page image

// mentor notes:
// cut down on abbreviations
// cut redundant data ex. storing the correct answer again in the questions object rather than just the index that the answer is already in

// use form submit rather than click for accessability
// make sure to use document ready
// maybe make the quiz start a form for accessability
