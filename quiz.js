const STORE = [
  {
    question: 'Which attraction is not part of Adventureland?',
    answers: [
      'Indiana Jones Adventure',
      "Clayton's Clay Shoot",
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
  }
];

let currentQuestionIndex = 0;
let currentScore = 0;
let onQuestion = true;

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
      value="${item}">
      <label for="indiana">${item}</label><br />`;
  });
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
    <legend>Question ${currentQuestionIndex + 1} / 5:<br />
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
  $('.question').html(questionHTML);
  console.log('question rendered');
}

function renderResult() {
  console.log('result rendered');
}

function renderFinalResult() {
  console.log('final result rendered');
}

function handleAnswerSubmit() {
  $('#js-quiz-form')
    .find('.check-button')
    .on('click', function(event) {
      if (onQuestion) {
        event.preventDefault();
        disableAnswers();
        let currentQuestion = STORE[currentQuestionIndex];
        let answerIndex = currentQuestion.answerIndex;
        // let feedback = '';
        let buttonText = 'Next';

        $('.check-button').addClass('next-button');
        $('.check-button').removeClass('check-button');
        $('.next-button').html(buttonText);

        if ($(`input[name="${currentQuestionIndex}-ans"]:checked`).val() === currentQuestion.answers[answerIndex]) {
          //  if form answer !=  answer
          console.log('right');
          // feedback = `
          //       <div class="correct-feedback">
          //         Correct answer!
          //       </div>
          //     `;
          alert('Correct answer');
          ++currentScore;
          console.log(`currentScore: ${currentScore}`);
          renderCounter();
          // display feedback correct
        } else {
          console.log('wrong');
          feedback = `
      <div class="incorrect-feedback">
        Incorrect answer!
      </div>
    `;
          // display feedback incorrect
          alert('Incorrect answer');
        }
        // $('.question').append(feedback);
      }
      console.log(onQuestion);
    });
}

function handleNextQuestion() {
  $('#js-quiz-form')
    .find('button')
    .on('click', function(event) {
      if (!onQuestion) {
        event.preventDefault();
        console.log('next!');
        ++currentQuestionIndex;
        renderQuestion();
      }
      onQuestion = !onQuestion; // this shouldn't work
      console.log(onQuestion);
    });
}

function disableAnswers() {
  $(`.js-radio`).prop('disabled', true);
}

function handleQuiz() {
  console.log("handling quiz");
  renderForm();
  renderCounter();
  handleAnswerSubmit();
  handleNextQuestion();
}

$(handleQuiz());

// Wasted time forgetting to link jquery
// wasted time forgettting the . in '.someClass'

// TODO: value of each item in prepareAnswers is just the first string ~~~~~~~~~~~~~~~~~
// check submitted answer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// display feedback based on the answer ~~~~~~~~~~~~~~~~~~~~~~~~
// increment based on the answer ~~~~~~~~~~~~~~~~~~~~~~
// lock submits
// load next question
// recognize we are finished with the quiz and display results screen
// ask about the listening for class changes using jquery?

// mentor notes:
// cut down on abbreviations
// cut redundant data ex. storing the correct answer again in the questions object rather than just the index that the answer is already in

// use form submit rather than click for accessability
// make sure to use document ready
// maybe make the quiz start a form for accessability