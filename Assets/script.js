var answerbutton = document.querySelector("#one")
var answerbuttontwo = document.querySelector("#two")
var answerbuttonthree = document.querySelector("#three")
var answerbuttonfour = document.querySelector("#four")




function startQuiz(){
    
    

   document.getElementById("empty").innerHTML = "Wrong!" 

}


//start button event listener
answerbutton.addEventListener("click", startQuiz)
answerbuttontwo.addEventListener("click", startQuiz)
answerbuttonthree.addEventListener("click", startQuiz)
answerbuttonfour.addEventListener("click", startQuiz)

//("<h1>href="./questionONE.html"</h1>")