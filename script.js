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
    question: "Who is American President?",
    answers: ["Joe Biden", "Harris", "Mr. Bean", "Donald Trump"],
    correct: 0,
  },
  {
    question: "The iconic bird App was changed to?",
    answers: ["Twitter", "Musk😑", "Spyro", "X"],
    correct: 3,
  },
  {
    question: "Who is more superior in the following Titans",
    answers: ["🐕 Scoobie Doo", "🦍 King Kong", "🦋 Mothra", "🦕 Godzilla"],
    correct: 3,
  },
  {
    question: "The richest Marvel character here is...",
    answers: ["Oreoluwa😂", "Thor💪🏼", "Iron Man❤", "Vision"],
    correct: 2,
  },
  {
    question: "The sweetest food is",
    answers: ["Ghana Jollof", "Ewedu", "Yam", "Nigeria Jollof"],
    correct: 3,
  },
  {
    question: "Which of these animals is the slowest",
    answers: ["sea lion", "turtle", "ssnake", "crawling lion😂"],
    correct: 1,
  },
  {
    question: "Who created this app?",
    answers: ["Bill Gates", "Bat", "Betty😁", "idgaf"],
    correct: 2,
  },
];

// default value
let currQuestion = 0;
let score = 0;
const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");

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
  nextButton.disabled = false;
}

// Result message
function result() {
  document.getElementById("progress").style.display = "none";
  document.getElementById("options").style.display = "none";
  nextButton.style.display = "none";
  document.getElementById("question").style.display = "none";
  backButton.style.display = "block";

  let totalScore = score;
  let resultMessage = "";

  if (totalScore > 6) {
    resultMessage = `<p>${playerName} you are superb!🎉 Your total score is: ${score}/${questions.length}</p>`;
    backButton.innerHTML = "<p> Back </p>";
  } else {
    resultMessage = `<p>${playerName} try harder 😌, you've got this! Your total Score is: ${score}/${questions.length}</p>`;
    backButton.innerHTML = "<p>Retry the quiz</p>";
  }

  document.getElementById("result").innerHTML = resultMessage;
  document.getElementById("result").style.display = "block";
}

// go to the next question and if no more question, display the result
nextButton.addEventListener("click", () => {
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
    nextButton.innerHTML = "<p> Check your Score </p>";
    nextButton.style.padding = "10px";
  }
});

// Going back or retrying the quiz
backButton.addEventListener("click", () => {
  currQuestion = 0;
  score = 0;
  questionNum = 1;
  document.getElementById(
    "progress"
  ).innerHTML = `<p>${questionNum}/${questions.length}</p>`;
  displayQuestion();
  document.getElementById("result").style.display = "none";
  document.getElementById("progress").style.display = "block";
  document.getElementById("question").style.display = "block";
  document.getElementById("options").style.display = "block";
  backButton.style.display = "none";
  nextButton.style = "display: block; margin: 0 auto; padding: 5px 20px;";
  nextButton.innerHTML = "<p> Next </p>";
  nextButton.disabled = true;
});

// invoke the display question function
displayQuestion();
