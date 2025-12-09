"use strict";

// global variables
let currentState = "wish";
let answerBox;
let submitButton;
let googleFont;
let musicPlay;

// lines for questions array
let questions = [
    "what is your deepest desire?",
    "what is your darkest desire?",
    "what is your secret wish?",
    "Which truth would you erase from your life?",
    "What would you offer for the life you dream of?",
    "What wish would you whisper to the stars?",
    "What do you desire more than anything else?",
    "What wish have you kept hidden from everyone?",
];
// preload function for font and sound
function preload() {
    googleFont = loadFont('assets/Xanh_Mono/XanhMono-Regular.ttf');
    musicPlay = loadSound('assets/sounds/desire.mp3');
}

// setup function
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    // shuffle questions array
    shuffle(questions, true);
    textFont(googleFont);
  

    // answerBox setup
    answerBox = createInput();
    answerBox.position(windowWidth / 2 - 200, windowHeight / 2);
    answerBox.size(400, 25);
    answerBox.style("font-size", "14px");
    answerBox.style("color", "white");
    answerBox.style("border", "2px solid green");
    answerBox.style("background", "black");
    answerBox.class ("xanh-mono-regular");
    

    // submitButton setup
    submitButton = createButton("submit");
    submitButton.size(60, 20);
    submitButton.class("xanh-mono-regular");
    submitButton.style("font-size", "14px");
    submitButton.style("color", "green");
    submitButton.style("border", "0.5px solid green");
    submitButton.style("background", "black");
    submitButton.position(answerBox.x + answerBox.width / 2 - submitButton.width / 2, answerBox.y + 70);
    submitButton.mousePressed(submitAnswer);
}

    

// draw function
function draw() {
    background(random(0)); // Black Background
    textSize(30);
    
    
    fill(0,255,0);    
    textAlign(CENTER, CENTER);
    // display based on current state
    if (currentState === "wish") {
        text(questions[0], windowWidth / 2, windowHeight / 2 - 50);
        // show input box and button (html elements)
        answerBox.show();
        submitButton.show();
    } else if (currentState === "granted") {
        text("We have heard you. We are here with you. We listen to your wish.", windowWidth / 2, windowHeight / 2 - 50);
        textSize(30);
        text("Stay here with us. Forever and Ever.", windowWidth / 2, windowHeight / 2 + 50);
        textSize(10);
        text("Press SPACE to make another wish", windowWidth / 2, windowHeight / 2 + 300);

        // hide input box and button (html elements)
        answerBox.hide();
        submitButton.hide();
    }
}
// submit answer function
function submitAnswer() {
    let currentInput = answerBox.value();
    // if input is not empty, change state to granted
    if (currentInput !== "") {
        currentState = "granted";
    }
    // play sound
    if (!musicPlay.isPlaying()) {
        musicPlay.play();
        musicPlay.setVolume(1.0);
    }
}
// mousePressed function
function mousePressed() {
    // if click on answer box, clear text
    if (currentState === "wish" && mouseX > answerBox.x && mouseX < answerBox.x + answerBox.width &&
        mouseY > answerBox.y && mouseY < answerBox.y + answerBox.height) {
        answerBox.value("");
    }
}
// keyPressed function
function keyPressed() {
    if ((key === "Enter" || key === "Return") && currentState === "wish") {
        submitAnswer();
    }
// press space to make another wish
    if (key === " " && currentState === "granted") {
        currentState = "wish";
        answerBox.value("");
        let oldQuestions = questions[0];
// reshuffle questions array to get a new question
        shuffle(questions, true);

        while (questions[0] === oldQuestions) {
            shuffle(questions, true);
        } 

    
 
   
    }
    // press '2' to go to ether page
     if (key === '2' &&(currentState === "granted" || currentState === "wish")) {
    window.location.href = "ether.html";
  }
    
}

// responsive canvas
function reportWindowSize() {
    resizeCanvas(windowWidth, windowHeight);
    answerBox.position(windowWidth / 2 - 150, windowHeight / 2);
    submitButton.position(answerBox.x + answerBox.width / 2 - submitButton.width / 2, answerBox.y + 150);
}

window.onresize = reportWindowSize;