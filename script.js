const playerName = prompt("What is your name?");

// dummy questions
const questions = [
  {
    question: "What is the capital city of Nigeria",
    answers: ["Lagos", "Abia", "Portharcourt", "Abuja"],
    correct: 3,
  },
  {
    question: "What is the full meaning of Lmao",
    answers: [
      "Lmao na 😂",
      "Laughing my a** off",
      "wo, e no get meaning",
      "omo!!!",
    ],
    correct: 1,
  },
  {
    question: "Who is your guy? According to the song",
    answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
    correct: 2,
  },
  {
    question: "Who is your guy? According to the song",
    answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
    correct: 2,
  },
  {
    question: "Who is your guy? According to the song",
    answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
    correct: 2,
  },
  {
    question: "Who is your guy? According to the song",
    answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
    correct: 2,
  },
  {
    question: "Who is your guy? According to the song",
    answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
    correct: 2,
  },
  {
    question: "The sweetest food is",
    answers: ["Ghana Jollof", "Ewedu", "Yam", "Nigeria Jollof"],
    correct: 3,
  },
  {
    question: "Which of these animals is the slowest",
    answers: ["sea lion", "turtle", "ssnake", "crawling lion"],
    correct: 1,
  },
  {
    question: "Who created this app?",
    answers: ["Bill Gates", "Bat", "Betty", "idgaf"],
    correct: 2,
  },
];

// default value
let currQuestion = 0;
let score = 0;

function displayQuestion() {
  // get the element of question and assign it to the questions in the array
  document.getElementById("question").innerText =
    questions[currQuestion].question;

  // we get the answers in the array and assign it to a variable
  const answers = questions[currQuestion].answers;

  // iterate the answers array and get their value and index to display on the option div
  const answerOptions = answers
    .map(
      (answer, index) =>
        `<button class="option" onclick=selectAnswer(${index})>${answer}</button>`
    )
    .join("");

  // assign the mapped item (answeroptions) into the div of options
  document.getElementById("options").innerHTML = answerOptions;
}

// getting progress
let questionNum = 1;
document.getElementById(
  "progress"
).innerHTML = `<p>${questionNum} of ${questions.length}</p>`;

// check if the selected option is correct and enable the
// button to go to the next question and score the user if correct
function selectAnswer(index) {
  if (index === questions[currQuestion].correct) {
    score++;
  }
  document.getElementById("next").disabled = false;
}

// Result message
function result() {
  document.getElementById("progress").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("next").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("back").style.display = "block";

  let totalScore = score;
  if (totalScore > 6) {
    document.getElementById(
      "result"
    ).innerHTML = `<p>${playerName} you are superb! total Score is: ${score}/${questions.length}</p>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p>${playerName} try harder, you've got this! total Score is: ${score}/${questions.length}</p>`;
  }

  document.getElementById("back").addEventListener("click", () => {
    displayQuestion();
  });
}
// go to the next question and if no more question, display the answer
document.getElementById("next").addEventListener("click", () => {
  currQuestion++;
  if (currQuestion < questions.length) {
    displayQuestion();
    document.getElementById("next").disabled = true;
  } else {
    result();
  }
  document.getElementById(
    "progress"
  ).innerHTML = `<p>${questionNum}/${questions.length}</p>`;

  if (questionNum < questions.length - 1) {
    questionNum++;
    document.getElementById(
      "progress"
    ).innerHTML = `<p>${questionNum} of ${questions.length}</p>`;
  } else {
    document.getElementById("progress").innerHTML = "<p> Last question! </p>";
    document.getElementById("next").innerHTML = "<p> Check your Score </p>";
  }
});

// invoke the display question function
displayQuestion();
