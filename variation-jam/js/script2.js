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
        "",
        "Establishing network connections:",
        "> attach: /core/stack/ether  ",
        "> status: passive  ",
        "> reason: none supplied",
        "",
        "",
        "Compiling background processes:",
        "    - node_04        ready",
        "    - node_11        ready",
        "    - node_11.aux    suppressed",
        "    - node_19        pending (ignored)",
        "",
        "",
        "Synchronizing local data stores:",
        "Checking user registry.......... 1 entry found",
        "Hashing identifiers............. completed",
        "Obfuscating parameters.......... done",
        "Restoring volatile cache........ done",
        "",
        "",
        "-- SYSTEM MESSAGES --",
        "unknown flag “–return”",
        "no previous state detected",
        "continuing in default mode",
        "",
        "",
        "Probing environment…",
        "    signal A  : weak",
        "    signal B  : stable",
        "    signal C  : unknown (accepted)",
        "",
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
        "",
        "--------------------------------------------------",
        "    environment “ether://”",
        "    initialized without profile  ",
        "--------------------------------------------------",
        "",
        "",
        "Awaiting first instruction…",
        "",
        "Press [ENTER] to continue."
];

let linesToDisplay;
let currentScene;
let codeFont;


function preload (){
    codeFont = loadFont ('assets/Glass_TTY_VT220.ttf');
}
function setup() {
    createCanvas (windowWidth, windowHeight);
    

}

function draw() {
   
}
const scene = {
    
        
}

function drawCodeBox () {
    push ();
    background (0,0,255);
    stroke (255);
    strokeWeight (2);
    noFill ();
    rect (20,20,windowWidth*0.95, windowHeight*0.95);
    pop ();
}

function reportWindowSize() {
    resizeCanvas(windowWidth, windowHeight);
}
