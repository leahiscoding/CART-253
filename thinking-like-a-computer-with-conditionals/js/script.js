/**
 * Thinking like a computer with conditionals
 * Pippin Barr
 * 
 * A simple program to make sure we understand conditionals.
 */

"use strict";

/**
 * Create the canvas
*/

let spider = {
    x: 200,
    y: 200,
    size: 50,
    speedX: 2,
    speedY: 4
}

function moveCircle() {
    spider.x += spider.speedX;
    spider.y += spider.speedY;
    // spider.x= spider.x + spider.speedX;

    if (spider.y > height || spider.y <0){
        //spider.x = 0;
        spider.speedY = spider.speedY *-1;
    }
    // if (spider. y < 0){
    //     //spider.y = 0;

    //     spider.speedY = spider.speedY *  -1;

    // }
    if (spider.x > width || spider.x <0 ) {
    //     //spider.x = 0;
    //     spider.speedY = spider.speedY * -1;
    // }
        //spider.x = 0;
        spider.speedX= spider.speedX * -1;
    }
}
    
// supposed to bounce back and forth



    // we can't do if (spider.y> height && spider.x> width) because it's independent variable

function setup() {
    createCanvas(600, 400);
}


function drawCircle() {
    push();
    fill("#ff0000");
    noStroke();
    ellipse(spider.x , spider.y, spider.size , spider.size);
    pop();
}

function draw () {
    background("#000000");

    drawCircle();
    moveCircle();
}
// you create a function you define a function, then you call a function as well in function draw




/**
 * Draw shapes based on conditions
 */

// function draw() {
//     background("#000000");

//     let x = 10;
//     let y = 20;

//     if (mouseX > && mouseY < 20) {
//         drawSquare();
//     }
// // do not wrap the if statement more than twice (or max 3 times) because it gets confusing
//     if ( mouseX >x) {
//         if (mouseY>y)d
//             drawCircle();
//     }

//     if ( clown === clown_2) {
//         if (mouseY>y){
//             drawSquare();
//         }
//     }

    /* && means and - both conditions have to be true
    || means or - one condition has to be true
    ! means not - the opposite of the condition
    */









    // Draw a square if the mouse is in the left third
    /* if mouse X is less than width * 0.33 then draw square
    we're comparing the left side with the right side*/
    
//     /* if we're using if statement we're using === three equal signs
//     */
//     if (mouseX < width * 0.33) {
//         drawSquare();
//     }

//     // Draw a circle if the mouse is in the right third
//     /* we always do top down > if this condition is false then we try something else. if this one fails, then we're coming to the second one
//     you cannot do this like else else because it wouldn't associate with the other one
//     you can also have it with no else
    
//     if this is true it's going to run the code, but otherwise it's not so you don't need to have either else or else if */
//     else if (mouseX > width * 0.66) {
//         drawCircle();
//     }
    
//     // Otherwise draw and X in the centre
//     else {
//         drawX();
//     }
// }
/* if statement will always true or false - if true do this, if false do something else
    else if - else if you have multiple conditions to check
    else - if none of the above are true, do this
    */
/* let clown = {
x:25,
y:50}

we wouldn't know if we're using = or == or ===
if (clown.x === 25) {
    // do something
} 
*/

/**
 * Draws a square on the left side of the canvas
 */
// function drawSquare() {
//     push();
//     fill("#ff0000");
//     noStroke();
//     rectMode(CENTER);
//     rect(width * 0.1666, height * 0.5, width * 0.33);
//     pop();
// }

// /**
//  * Draws a circle on the right side of the canvas
//  */
// function drawCircle() {
//     push();
//     fill("#ff0000");
//     noStroke();
//     ellipse(width * 0.8333, height * 0.5, width * 0.33);
//     pop();
// }

// /**
//  * Draws an X in the centre of the canvas
//  */
// function drawX() {
//     push();
//     stroke("#ff0000");
//     strokeWeight(10);
//     line(width * 0.33, height * 0.25, width * 0.66, height * 0.75);
//     line(width * 0.66, height * 0.25, width * 0.33, height * 0.75);
//     pop();
// }