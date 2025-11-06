/**
 * Mr. Furious
 * Norah Wilcox Leah Song
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
    x: 200,
    y: 200,
    size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
    }
};

// The sky is blue 
let sky = {
    fill: {
        r: 0,
        g: 0,
        b: 255
    }
};

// This is the Annoying Bird
let annoyingBird = {
    // Position and size
    x1: 30,
    y1: 75,
    x2: 58,
    y2: 20,
    x3: 86,
    y3: 75,
    // Colours the bird
    fill: {
        r: 255,
        g: 255,
        b: 0
    }

};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draws Mr. Furious
 */
function draw() {
    //Draws the sky
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    //Changes colour of the sky
    sky.fill.b = sky.fill.b - 1 
  
  // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
    
  // Changes Mr. Furious face colour
    mrFurious.fill.g = mrFurious.fill.g - 1;
    mrFurious.fill.b = mrFurious.fill.b - 1;

    // Mr. Furious shakes with rage
    mrFurious.x = mrFurious.x + random(1, -1);
    
    //mrFurious.y = mrFurious.y + random(10);


    // Draws the Annoying Bird
    push();
    noStroke();
    fill(annoyingBird.fill.r, annoyingBird.fill.g, annoyingBird.fill.b);
    triangle(annoyingBird.x1, annoyingBird.y1, annoyingBird.x2, annoyingBird.y2, annoyingBird.x3, annoyingBird.y3);
    pop();
  


    // Move the annoyingBird
    annoyingBird.x1 = annoyingBird.x1 + 1
    //annoyingBird.y1 = annoyingBird.y1 + 1
    annoyingBird.x2 = annoyingBird.x2 + 1
    //annoyingBird.y2 = annoyingBird.y2 + 1
    annoyingBird.x3 = annoyingBird.x3 + 1
    //annoyingBird.y3 = annoyingBird.y3 + 1
}