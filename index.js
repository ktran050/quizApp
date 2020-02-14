const STORE = [
  {prompt: "Which attraction is not part of Adventureland?",
  answers: ["Indiana Jones Adventure", "Clayton’s Clay Shoot", "Jungle Cruise", "Tarzan's Adventure", "Enchanted Tiki Room"],
  imgSrc: "https://www.ocregister.com/wp-content/uploads/2019/05/AdventurelandSign2-1.jpg?w=620",
  corrAnswer: "yes"},
];

let currentQuestion = 0;
let currentScore = 0; 

function renderForm(){
  console.log("form rendered");
  renderQuestion();
}

function prepareAnswers(){
  let options = "";
  STORE[currentQuestion].answers.forEach(
    function (item){
      options += `
      <input type="radio"
      name="q1-ans" id=${item}
      value=${item}>
      <label for="indiana">${item}</label><br />`;
    }
  );
  return options;
}

function renderQuestion(){
  const answersList = prepareAnswers();
  const questionHTML = `
  <fieldset required>
    <legend>Question ${currentQuestion + 1} / 5:<br />
    ${STORE[currentQuestion].prompt} </legend>
    <img
    src="${STORE[currentQuestion].imgSrc}"
    class="placeholder"
    alt="placeholder image"
    /><br />

    ${answersList}

  </fieldset>`;
  $('.question').html(questionHTML);
  console.log("question rendered");
}

function renderResult(){
  
  console.log("result rendered");
}

function renderFinalResult(){
  console.log("final result rendered");
}

function handleAnswerSubmit(){
  $('#js-quiz-form').submit(
    function(event){
      event.preventDefault();
      console.log("answer submitted");
      renderResult();
    }
  );
}

function handleQuiz(){
  renderForm();
  handleAnswerSubmit();
}

handleQuiz();


// Wasted time forgetting to link jquery

// TODO: value of each item in prepareAnswers is just the first string