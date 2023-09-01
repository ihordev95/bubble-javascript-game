function play(){
    document.getElementById("start-game").style.display = "none";
    

    let timer = 10;
    let score = 0;
    let rnhit = 0;
    let interval; 
    var scorepoints;
    let backgrounds;

    function backsound(){
        backgrounds = new Audio("./assets/audio/background.mp3")
        backgrounds.play();
    }
    
    


    function runTimer() {
        backsound();
        interval = setInterval(function() {
            if (timer > 0) {
                console.log(timer);
                timer--;
                document.querySelector("#game-timer").textContent = timer;
                document.getElementById("game-over").style.display = "none";
            } else {
                clearInterval(interval); // Clear the interval
                document.querySelector("#btmp").innerHTML = "";
                document.getElementById("game-over").style.display = "block";
                document.querySelector("#game-over h2").innerHTML = `Your Score = ${score}`;
            }
        }, 1000)
    }
// restart the game
    document.querySelector("#game-over button").onclick = function() {
        resetGame(); // Reset the game state
        document.getElementById("game-over").style.display = "none";
        startgame();
    };

    function resetGame() {
        clearInterval(interval); // Clear the interval
        timer = 60;
        score = 0;
        rnhit = 0;
        document.querySelector("#game-timer").textContent = timer;
        document.querySelector("#score").textContent = score;
        document.querySelector("#hitcount").textContent = rnhit;
    }




//Calling Declration
function makeBubble(){
    let clutter = "";

    for(var i=0;i<=150;i++){
        var random = Math.floor(Math.random()*10);
       clutter +=   `<div id="bubble">${random}</div>`
    
    }
    document.getElementById("btmp").innerHTML = clutter
    
}




function hitcunt(){
    for(let i = 0;i<10;i++)
    {
        rnhit = Math.floor(Math.random()*10) 
        document.querySelector("#hitcount").textContent = rnhit;
    }
}

function showScoreAnimation() {
    var scoreAnimation = document.getElementById("plusten");
    scoreAnimation.style.display = "block";
  
    setTimeout(function() {
      scoreAnimation.style.display = "none";
    }, 1000); // Display for 1 second
  }

function incresescore(){
   document.querySelector("#btmp")
   .addEventListener("click", function(dets){
    if(timer > 0){
        let tomatch = Number(dets.target.textContent);
        if(rnhit == tomatch){

// disply Score animation and play score point sound
            showScoreAnimation()
            score += 10;
            document.querySelector("#score").textContent = score;

            // create a new audio instance
            scorepoints = new Audio("./assets/audio/score.mp3");
            // play the audio
            scorepoints.play();

            makeBubble();
            hitcunt();
        }
    }
    else{

    }

   })
}


function startgame(){
    makeBubble();
    runTimer();
    hitcunt();
    incresescore();
    backsound();

   
    // over();
}

//Calling Function
startgame();

}

// start the game
document.querySelector("#start-game").onclick = function() {
    play(); // Reset the game state

};



