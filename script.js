// // a prompt message for the user to input his or her name
// used a while loop to ensure that if no user name is inputed, the page should not load
let name = prompt("Please enter your name");
while (name === "") name = prompt("Please enter your name");

// dummy questions
const questions = [
  {
    question: "what is the capital city of cameroon",
    answers: ["Douala", "Yaounde", "Buea", "Bamenda"],
    correct: 1,
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
    question: "What is the full meaning of DOM?",
    answers: [
      "Document Object Memory",
      "Delivery Object Market",
      "Document Object model",
    ],
    correct: 2,
  },
  {
    question: "What is the full meaning of OOP?",
    answers: [
      "Object Oriented Paradigm",
      "Object Oriented Programing",
      "Object Oriented Procedure",
    ],
    correct: 1,
  },
  {
    question: "The following are examples of programing languages except",
    answers: ["JavaScript", "Python", "C++", "Html"],
    correct: 3,
  },
  {
    question: "what is the full meaning of RAM",
    answers: ["Read Access Memory", "Random Access Memory", "Read All Memory"],
    correct: 1,
  },
  {
    question: "What is the full meaing of pm used in time",
    answers: ["past mid day", "post Mean Time", "post meridiem"],
    correct: 2,
  },
  {
    question: "who is the father of Christmas",
    answers: ["Santa Claus", "the Grinch", "Frost", "the Easter bunny"],
    correct: 0,
  },
  {
    question: "which company owns of Teams app",
    answers: ["Google", "Microsoft", "Apple", "Amazon"],
    correct: 1,
  },
  {
    question: "Does this code work?",
    answers: ["yes", "No"],
    correct: 1,
  },
];

// default value
let currQuestion = 0;
let currQuestionReadable = 1;
let score = 0;
let totalQuestions = questions.length;

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

// check if the selected option is correct and enable the
// button to go to the next question and score the user if correct
function selectAnswer(index) {
  if (index === questions[currQuestion].correct) {
    score++;
  }
  document.getElementById("next").disabled = false;
}

// go to the next question and if no more question, display the answer
document.getElementById("next").addEventListener("click", () => {
  currQuestion++;
  if (currQuestionReadable < questions.length) {
    currQuestionReadable++;
  }
  if (currQuestion < questions.length) {
    displayProgress(currQuestionReadable, questions.length);
    displayQuestion();
    document.getElementById("next").disabled = true;
  } else {
    displayProgress(currQuestionReadable, questions.length);
    displayScore(name, score, questions.length);
  }
});

// invoke the display question function

displayQuestion();

function displayProgress(currQuestion, totalQuestions) {
  document.getElementById("progress").innerHTML =
    "question " + currQuestionReadable + " of " + totalQuestions;
  //     if(currQuestion < totalQuestions){
  //     currQuestion++;
  //     displayProgress();
  // }
}
displayProgress(currQuestionReadable, questions.length);

function displayScore(name, score, questionsLength) {
  if (score > 7) {
    document.getElementById("result").innerHTML =
      name +
      ", You are superb! you scored " +
      score +
      " questions out of " +
      questionsLength;
  } else {
    document.getElementById("result").innerHTML =
      name +
      ", Try harder, you've got this! you scored " +
      score +
      " questions out of " +
      questionsLength;
  }
}


   // !BUG next button still works even when answer button losses focus
   // TODO add handler to disable next button when no answer is selected
