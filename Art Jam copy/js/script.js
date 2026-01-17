/**
 * Self-Portrait
 * Leah Song
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/* define properties of a raindrop—deciding what raindrop contains
 blueprint of a raindrop */
let rainDrop = {
    x: 0,
    y: 0,
    speed: 2,
    sizeH: 10,
    sizew: 5,
    color:{        
        r: 255,
        g: 0,
        b: 0
    }
}

// group == array == empty

let rainDropGroup = []


function setup(){

    createCanvas(600, 600);

    for(let rainDropCounter=0; rainDropCounter<300; rainDropCounter=rainDropCounter+1){
            rainDropGroup.push({
        x: random (0, width),
        y: random (0, height),
        speed: random (0.5,1),
        sizeH: 10,
        sizew: 5,
        color:{        
            r: random (0,255),
            g: random (0,255),
            b: random (0,255)
        }
        // this is now pushing 100 times
});
    }
//     rainDropGroup.push({
//         x: 0,
//         y: 0,
//         speed: 2,
//         sizeH: 10,
//         sizew: 5,
//         color:{        
//             r: 255,
//             g: 0,
//             b: 0
//         }
// });
//     rainDropGroup.push({
//     x: 20,
//     y: 0,
//     speed: 2,
//     sizeH: 10,
//     sizew: 5,
//     color:{        
//         r: 0,
//         g: 0,
//         b: 255
//     }
// });


}
// set up only works one time, but good place to set up the list of raindrops

/**
 * Canvas setup
 * it doesn't work until you call it
*/
function draw() {
    background(0);
    // draw
   drawRainDrop();
    // move
     moveRainDrop();
    //testEllipses(width/2, height/2, 100, 200, 5);
    // x, y, radius1, radius2, npoints
    // radius to define the size of the star
}

// action: make raindrop
function drawRainDrop() {
    // push();
    // noStroke();
    // // raindrop falls from the sky
    // fill(rainDropGroup[0].color.r, rainDropGroup[0].color.g, rainDropGroup[0].color.b);
    // rect(rainDropGroup[0].x, rainDropGroup[0].y, rainDropGroup[0].sizew, rainDropGroup[0].sizeH);
    // // raindrop.x because we already defined it in the blueprint
    // pop();

    // push();
    // noStroke();
    // // raindrop falls from the sky
    // fill(rainDropGroup[1].color.r, rainDropGroup[1].color.g, rainDropGroup[1].color.b);
    // rect(rainDropGroup[1].x, rainDropGroup[1].y, rainDropGroup[1].sizew, rainDropGroup[1].sizeH);
    // // raindrop.x because we already defined it in the blueprint
    // pop();
// instead of repeating the same code, we use a loop 

//for loop - for each rainDrop in the group draw each one
for(let position = 0 ; position<300 ; position=position+1)
    // no randomizing for loop
    /* position is the index of the array - position is in the group of the raindrops - how they're placed within the group
        trying to access specific element, raindrop, of the group*/
    {
    push();
    noStroke();
    fill(rainDropGroup[position].color.r, rainDropGroup[position].color.g, rainDropGroup[position].color.b);
    //rect(rainDropGroup[position].x, rainDropGroup[[position]].y, rainDropGroup[position].sizew, rainDropGroup[position].sizeH);
    // instead of putting number 0 or 1, we put position
    star (rainDropGroup[position].x, rainDropGroup[position].y, 5, 10, 5);
    pop();
    }
}

function moveRainDrop() {
//     rainDropGroup[0].y = rainDropGroup[0].y + rainDropGroup[0].speed;
//     if (rainDropGroup[0].y > height) {
//         // condition is true
//         rainDropGroup[0].y = 0;
//     }
//     // a loop–condition to reset the raindrop

//     rainDropGroup[1].y = rainDropGroup[1].y + rainDropGroup[1].speed;
//     if (rainDropGroup[1].y > height) {
//         // condition is true
//         rainDropGroup[1].y = 0;
//     }
//     // a loop–condition to reset the raindrop

// }

    for(let position = 0 ; position<300 ; position=position+1)
    {
    
     rainDropGroup[position].y = rainDropGroup[position].y + rainDropGroup[position].speed;
    if (rainDropGroup[position].y > height) {
        // condition is true
        rainDropGroup[position].y = 0;
        rainDropGroup[position].speed += random (0.5,0.6);
        // you need to add [position] to get particular raindrop
    }
    // checking if the height is greater than the canvas height
    // manipulating properties of each raindrop


    // instead of putting number 0 or 1, we put position
  
    }
}
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
// function testEllipses(x, y, radius1, radius2, npoints) {
//     let angle = TWO_PI / npoints;
//     let halfAngle = angle / 2.0;
//     for (let a = 0; a < TWO_PI; a += angle) {
//       let sx = x + cos(a) * radius2;
//       let sy = y + sin(a) * radius2;
  
//       push();
//       noStroke();
//       fill(255, 0, 0);
//       ellipse(sx, sy, 10, 10);
//       pop();
  
//       let sm_x = x + cos(a + halfAngle) * radius1;
//       let sm_y = y + sin(a + halfAngle) * radius1;
  
//       push();
//       noStroke();
//       fill(0, 0, 255);
//       ellipse(sm_x, sm_y, 10, 10);
//       pop();
//     }
//     push();
//     noFill();
//     stroke(255);
//     ellipse(x, y, radius1 * 2, radius1 * 2);
//     ellipse(x, y, radius2 * 2, radius2 * 2);
//     pop();
//   }