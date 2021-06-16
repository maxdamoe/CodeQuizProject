const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const containers = Array.from(document.getElementsByClassName('choice-container'))


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choice1: 'A) strings',
        choice2: 'B) booleans',
        choice3: 'C) alerts',
        choice4: 'D) numbers',
        answer: '3'
    },
    {
        question: 'Arrays in Javascript can be used to store ____.',
        choice1: 'A) numbers and strings',
        choice2: 'B) booleans',
        choice3: 'C) other arrays',
        choice4: 'D) all of the above',
        answer: '4',
    },
    {
        question: 'The condition of an if / else statement is enclosed with:',
        choice1: 'A) quotes',
        choice2: 'B) curly brackets',
        choice3: 'C) parenthesis',
        choice4: 'D) square brackets',
        answer: '3',
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to a variable.',
        choice1: 'A) quotes',
        choice2: 'B) curly brackets',
        choice3: 'C) commas',
        choice4: 'D) parenthesis',
        answer: '1',
    },
    {
        question: 'A useful tool used during development and debugging is ____.',
        choice1: 'A) Javscript',
        choice2: 'B) console.log()',
        choice3: 'C) for loops',
        choice4: 'D) terminal',
        answer: '2',
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
var sec = 100;

startGame = () => {
    questionCounter = 0;
    availableQuesions = [...questions];
    timer();
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        localStorage.setItem('mostRecentScore', sec)
        return window.location.assign('file:///C:/Users/maxsi/Desktop/Coding/CodeQuizProject/Assets/end.html');


    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

containers.forEach((choice) => {

    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer)
        console.log(currentQuestion.answer)

        if (selectedAnswer !== currentQuestion.answer) {

            document.getElementById("nothing").innerHTML = 'Wrong!!'
            reduce()

        } else {
            document.getElementById("nothing").innerHTML = 'Correct!!'
        }


        getNewQuestion();



    });
});





function timer() {
    var timer = setInterval(function () {
        document.getElementById('timerdisplay').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}


// reduce the timer function


function reduce() {

    penalty = 1

    if (penalty = 1) {

        sec = sec - 10
        timer();
        console.log(sec)



    }

}


startGame();