/**
 * Ether
 * Leah Song
 * 
 * Ether is a cyber world that can only be accessed through a password.
 * Users can explore the world after entering the correct password.
 * There are three different functions once you enter the world.
 */

"use strict";

// global variables
let passwordBox;
let button;
let greeting;



function setup() {
    
    createCanvas (windowWidth, windowHeight);
    background (0);
    // imported google font using css and html
    textFont('orbitron-regular400');
    
    // input password
    passwordBox = createInput ();
    passwordBox.attribute('Placeholder', 'Enter Password');
    passwordBox.class ("orbitron-regular");
    passwordBox.style ('color', 'black');

    // enter button
    button = createButton ('enter');
    button.class ("orbitron-regular");
    button.mousePressed (login);
    

    // greeting element
    greeting = createElement ('h3', 'Welcome');
    greeting.style ('color', 'white');
    greeting.style ('font-weight', 'light');
    greeting.class ("orbitron-regular");
}






// login function to load ehter
function login (){
    let password = passwordBox.value ()
    
    if (password == "R-O-R") {
        localStorage.setItem ("password", password);
        window.open ("loading.html", "_self");
}
}

// positining elements
function draw() {
    passwordBox.position (windowWidth/2-70, windowHeight/2);
    button.position (windowWidth/2+40, windowHeight/2+50);
    greeting.position (windowWidth/2-15, windowHeight/2-65);
}

function keyPressed () {
    if (keyCode === ENTER) {
        login ();
    }
}

// vanlia javascript to make canvas resizable
function reportWindowSize() {
  }
  
  window.onresize = reportWindowSize;
  