// dummy questions
const questions = [
  {
    question: 'What is the capital city of Nigeria',
    answers: ['Lagos', 'Abia', 'Portharcourt', 'Abuja'],
    correct: 3,
  },
  {
    question: 'What is the full meaning of Lmao',
    answers: [
      'Lmao na 😂',
      'Laughing my a** off',
      'wo, e no get meaning',
      'omo!!!',
    ],
    correct: 1,
  },
  {
    question: 'Who is your guy? According to the song',
    answers: ['Aishat', 'Ayo', 'Spyro', 'idgaf'],
    correct: 2,
  },
  {
    question: 'Who invented JavaScript?',
    answers: [
      'Brendan Eich',
      'Yukihiro Matsumoto',
      'Larry Wall',
      'Guido Van Rossum',
    ],
    correct: 0,
  },
  {
    question: 'What is the name of our facilitator?',
    answers: [
      'Hakeem Owolabi',
      'Chizaram Anisimuo',
      'Kyenpya Gutap',
      'Ayodele Aransiola',
    ],
    correct: 3,
  },
  {
    question: 'When was ES6 officially released?',
    answers: ['May 2009', 'June 2015', 'December 1995', 'March 2000'],
    correct: 1,
  },
  {
    question: 'Which of the following is not built on JavaScript?',
    answers: ['ReactJS', 'AngularJS', 'Perl', 'NodeJS'],
    correct: 2,
  },
  {
    question: 'The following are tools for debugging except?',
    answers: [
      'Console Statements',
      'Browser Developer Tools',
      'Node.js Inspector',
      'Alert Window',
    ],
    correct: 3,
  },
  {
    question: 'All these are not code editors except?',
    answers: ['JSBiddle', 'Atom', 'Sublime', 'VimEmacs'],
    correct: 1,
  },
  {
    question:
      'What do you call using Javascript to manipulate HTML and CSS code?',
    answers: [
      'Dom Manipulation',
      'HTML Manipulation',
      'Markdown Language',
      'Frontend',
    ],
    correct: 0,
  },
];

// Get the user name
let userName = (prompt('Please enter your name:'));

// default value
let currQuestion = 0;
let newQuestion = 0;
let score = 0;
let progress = 0;
let track = document.querySelector('#track_questions');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress_container');
const tryAgain = document.getElementById('try_again');

function displayQuestion() {
  // get the element of question and assign it to the questions in the array
  document.getElementById('question').innerText =
    questions[currQuestion].question;

  // this is to show the question progress
  track.innerHTML = `Completed <span>${newQuestion}</span> out of <span>${questions.length}</span> questions.`;
  track.style.display = 'none';
  progressContainer.style.display = 'none';

  // we get the answers in the array and assign it to a variable
  const answers = questions[currQuestion].answers;

  // iterate the answers array and get their value and index to display on the option div
  const answerOptions = answers
    .map(
      (answer, index) =>
        `<button class="option" onclick=selectAnswer(${index})>${answer}</button>`
    )
    .join('');

  // assign the mapped item (answeroptions) into the div "options"
  document.getElementById('options').innerHTML = answerOptions;
}

// progress bar to show the progress of user's responses
function updateProgressBar() {
  progress += 10;
  progressBar.style.width = progress + '%';

  if (progress === 100) {
    progressBar.style.width = 100 + '%';
    document.getElementById('next').innerText = 'Check Scores';
    alert('Progress is complete!');
    // You can add additional actions here when progress is complete
  }
}

// check if the selected option is correct and enable the
// button to go to the next question and score the user if correct
function selectAnswer(index) {
  if (index === questions[currQuestion].correct) {
    score++;
  }
  document.getElementById('next').disabled = false;
}

// go to the next question and if no more question, display the answer
document.getElementById('next').addEventListener('click', () => {
  currQuestion++;
  newQuestion++;
  if (currQuestion < questions.length) {
    displayQuestion();
    updateProgressBar();
    progressContainer.style.display = 'block';
    track.style.display = 'block';
    track.innerHTML = `Completed <span>${newQuestion}</span> out of <span>${questions.length}</span> questions.`;
    
    //disable the button until an option is selected
    document.getElementById('next').disabled = true;
  }
  if (newQuestion === questions.length) {
    document.getElementById('options').innerHTML = `<span class="complete">Quiz Completed</span>`
    track.innerHTML = `Completed <span>${newQuestion}</span> out of <span>${questions.length}</span> questions.`;
    document.getElementById('next').innerText = 'Check Your Score';
    progressBar.style.width = 100 + '%';
    document.getElementById('next').removeEventListener('click', showScores);
    document.getElementById('next').addEventListener('click', showScores);
  }
});

// this is to show the scores when the Check Your Scores button is clicked
function showScores() {
  document.getElementById('next').disabled = true;
  document.getElementById(
    'result'
  ).innerHTML = `<p>${userName}, your Total Score is: ${score}/${questions.length}</p>`;
  tryAgain.style.display = 'block';
  tryAgain.innerText = `Try Again`;
  let result = score/questions.length * 100;

  // alert window displays the user's score in percentage
  if (result < 50) {
    alert(`${userName}, you Scored ${result}%. Try Again. You've got this 💪`)
  } if (result >= 50 && result <= 69) {
    alert(`${userName}, you Scored ${result}%. Good! But you can do so much better! 👍`)
  } if (result >= 70 && result <= 100) {
    alert(`${userName}, you Scored ${result}%. Great Job! You are a genuis. Well done!!! 🌟✨🏆`)
  }
}

// when the try again button is clicked
tryAgain.addEventListener('click', () => {
  window.location.reload();
})

// invoke the display question function
displayQuestion();
