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
        "unknown flag “–return”",
        "no previous state detected",
        "continuing in default mode",
        "",
        "Probing environment…",
        "    signal A  : weak",
        "    signal B  : stable",
        "    signal C  : unknown (accepted)",
        "",
        "Suspended data fragments…   14 detected",
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
let currentLines;
let lineIndex = 0;
let numIndex = 0;
//let currentScene;
let pageMargin = 10;

let codeFont;

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
    background (255);
    drawCodeLines ();
}

// draw code lines
 function drawCodeLines () {


     for (let i = 0; i <= lineIndex; i++) {
       if (i <= lineIndex){
        push ();
        textSize(12);
        textFont (codeFont);
        textAlign (LEFT, TOP);
        fill (0);
        text (codeLines[i], pageMargin, pageMargin + i * 14);
        pop ();
        }

        // else if (i == lineIndex){
        //  partialLine = codeLines[i].substring (0, numIndex);
        //     text (partialLine, pageMargin, pageMargin + i * 14);

        // }
        numIndex += random (0.1,0.7);

    if (numIndex > codeLines[lineIndex].length){
    numIndex = 0;
    lineIndex ++;
    }

       }
 }
 




// vanlia javascript to make canvas resizable
function reportWindowSize() {
    resizeCanvas(windowWidth, windowHeight);
}
