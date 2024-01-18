// dummy questions
const questions = [
    {
        question: "What is the capital city of Nigeria",
        answers: ["Lagos", "Abia", "Portharcourt", "Abuja"],
        correct: 3
    },
    {
        question: "What is the full meaning of Lmao",
        answers: ["Lmao na 😂", "Laughing my a** off", "wo, e no get meaning", "omo!!!"],
        correct: 1
    },
    {
        question: "Who is your guy? According to the song",
        answers: ["Aishat", "Ayo", "Spyro", "idgaf"],
        correct: 2
    }
]

// default value
let currQuestion = 0
let score = 0


function displayQuestion(){
    // get the element of question and assign it to the questions in the array
    document.getElementById('question').innerText = questions[currQuestion].question

    // we get the answers in the array and assign it to a variable
    const answers = questions[currQuestion].answers

    // iterate the answers array and get their value and index to display on the option div
    const answerOptions = answers.map((answer, index) =>
        `<button class="option" onclick=selectAnswer(${index})>${answer}</button>`
    ).join('');

    // assign the mapped item (answeroptions) into the div of options
    document.getElementById('options').innerHTML = answerOptions
}

// check if the selected option is correct and enable the 
// button to go to the next question and score the user if correct
function selectAnswer(index){
    if(index === questions[currQuestion].correct){
        score++
    }
    document.getElementById('next').disabled = false
}

// go to the next question and if no more question, display the answer
document.getElementById('next').addEventListener('click', () =>{
    currQuestion++
    if(currQuestion < questions.length){
        displayQuestion();
        document.getElementById('next').disabled = true
    } else {
        document.getElementById('result').innerHTML = `<p>Your Total Score is: ${score}/${questions.length}</p>`
    }
})

// invoke the display question function
displayQuestion()