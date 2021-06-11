var startbutton = document.querySelector("#start")

function startQuiz(startbutton){
    var brown = document.getElementById("#div1");

    if (brown.style.display === "none"){
        brown.style.display = "block";
    } else {
        brown.style.display = "none":
    }
    // function to start the quiz on "start" button click

}


//start button event listener
startbutton.addEventListener("click", startQuiz)