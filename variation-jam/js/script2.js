"use strict";

// lines for bootloader simulation
let codeLines = [
        "[ bootloader :: v0.7.2 ]",
        "",
        "Initiating system boot...",
        "",
        "Loading modules................. OK",
        "Resolving system path........... /env/root",
        "Verifying runtime integrity..... 98% (2 unresolved)",
        "Linking dependencies............ OK",
        "Allocating memory blocks........ OK",
        "Initializing time-layer......... desync detected",
        "Recalibrating................... aligned",
        "",
        "Establishing network connections:",
        "> attach: /core/stack/ether  ",
        "> status: passive  ",
        "> reason: none supplied",
        "",
        "Compiling background processes:",
        "    - node_04        ready",
        "    - node_11        ready",
        "    - node_11.aux    suppressed",
        "    - node_19        pending (ignored)",
        "",
        "Synchronizing local data stores:",
        "Checking user registry.......... 1 entry found",
        "Hashing identifiers............. completed",
        "Obfuscating parameters.......... done",
        "Restoring volatile cache........ done",
        "",
        "-- SYSTEM MESSAGES --",
        "no previous state detected",
        "continuing in default mode",
        "",
        "Probing environment…",
        "    signal A  : weak",
        "    signal B  : stable",
        "    signal C  : unknown (accepted)",
        "",
        "Not restoring (policy: skip)",
        "",
        "Heartbeat engine.......... nominal",
        "Surface renderer.......... warming up",
        "Internal map.............. unresolved (running without map)",
        "",
        "[ OK ] Core acknowledged",
        "[ OK ] Quiet-start sequence active",
        "[ OK ] Input channel unlocked",
        "",
        "> No warnings issued.  ",
        "> No context provided.  ",
        "> Proceeding.",
        "",
        "--------------------------------------------------",
        "    environment “ether://”",
        "    initialized without profile  ",
        "--------------------------------------------------",
        "",
        "Awaiting first instruction…",
        "",
        "Press [ENTER] to continue."
];

// global variables
let pageMargin = 10;
let state = "start"
// 0 = loading, 1 = ready
let currentScene = "loading"
let codeFont;
let typeString = "";
let ellipses = "";
// a variable that accumulates letters and cotains the whole thing at the end.

// preload assets
function preload (){
    codeFont = loadFont ('assets/Glass_TTY_VT220.ttf');
}

// setting up the canvas
function setup() {
    createCanvas (windowWidth, windowHeight);
    //currentScene = scene.loading;

   
}

function draw() {
    if (state === "start"){
        background (255);
        text ("loading", pageMargin, pageMargin);
        text (ellipses,pageMargin+40, pageMargin);
        if (frameCount % 15 === 0){
            if (ellipses.length < 3){
                ellipses += ".";
            } 
            else {
                ellipses = "";
            }
        }
        if (millis() > random (2000,6000)){
            state = "loadCodeLines";
        }
    }
    
    if (state === "loadCodeLines"){ {
        drawCodeLines ();
        state = "drawCode";
    }
    }   
    // so that it only draws once after the code lines have been generated
   if (state === "drawCode") {
    background (255);
    // background to make the loading disappear
    push ();
    textSize(12);
    textFont (codeFont);
    textAlign (LEFT, TOP);
    fill (0);
    text (typeString, pageMargin, pageMargin);
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
        
    },random (2,5)); // randomizes the speed of typing between 10 and 30 milliseconds
    
       
 }

 function keyPressed (){
    if (keyCode === ENTER && currentScene === "ready") {
        window.location.href = "ether.html";
    } 
 }
 




// vanlia javascript to make canvas resizable
function reportWindowSize() {
    resizeCanvas(windowWidth, windowHeight);
}
