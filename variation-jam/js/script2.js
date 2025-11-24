"use strict";

let codeBox ={
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    size: 0
};

let codeFont;
let currentScene;

function preload (){
    codeFont = loadFont ('assets/Glass_TTY_VT220.ttf');
}
function setup() {
    createCanvas (windowWidth, windowHeight);
    currentScene = scene.loading;

}

function draw() {
    currentScene();
    drawCodeBox ();
}
const scene = {
    loading: () => {
        background (0);
        fill (255);
        
    }
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
