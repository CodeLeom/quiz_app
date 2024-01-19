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

// default value
let currQuestion = 0;
let newQuestion = 1;
let score = 0;
let progress = 0;
let track = document.querySelector('#track_questions');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress_container');

function displayQuestion() {
  // get the element of question and assign it to the questions in the array
  document.getElementById('question').innerText =
    questions[currQuestion].question;

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

  // assign the mapped item (answeroptions) into the div of options
  document.getElementById('options').innerHTML = answerOptions;
}

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
  ++newQuestion;
  if (currQuestion < questions.length) {
    displayQuestion();
    updateProgressBar();
    track.style.display = 'block';
    progressContainer.style.display = 'block';
  } if (currQuestion === questions.length - 1) {
    document.getElementById('next').innerText = 'Check Scores';
  }
  if (newQuestion === questions.length) {
    progressBar.style.width = 100 + '%';
    document.getElementById('next').removeEventListener('click', showScores);
    document.getElementById('next').addEventListener('click', showScores);
  }
});

function showScores() {
  document.getElementById('next').disabled = true;
  document.getElementById(
    'result'
  ).innerHTML = `<p>Your Total Score is: ${score}/${questions.length}</p>`;
}

// invoke the display question function
displayQuestion();
