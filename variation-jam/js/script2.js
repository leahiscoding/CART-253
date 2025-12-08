"use strict";

// lines for bootloader simulation
let codeLines = [
        "[ bootloader :: v0.7.2 ]",
        "",
        "Initiating system boot...",
        "",
        "Loading modules................. OK",
        "Resolving system path........... /env/root",
        "Recalibrating................... aligned",
        "",
        "Establishing network connections:",
        "> attach: /core/stack/ether  ",
        "> status: passive  ",
        "",
        "Compiling background processes:",
        "    - node_04        ready",
        "    - node_11        ready",
        "",
        "Synchronizing local data stores:",
        "Checking user registry.......... 1 entry found",
        "Hashing identifiers............. completed",
        "",
        "-- SYSTEM MESSAGES --",
        "no previous state detected",
        "continuing in default mode",
        "--------------------------------------------------",
        "    environment ether loaded  ",
        "    initialized without profile  ",
        "--------------------------------------------------",
        "",
        "> Proceeding.",
        "Awaiting first instruction...",
        "",
        "Press [ENTER] to continue."
];

// global variables
let pageMargin = 10;
let state = "loading";
// 0 = loading, 1 = ready
let currentScene = "loading"
let codeFont;
let typeString = "";
let ellipses = "";
// a variable that accumulates letters and cotains the whole thing at the end.
let screenTyping;
let startedSound = false;

// preload assets
function preload (){
    codeFont = loadFont ('assets/Glass_TTY_VT220.ttf');
    screenTyping = loadSound ('assets/sounds/loading.mp3');
}

// setting up the canvas
function setup() {
    createCanvas (windowWidth, windowHeight);
    //currentScene = scene.loading;
    

   
}

function draw() {
    // loading screen for ether environment
    if (state === "loading") {
        background (0);
        textSize (20);
        textAlign (LEFT, TOP);
        fill (0,255,0); 
        textFont (codeFont);
        text ("press to load environment", pageMargin+30, pageMargin+40);
    }
    if (state === "start"){
        background (0);
        text ("loading", pageMargin+30, pageMargin+40);
        textSize (20);
        textFont (codeFont);
        fill (0,255,0); 
        text (ellipses,pageMargin+110, pageMargin+40);
        // make dots animate
        if (frameCount % 15 === 0){
            if (ellipses.length < 3){
                ellipses += ".";
            } 
            else {
                ellipses = "";
            }
        }
        // after a random time, switch to loading code lines
        if (millis() > random (3000,10000)){
            state = "loadCodeLines";
        }
    }
    
    // draw code lines
    if (state === "loadCodeLines"){ {
        if (!startedSound){
            screenTyping.loop ();
            startedSound = true;
        }
        drawCodeLines ();
        state = "drawCode";
        
        
    }
    }   
    // so that it only draws once after the code lines have been generated
   if (state === "drawCode") {
    
    background (0);
    // background to make the loading disappear
    push ();
    textSize(20);
    textFont (codeFont);
    textAlign (LEFT, TOP);
    fill (0,255,0);
    text (typeString, pageMargin+30, pageMargin+20);
    // typeString has constantly has characters adding to it - drawing whatever is in the typestring
    pop ();
   }

}


// draw code lines
 function drawCodeLines () {
    
    
    let numIndex = 0;
    // character index in the line
    let lineIndex = 0;
    // line index
    let line = codeLines[lineIndex];
    // line that we are currently typing

// we are using a setinterval because it's like a timer, so it allows specific things to happen over time
    let ref = setInterval (function() { 
        // ref = reference to stop the timer. once we're done we don't wanna run this anymore. once we're at the last line clear the interval and end it
        typeString += line [numIndex];
        // every timeout we change typestring and add character to it.
        if (numIndex < line.length -1) {
            numIndex++;
        } // we are at the end of the line
        else {
            if (lineIndex >= codeLines.length -1){
                clearInterval (ref);
                currentScene = "ready";
                //console.log ("done");
            }
        else {
            typeString += "\n";
            // new line
            numIndex = 0;
            // num index is 0 because the array starts again
            lineIndex ++
            // move to next line
            line = codeLines[lineIndex];
            
        }
        }
        
    },random (30,60)); // randomizes the speed of typing between 10 and 30 milliseconds
    
       
 }
// after the loading is done, when enter is pressed on the loading screen
 function keyPressed (){
    if (keyCode === ENTER && currentScene === "ready") {
        window.location.href = "ether.html";
    } 
 }
 
function mousePressed (){
    if (state === "loading") {
        state = "start";
    }
}



// vanlia javascript to make canvas resizable
function reportWindowSize() {
    resizeCanvas(windowWidth, windowHeight);
}
