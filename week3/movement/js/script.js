/**
 * Movement
 * Leah Song
 * 
 * Experimenting with movement
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: {
        x: 1,
        y: -2
    },
    minVelocity: {
        x: -3,
        y: -2
    },
    maxVelocity: {
        x: 3,
        y: 2
    },
    acceleration: {
        x: 0.025,
        y: -0.01
    }
    // velocity > how it's moving
    // acceleration > how the velocity is changing
    // acceleration is added and reframed the velocity
};


/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640,480);

}


/**
 * OMove the bird and display it
*/
function draw() {
    background(0);

    // Move the bird
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;
    // changing the variable by adding another variable 
    
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);  
    // constrain the velocity so it doesn't go too fast  

    bird.x += bird.velocity.x;
    bird.y += bird.velocity.y;
    // += is a shorthand for adding to a variable
    // by changing the velocity with acceleration

    // we can change the velocity of the bird

    // Draw the bird 
    push();
    fill(255,0,0);
    noStroke();
    ellipse(bird.x, bird.y, bird.size);
    pop();

}

/** bird.velocity = bird.velocity + bird.acceleration
 * bird.velocity += bird.acceleration
*/