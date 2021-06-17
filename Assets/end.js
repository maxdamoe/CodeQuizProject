
const saveScoreButton = document.getElementById('saveScoreButton');
const seeScoreButton = document.getElementById('seeScoreButton')
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

score.innerText = mostRecentScore

const finalUsername = localStorage.getItem('savedUserName')

const object = {

    name: '',
    score: '',

}



const saveScore = e => {

    e.preventDefault();
    object.score = mostRecentScore
}

const seeHighScores = e => {

    e.preventDefault();

    object.name = (document.getElementById('username').value)

    function ending() {

        document.getElementById("testing").innerHTML = object.name + "  " + object.score

    }

    ending()
}


saveScoreButton.addEventListener('click', saveScore)

seeScoreButton.addEventListener('click', seeHighScores)

