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
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: 'A) <script>',
        choice2: 'B) <javascript>',
        choice3: 'C) <js>',
        choice4: 'D) <scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "A) <script href='xxx.js'>",
        choice2: "B) <script name='xxx.js'>",
        choice3: "C) <script src='xxx.js'>",
        choice4: "D) <script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "A) msgBox('Hello World');",
        choice2: "B) alertBox('Hello World');",
        choice3: "C) msg('Hello World');",
        choice4: "D) alert('Hello World');",
        answer: 4,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "A) msgBox('Hello World');",
        choice2: "B) alertBox('Hello World');",
        choice3: "C) msg('Hello World');",
        choice4: "D) alert('Hello World');",
        answer: 4,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
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