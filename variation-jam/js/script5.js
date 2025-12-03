// global variables
let currentState = "wish";
let answerBox;
let submitButton;

// lines for questions array
let questions = [
    "what is your deepest desire?",
    "what is your darkest desire?",
    "what is your secret wish?"
];

// setup function
function setup() {
    createCanvas(windowWidth, windowHeight);
    // shuffle questions array
    shuffle(questions, true);

    // answerBox setup
    answerBox = createInput();
    answerBox.position(windowWidth / 2 - 150, windowHeight / 2);
    answerBox.size(300, 100);

    // submitButton setup
    submitButton = createButton("submit");
    submitButton.size(50, 20);
    submitButton.position(answerBox.x + answerBox.width / 2 - submitButton.width / 2, answerBox.y + 150);
    submitButton.mousePressed(submitAnswer);
}
// draw function
function draw() {
    background(0); // Black Background
    textSize(20);
    fill(255);    
    textAlign(CENTER, CENTER);
    // display based on current state
    if (currentState === "wish") {
        text(questions[0], windowWidth / 2, windowHeight / 2 - 100);
        // show input box and button
        answerBox.show();
        submitButton.show();
    } else if (currentState === "granted") {
        text("your wish is granted", windowWidth / 2, windowHeight / 2 - 100);
        textSize(12);
        text("press space to make another wish", windowWidth / 2, windowHeight / 2 + 100);
        // hide input box and button
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