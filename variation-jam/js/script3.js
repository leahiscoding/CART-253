"use strict";

// global variables
let etherFont;
let ethersong;
let interaction = false;
let state = "enter"


// set up for ether environment

function preload () {   
    etherFont = loadFont ('assets/quantum/quantfh.ttf');
    ethersong = loadSound ('assets/sounds/ether.mp3');
    
}

// canvas setup
function setup () {
    createCanvas(windowWidth, windowHeight)
}
// draw function
function draw () {
    // enter screen 
    if (state === "enter"){
        background (0);
        textFont(etherFont);
        textSize (20);
        textAlign (CENTER, CENTER);
        fill (random (255), random (255), random (255));
        text ("click to enter ether", windowWidth/2, windowHeight/2);
    }
    // if in ether environment, load etherScreen function
        
    else if (state === "ether"){
            state = "ether";
            etherScreen();
        }
}
    
   


function etherScreen() {
     // animated background using perlin noise
    noStroke();
     if (frameCount % 4 === 0){
    background (0);
    // perlin noise grid
    for (let i = 2; i < width; i +=random (0,25)){
        for (let j = 2; j < height; j +=random (0,50)){
            const n = noise(i *0.005, j *0.005, frameCount * 0.01);
            fill(n*random (100,255), n * random(100,255), n * random(100,255));
            ellipse(i, j, 2,2);
      
    }
    }
    // ether text in center
      text("ether", windowWidth/2, windowHeight/2)
            textFont(etherFont);
            textSize (30);
            textAlign (CENTER, CENTER);
            fill (random (100,255), random (100,255), random (100,255));
  

}    
}
// navigation to other pages based on mouse position
function mousePressed() {
    // enter ether environment
    // if state is enter, play sound and change state to ether
    if (state === "enter"){
        if (!ethersong.isPlaying()){
        ethersong.loop();
        ethersong.setVolume (0.5);
        interaction = true;
        state ="ether";
        // return to avoid further processing
        
    }
}
// navigation within ether environment
    else if (state === "ether"){
        // left third
        if (mouseX > 0 && mouseX < windowWidth/3 && mouseY > 0 && mouseY < windowHeight)
            {window.open ("screen.html", "_self");
            }
        // middle third
        else if (mouseX > 0 + windowWidth/3 && mouseX < windowWidth - windowWidth/3 && mouseY > 0 && mouseY < windowHeight)
            {window.open ("text.html", "_self");
            }
        // right third
        else if (mouseX > 0 + 2*windowWidth/3 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight)
           {window.open ("last.html", "_self");
           }
        }
    }


 
// responsive canvas
function reportWindowSize() {
  }
  
  window.onresize = reportWindowSize;
  