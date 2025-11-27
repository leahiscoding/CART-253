

function setup () {
    createCanvas(windowWidth, windowHeight)
}

function draw () {
    
    noStroke();
     console.log (frameCount);
    if (frameCount % 6 === 0){
    background (0);
    for (let i = 2; i < width; i +=random (0,25)){
        for (let j = 2; j < height; j +=random (0,25)){
            const n = noise(i *0.05, j *0.05, frameCount * 0.01);
            fill(n*random (100,255), n * random(100,255), n * random(100,255));
            ellipse(i, j, 2,2);
        
            text("welcome to ether", windowWidth/2, windowHeight/2)
            textSize(60);
            textAlign(CENTER, CENTER);
    }
    }
}    
}
 

function reportWindowSize() {
  }
  
  window.onresize = reportWindowSize;
  