
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

poop = []

poop.push(localStorage.getItem('storedScores'))

const saveScore = e => {

    e.preventDefault();
    object.score = mostRecentScore
    object.name = (document.getElementById('username').value)
    const combination = object.name + "   " + object.score
    localStorage.setItem('storedScores', combination)
}

const seeHighScores = e => {

    e.preventDefault();

    function ending() {

       

        document.getElementById("testing").innerHTML = poop
        console.log(poop)

        

        

        

    }

    ending()
}


saveScoreButton.addEventListener('click', saveScore)

seeScoreButton.addEventListener('click', seeHighScores)

