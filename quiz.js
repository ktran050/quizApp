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
    answers: ['2015', '1920', '1963', '1955'],
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
    img:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAflBMVEX///8AAAD7+/ve3t7s7Ozo6OiTk5P09PT4+Pi/v7/29vbb29sODg6hoaFUVFTT09Oampqzs7PLy8tnZ2dbW1t0dHSQkJArKyuHh4fj4+MbGxtoaGi6uro8PDxiYmJ5eXmqqqohISEyMjJEREQdHR13d3eAgIBBQUFNTU0uLi4ISacTAAAHDElEQVR4nO2daXvaMAyAE84EAgEKpZzlaCn9/39wpQcDLNuSnJDK9ftxC3omzY51WYmiQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQYNNu1LvdeqNdtNykMfuQ2yxc7i+gPXrsT+NvpuPWqCAlk3yw3mXfcrfHp7RRjNxfQXs4jhXGQ2fT1dJFpsjd9zwx3eygGu2LQ9NFbrs118hd5EX926ujMdFZ7cQre20kjya5426ROlTAwKTdiR5P7lLdoNccasUqcleaK5vZ4viNsVlra7vcTO5mXdq1O5FS5dZxcgdl6HQHrHuUqWCKlTspR6+SecKqF8dPFLlDvNxxWbqVCMFscfyIl4vc/F+sy9OvJHoU9eJ4g5U7osl9Lk/DUiCqF8cjnNwmVS7Tz6mINlW9OMNFXXuyYFHuCBCP2lhg5Lboct/L1rVA0J7CJQg3bsaR2ypf36LQBdxGpna5jGX8gZj8CPEs/WFjk5vz5Ipxf1nLLY63Nrl9nlwpC47kmV5iecOx3m4nCF51lXCXRdw3yyVFIFfcR29HGmz1LBvKlnLTg3Sqq2XDt9vQJLfLl3u4l+4uPPD1M/q+6LSUigjfd8vXb26Si8jxahFwopIjb6x+TO/mEwEvOHIm5BJDEE5PFVwgICtCSMeqGA4Gh2OBmFCuBofXt3FdOK1jVLKlWoz1YBuG3AUrx/KDgEID36uPjRERO3o7YYlEfgNFrbdap9NJLuQ62U3AenN9v7XzYWvSX01fsiybb3f79aE3atYc328PVVvFjkOYFceT5x345/P+wEmugLKW0/u7LAS0PCCbN+4LuQXl/iT8dE95zKq2CgJ22rI8sqptgsHpQC0HAeGCYyBZDsZ86K8BdiWobPfjD45T+5N2OlWbBIXrRp2PB2nzHCrUGukTvSvkChHb1Kkw8xERbWZAR3Njg+gU1iKltUZ7YcFCNkn1Oypnn9P7O6ruBG/BPYwsrfM588UpIEn+DaPdCrWZOHIl5ELOMGoodYxcTmeNgFrWGYZ+KLtFbfL5sClV0aKh7yic3aLojSZWQObtCnKVGGu3NilvsBJ3TYvqq2LtRorj5pJebl8kxA2FthvhHZBJyB/dktAcVbzd0A1dU6d7wdVhvLLrYDdk//BR7KACSi3lxm61D3RiE5RAAb0NWmb40+HCbvlg8emmTRdL2HaIfvypnOgKBN1m82O30fXuBjtG7OtYQAHLRg/3Gv+yW+/l9s9XgEibK/IoI1FpI8U4wSe7gS98wHDGhMtRRlYcRZIebIHlTDujYanK0wl5n7hPc/ltJE2jQ5dq/xa4tAw+N+z6sT1v4XaaAvla8DlBF/9IcOs1QPMa+FyWqA/6ALchXHVgO/CDHh0IF7Ab2NTgXOOHHCvQqnxI0eoFQO+azpkWGsebYZoNugat+y8QcE2BDHebQv6Y7lkfNyqzzxzaevo8kndObxTxGhWgrFxN/7jwJAgALmeGMZvpgPHP9WXNYgDNZspMSarN42C00c9Bt8L4H2AdCSEO+rGQgWazDHXw7mCg31YGS5+NrflH0ueoKpCPU7D0aTObfwcqNagH27oaVinehfZEs4H6I67u+xZpEd038B4axpXxoI51Bc1u4EgzVIDrm+NLsxv0csPd2/3TdoPuGyDr177tU9K5ADhh2Futm3vrVTYEPwQoNKOTd975IQS/V31H4e8Ce+f3EuIsRffaFv1bQhedDAhxvVJ1X+B/611cj88jKc4boTLhXx4Jn7dUyvOEBmt58+9tGIoCFt0pAyK8c98Iq+b15oeUthLvjlPC3KTbmJ6S8fSwkQv9dr+1G+FekYCxW3S4dsObLd5UoFbpYPtqHOzmZV8NdqO+ft75OEOwm5fbNIqUFvuiARqofaDsAUCZuLumOJwm8CLwLdd7hjtXBIl3Mf0PToNsrEi+/2fBaUatDW+XWxR1sL7/alPvdJrpM8FsvlWcr0BWpc5VggS9QhFfkZLMEWOCS7cf6y1LmbnFBPFNopsvBeIMJ+JLKC7Y8+W3KweTgPJ8l56wfX5GHcyDsJt3ZSwAy8RKNWVrX3DeVZshLN6v+gNrScdjj/cSox2AJgdbu6CQsZ/umJpkgCtWFrv5d2dBi6GX7U192mw3T5OVMIYVpz5snBbyh1bbCb03q7oUpnynmG/CFkV9q7GEejga8utCvmxaJB3dvJDbopQhwvC0oGBBMzfwZlyI/lTYSZwmWAQ53Lx61VijN9sf8XZB4PTa6v9C0nosO+9usJGowwm51/yUTGoOtV3BXmd3UaSaae3ZXJ9UP3hcS8CzJN6xPHjZBsJhhBhY+c22JW+UcYnMWu8Yq60FfEDs3nQfzfs1e1iG1xpMc6kZ5zhf93JPu2aKIqmnvaf1fvp5mr7s+pPWMA+vtEAgEAgEAoFAIBDwn3/FSlpIAyse3wAAAABJRU5ErkJggg==',
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
    answerIndex: 0
  },
  {
    question: `Which attraction is no longer at Disneyland, but instead at Disneyworld?`,
    answers: [
      'Tower of Terror',
      'Indiana Jones',
      'Mickey’s Magic Mile',
      'Star Wars: Jar Jar Pod Racing',
      'Marvel’s Avengers Assemble',
      'Autotopia',
      'Mad Tea Party',
      "Donald's boat",
      'Sailing Ship Columbia',
      'Disney Railroad'
    ],
    img: 'https://i.ytimg.com/vi/PVNue9Mle4A/maxresdefault.jpg',
    answerIndex: 0
  }
];

