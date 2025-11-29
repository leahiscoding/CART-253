let etherFont;

// set up for ether environment

function preload () {   
    etherFont = loadFont ('assets/quantum/quantfh.ttf');
}

function setup () {
    createCanvas(windowWidth, windowHeight)
}

function draw () {
    
    noStroke();
    // animated background using perlin noise
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
      text("ether", windowWidth/2, windowHeight/2)
            textFont(etherFont);
            textSize (75);
            textAlign (CENTER, CENTER);
            fill (random (100,255), random (100,255), random (100,255));
}    
}

function mousePressed() {
    if (mousePressed)
        if (mouseX > 0 && mouseX < windowWidth/3 && mouseY > 0 && mouseY < windowHeight)
            {window.open ("screen.html", "_self");
            }
        else if (mouseX > 0 + windowWidth/3 && mouseX < windowWidth - windowWidth/3 && mouseY > 0 && mouseY < windowHeight)
            {window.open ("text.html", "_self");
            }
        else if (mouseX > 0 + 2*windowWidth/3 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight)
           {window.open ("sound.html", "_self");
           }
        }

 

function reportWindowSize() {
  }
  
  window.onresize = reportWindowSize;
  