const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const seeScoreButton = document.getElementById('seeScoreButton')
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

score.innerText = mostRecentScore

MaximumHighScores = 5


username.addEventListener('keyup', () => {
    localStorage.setItem('savedUserName', username.value)
})




const saveScore = e => {

    e.preventDefault();
    localStorage.setItem('savedScore', mostRecentScore)


}


poop = localStorage.getItem('savedScore')
pee = localStorage.getItem('savedUserName')




saveScoreButton.addEventListener('click', saveScore)

seeScoreButton.addEventListener('click', console.log(poop))