let currentQuestionIndex = 0;
let currentScore = 0;

function renderForm() {
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
  options = `<div class="answer-container"> ${options} </div>`;
  return options;
}

function prepareAnswers(e) {
  let options = '';
  STORE[currentQuestionIndex].answers.forEach(function(item) {
    if (item != STORE[currentQuestionIndex].answers[e] || e != STORE[currentQuestionIndex].answerIndex) {
      options += `
      <input type="radio"
      class = "js-radio"
      name="${currentQuestionIndex}-ans" id="${item}"
      value="${item}" required>
      <label for="${item}" id="${item}-label">${item}</label><br />`;
    } else {
      options += `
    <input type="radio"
    class = "js-radio js-correct-answer"
    name="${currentQuestionIndex}-ans" id="${item}"
    value="${item}" required>
    <label for="${item}" id="${item}-label" class="js-correct-answer">${item}</label><br />`;
    }
  });
  options = `<div class="answer-container"> ${options} </div>`;
  return options;
}

function renderCounter() {
  let counterHtml = `score: ${currentScore}`;
  $('.counter').html(counterHtml);
}

function renderQuestion() {
  const answersList = prepareAnswers();
  const questionHTML = `
  <fieldset required>
    <legend>Question ${currentQuestionIndex + 1} / ${STORE.length}:<br />
    ${STORE[currentQuestionIndex].question} </legend>
    <img
    src="${STORE[currentQuestionIndex].img}"
    class="img"
    alt="placeholder image"
    /><br />

    ${answersList}

  </fieldset>
  <button type="submit" class="check-button">Check Answer</button>
  `;
  $('.content').html(questionHTML);
}

function renderQuestion(e) {
  const answersList = prepareAnswers(e);
  const questionHTML = `
  <fieldset required>
    <legend>Question ${currentQuestionIndex + 1} / ${STORE.length}:
    ${STORE[currentQuestionIndex].question} </legend>
    <div class="img-answer-container">
      <img
      src="${STORE[currentQuestionIndex].img}"
      class="img"
      alt="placeholder image"
      /><br />

      ${answersList}
    </div>

  </fieldset>
  <div class="js-feedback"></div>

  <button type="submit" class="check-button">Check Answer</button>
  `;
  $('.content').html(questionHTML);
}

function handleAnswerSubmit() {
  if ($('button').hasClass('check-button')) {
    // check-button means we are on a question display screen
    let correctAnswerString = STORE[currentQuestionIndex].answers[STORE[currentQuestionIndex].answerIndex]; // Maybe make this a pointer
    let chosenAnswer = $(`input[name="${currentQuestionIndex}-ans"]:checked`).val();
    let feedback = '';
    let buttonText = 'Next';

    if (chosenAnswer === correctAnswerString) {
      // if the answer is correct
      feedback = `
      <div class="feedback correct">
        Correct answer!
      </div>`;
      ++currentScore;
      renderCounter();
    } else {
      feedback = `
      <div class="feedback incorrect">
        Incorrect! You chose ${chosenAnswer}.  The correct answer was: ${correctAnswerString}
      </div>`;
    }
    renderQuestion(STORE[currentQuestionIndex].answerIndex);
    disableAnswers();
    $('.check-button').addClass('next-button');
    $('.check-button').removeClass('check-button');
    $('.next-button').html(buttonText);
    $('.js-feedback').html(feedback);
  }
}

function handleNextQuestion() {
  if ($('button').hasClass('next-button')) {
    // next-button would mean we are on the results screen
    ++currentQuestionIndex;
    if (currentQuestionIndex != STORE.length) {
      renderQuestion();
    } else {
      // only reached at the end of the quiz
      renderResultsPage();
    }
  }
}

function disableAnswers() {
  $(`.js-radio`).prop('disabled', true);
}

function renderResultsPage() {
  let resultsHtml = `
  <img
  src="http://www.pngmart.com/files/6/Stitch-PNG-Transparent-HD-Photo.png"
  class="lone-img"
  alt="Stitch waves goodbye"
  >
  <header>
  <h1>Congratulations! You scored: ${currentScore} out of ${STORE.length}</h1>
  </header>

  <button class="try-button">Try again?</button>
  `; // set html
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
  renderForm();
  renderCounter();
  handleSubmit();
}

$(handleQuiz());
