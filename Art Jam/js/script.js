/**
 * Self-Portrait
 * Leah Song
 * 
 * A self-portrait made with raining glowy star (a.k.a stardrops)
 */

"use strict";



let starDropGroup = []


function setup(){
// create canvas for stardrops
    createCanvas(1000, 600);
// using for loop to create multiple stardrops
    for(let starDropCounter=0; starDropCounter<400; starDropCounter += 1){
        // stardropcounter gets bigger by 1 each time until it hits 300
            starDropGroup.push({
        x: random (0, width),
        y: random (0, height),
        // speed of the stardrop
        speed: random (0.5,0.8),
        // size referece for stars
        sizeH: 5,
        sizew: 11,
        // colour of the star drop—stardrops are lighter colour
        color:{        
            r: random (90,255),
            g: random (90,255),
            b: random (90,255)
        }
    
});
    }

}

/**
 * Canvas setup
*/
function draw() {
    background(0);
    /*adding glowy effect to each stars because shiny things are pretty 
    source: https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Glow_effect/glowing_shapes/sketch.js*/
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color(255, 255, 255);
     // draw the stardrops
    drawStarDrop();
    // move the stardrops
    moveStarDrop();
}

// action: make raindrop
function drawStarDrop() {

//for loop - for each rainDrop in the group draw each one
    for(let position = 0 ; position<200 ; position=position+1)
    // no randomizing for loop
    {
    push();
    noStroke();
    // using position to get each stardrop's colour
    fill(starDropGroup[position].color.r, starDropGroup[position].color.g, starDropGroup[position].color.b);
    // instead of putting number 0 or 1, we put position
    star (starDropGroup[position].x, starDropGroup[position].y, 4, 9, 5);
    // size and npoint of the stars
    pop();
    }
}

function moveStarDrop() {
//for loop - for each rainDrop in the group move each one
    for(let position = 0 ; position<200 ; position=position+1)
    {
    
     starDropGroup[position].y = starDropGroup[position].y + starDropGroup[position].speed;
    if (starDropGroup[position].y > height) {
        // resetting the raindrop to the top
        starDropGroup[position].y = 0;
        starDropGroup[position].speed += random (0.2,0.3);
        // you need to add [position] to get particular raindrop
    }
    // checking if the height is greater than the canvas height
    // manipulating properties of each raindrop

     // instead of putting number 0 or 1, we put position 
   
  
    }
}

// source:https://stackoverflow.com/questions/62893486/what-is-the-math-behind-creation-of-a-star-in-p5js?noredirect=1&lq=1
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

// Thank you Sabine for helping me write this wonderful code!