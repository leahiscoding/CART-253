"use strict";

// global variables
let currentState = "wish";
let answerBox;
let submitButton;
let googleFont;

// lines for questions array
let questions = [
    "what is your deepest desire?",
    "what is your darkest desire?",
    "what is your secret wish?"
];

function preload() {
    googleFont = loadFont('assets/Xanh_Mono/XanhMono-Regular.ttf');
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
    answerBox.position(windowWidth / 2 - 150, windowHeight / 2);
    answerBox.size(300, 25);
    answerBox.style("font-size", "14px");
    answerBox.class ("xanh-mono-regular");
    

    // submitButton setup
    submitButton = createButton("submit");
    submitButton.size(60, 20);
    submitButton.class("xanh-mono-regular");
    submitButton.position(answerBox.x + answerBox.width / 2 - submitButton.width / 2, answerBox.y + 80);
    submitButton.mousePressed(submitAnswer);
}
// draw function
function draw() {
    background(0); // Black Background
    textSize(20);
    
    
    fill(0,255,0);    
    textAlign(CENTER, CENTER);
    // display based on current state
    if (currentState === "wish") {
        text(questions[0], windowWidth / 2, windowHeight / 2 - 50);
        // show input box and button (html elements)
        answerBox.show();
        submitButton.show();
    } else if (currentState === "granted") {
        text("your wish is granted", windowWidth / 2, windowHeight / 2 - 100);
        textSize(12);
        text("press space to make another wish", windowWidth / 2, windowHeight / 2 + 100);
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

    
}

// responsive canvas
function reportWindowSize() {
    resizeCanvas(windowWidth, windowHeight);
    answerBox.position(windowWidth / 2 - 150, windowHeight / 2);
    submitButton.position(answerBox.x + answerBox.width / 2 - submitButton.width / 2, answerBox.y + 150);
}

window.onresize = reportWindowSize;