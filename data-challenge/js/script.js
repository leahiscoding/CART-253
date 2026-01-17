/**
 * Data Challenge
 * Leah Song
 * 
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
function preload() {
    carData = loadJSON("assets/data/cars.json");
    dinosaurData = loadJSON("assets/data/dinosaurs.json");
    langData = loadJSON("assets/data/lang.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
    if (lang === "fr") {
        carName = langData.instructions.fr;
    }
    else if (lang === "en") {
        carName = langData.instructions.en;
    }
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);
    mousePressed();
    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

    const cars = carData.cars;
    const dinosaurs = dinosaurData.dinosaurs;
    if (mouseIsPressed) {
        carName = random (cars) + " " + random (dinosaurs);
    }

}