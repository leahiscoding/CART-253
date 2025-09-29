/**
 * Death by Boredom
 * Pippin Barr
 * 
 * A creature that can die of boredom...
 */

"use strict";

// Our creature
const creature = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 200,
    // Fill
    fill: "#000000", // Starts out bored
    // Possible fills for the creature that show its mood
    // We'll need these when we start changing its colour
    // and its nice to keep them along with all the other info
    // about the creature
    fills: {
        bored: "#000000", // Black
        happy: "#33cc33", // Green
        angry: "#cc3333", // Red
        dead: "#777777" // Grey
    },
    // is the creature alive? using boolean to track this
    alive: true,
    // How bored is the creature?
    boredomLevel: 0,
    // How bored can the creature get before it dies?
    deathByBoredomThreshold: 500
};

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Fills the background, displays the creature 
 */
function draw() {
    background(255, 200, 127);

    checkInput();
    drawCreature();
}


/**
 * Creature is happy if being massaged and otherwise bored
 */
// check if the creature is being bored 
// if the creature is dead we don't want to check the input
function checkInput() {
    // Check if the creature is dead, and if so then don't do anything
    if (!creature.alive) {
        return;
        //return means stop running this function right now—no more input
    }

    // Calculate the distance between the cursor and the creature
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < creature.size / 2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    // Check if the mouse if over the creature and moving
    if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the creature AND it's moving
        // So the creature is happy! Massage!
        creature.fill = creature.fills.happy;
    }
    else {
        // Otherwise the creature is bored
        creature.fill = creature.fills.bored;
        // one frame of boredom is getting added—creature gets a little bit more bored
        creature.boredomLevel += 1;
        // if the boredom level is over the threshold, the creature dies
        //reasonable place to check if the boredom level is greater than the threshold
        if (creature.boredomLevel >creature.deathByBoredomThreshold) {
            // Creature dies of boredom
            creature.alive = false;
            // Creature looks dead by setting its fill to dead fill
            creature.fill = creature.fills.dead;
        }
    }
}

/**
 * Handles the creature becoming happy
 */
function creatureHappy() {
    creature.fill = creature.fills.happy;
}

/**
 * Draws the creature
 */
function drawCreature() {
    push();
    noStroke();
    // Use the creature's fill
    fill(creature.fill);
    // Display the creature at its position and size
    ellipse(creature.x, creature.y, creature.size);
    pop();
}