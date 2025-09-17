/**
 * Instruction Challenge
 * Leah, Norah
 * 
 * Creating a beautiful landscape usign p5.js 
 */

"use strict";

/**
 * creates the canvas
*/
function setup() {
    createCanvas(640,480);
}

/**
 * draws a house and it's environment
 */
function draw() {
    background(77,60,158);
    //sky

    // moon
    fill(255, 223, 0);
    noStroke();
    arc(500, 100, 80, 80, 0, PI + QUARTER_PI, PIE);

        // left arm
        push();
        translate(100, 300);
        rotate(PI/6);
        fill(210,180,140);
        rect(0, 0, 30, 200);
        pop();
        push();
        translate(100, 300);
        rotate(PI/-3);
        fill(210,180,140);
        rect(0, 0, 30, 200);
        pop();

          // right arm
        push();
        translate(20, 20);
        rotate(-PI/6);
        fill(210,180,140);
        rect(275, 500, 30, 200);
        pop();
        push();
        translate(522, 280);
        rotate(PI/3);
        fill(210,180,140);
        rect(0,0, 30, 200);
        pop(); 

        /* sabine's explanation
        push();
        translate(500,300);
        rotate(radians(-30));
        fill(210,180,0);
        rect(0, 0, 30, 200);
        pop(); */


    // grass
    push();
    fill(37,112,122);
    rect(0, 400, 640, 80);
    pop();

    // fingers
    push();
    fill(210,180,140)
    ellipse(30,400,20);
    ellipse(50,400,20);
    ellipse(70,400,20);
    ellipse(90,400,20);
    pop();
    push();
    fill(210,180,140)
    ellipse(610,400,20);
    ellipse(590,400,20);
    ellipse(570,400,20);
    ellipse(550,400,20);
    pop();

    // house
    push();
    fill(210,180,140);
    rect(220, 250, 200, 150);
    pop();

    // roof
    push();
    fill(87,65,55);
    pop();
    //chimney
    push();
    rect(220, 160, 40, 80)
    triangle(200, 250, 440, 250, 320, 150);
    pop();
    // door
    push();
    fill(105,48,59);
    rect(290, 320, 60, 80);
    pop();  
    // door knob
    push();
    fill(122,95,59);
    circle(340,360,10);
    pop();
    // windows
    push();
    fill(235,210, 36);
    rect(260, 280, 30, 30);
    rect(350, 280, 30, 30);
    pop();
    
   
  
    // tree trunk
    /*fill(87,65,55);
    rect(100, 300, 30, 100);*/

    // tree foliage
   /* fill(37,112,122);
    circle(115, 250, 80);
    circle(70,270, 60);
    circle(160,270,60);
    circle(115,290,60); */

}
