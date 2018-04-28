let qNum = 0; 
let score = 0;

function qNumAndScore() {
  $('#tally').html(
  `<ul id="foot">
        <li id="q1">Question:<span class="qNum">${qNum + 1}</span> of 10</li>
        <li id="q2">Score:<span class="score">${score}</span> of 10</li>
  </ul>`
)}

function runQnum() {
  if(qNum < questionBank.length) {
    qNum++;
  }
}

//event listener for Begin Test 
function startTest () {
  $('.welcome').on('click', `.beginTest`, function() {
    $('.welcome').remove();
    renderQuestions();
  })
  /*runQnum();*/
}

//renderQuestions;
function renderQuestions () {
  $('#questions').html(`<div>
      <h1>${questionBank[qNum].question}</h1>
      <form class="answerForm">
          <fieldset>
          <label class="answerOption">
            <input type="radio" name="Choice" value="${questionBank[qNum].answer1}" required><span>${questionBank[qNum].answer1}</span>
          </label>
          <label class="answerOption">
            <input type="radio" name="Choice" value="${questionBank[qNum].answer2}" required><span>${questionBank[qNum].answer2}</span>
          </label>
          <label class="answerOption">
            <input type="radio" name="Choice" value="${questionBank[qNum].answer3}" required><span>${questionBank[qNum].answer3}</span>
          </label>
          <label class="answerOption">
            <input type="radio" name="Choice" value="${questionBank[qNum].answer4}" required><span>${questionBank[qNum].answer4}</span>
          </label>
          <label class="answerOption">
            <input type="radio" name="Choice" value="${questionBank[qNum].answer5}" required><span>${questionBank[qNum].answer5}</span>
          </label>
        </fieldset>
        <button type="submit" class="next_question">Final Answer?</button> 
      </form>
      <ul id="foot">
        <li id="q1">Question:<span class="qNum">${qNum + 1}</span> of 10</li>
        <li id="q2">Score:<span class="score">${score}</span> of 10</li>
      </ul>
    </div>`);
  checkAnswer();
  /*qNumAndScore();*/
}


//validate answer
function checkAnswer () { 
  $('.answerForm').submit(event => {
    event.preventDefault();
    let userChoice = $('input[name="Choice"]:checked').val();
    if(questionBank[qNum].correctAns === userChoice) {
      score++;
      feedbackCorrect();
    }
    else {
      feedbackWrong();
    }
  })
}  


//correct choice feedback
function feedbackCorrect() {
  $('#questions').html(
    `<div class="correct_answer">
  <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif" />
  <h2>Good Job!</h2>
  <form class="advance_question js-next-question">
  <button type="submit" class="next_question js-next-question">Next question</button>
  </form>
  </div>
  </div>
  </div>`);
  nextQuestion();
}


//wrong choice feedback
function feedbackWrong() { 
  $('#questions').html(
    `<div class="correct_answer">
  <img src="https://media1.tenor.com/images/a62c7436936a466429637d61c81b4b31/tenor.gif?itemid=4718063" />
  <h2>The correct answer is<span>${questionBank[qNum].correctAns}</span></h2>
  <form class="advance_question js-next-question">
  <button type="submit" class="next_question js-next-question">Next Question</button>
  </form>
  </div>
  </div>
  </div>`);
  nextQuestion();
}


//next question
function nextQuestion() {
  runQnum();
  $('.next_question').click(event => {
    event.preventDefault();
    if(qNum < questionBank.length) {
      renderQuestions();
    }
    else{
      endTest();
    }
  })
}

//end of test 
function endTest() {
  $('#questions').html(
    `<div class="correct_answer">
  <img src="https://media2.giphy.com/media/120jXUxrHF5QJ2/giphy.gif" />
  <h2>Thank you for playing!</h2>
  <form class="advance_question js-next-question">
  <button type="submit" class="startAgain">Home</button>
  </form>
  <ul id="foot">
        <li id="q2">Score:<span class="score">${score}</span> of 10</li>
  </ul>
  </div>
  </div>
  </div>`);
}

$(startTest);
