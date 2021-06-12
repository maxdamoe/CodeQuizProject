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
        answer: 3,
    },
    {
        question: 'Arrays in Javascript can be used to store ____.',
        choice1: 'A) numbers and strings',
        choice2: 'B) booleans',
        choice3: 'C) other arrays',
        choice4: 'D) all of the above',
        answer: 4,
    },
    {
        question: 'The condition of an if / else statement is enclosed with:',
        choice1: 'A) quotes',
        choice2: 'B) curly brackets',
        choice3: 'C) parenthesis',
        choice4: 'D) square brackets',
        answer: 3,
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to a variable.',
        choice1: 'A) commas',
        choice2: 'B) curly brackets',
        choice3: 'C) quotes',
        choice4: 'D) parenthesis',
        answer: 3,
    },
    {
        question: 'A useful tool used during development and debugging is ____.',
        choice1: 'A) Javscript',
        choice2: 'B) terminal',
        choice3: 'C) for loops',
        choice4: 'D) console.log()',
        answer: 3,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    timer();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
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
        getNewQuestion();
        
    });
});

startGame();


function timer(){
    var sec = 100;
    var timer = setInterval(function(){
        document.getElementById('timerdisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}