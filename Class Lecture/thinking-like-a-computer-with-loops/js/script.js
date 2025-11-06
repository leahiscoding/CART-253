// /**
//  * Thinking like a computer with loops
//  * Pippin Barr
//  */

// "use strict";


//     // // Draw some circles
//     // let x = 0;
//     // const y = height / 2;
//     // while (x <= width) {
//     //     push();
//     //     stroke(255);
//     //     ellipse(x, y, 10);
//     //     pop();

//     //     x += 50;
//     // }

//     // // Draw some more circles
//     // x = width / 2;
//     // for (let y = 0; y <= height; y += 50) {
//     //     push();
//     //     noFill();
//     //     stroke(255);
//     //     ellipse(x, y, 15);
//     //     pop();
//     // }


// /**
//  * Create a canvas
// */
// function setup() {
//     createCanvas(500, 500);
//     noStroke()
// }


// /**
//  * Draw some loopy things
// */
// function draw() {
// background(0);
// //     let y = height / 2;
// //     let x = 0;
// //     let rectWidth = 50;
// //     fill (255, 0, 0)

// //     while (x < width) {
// //         rect(x, y, rectWidth, rectWidth);
// //         x += rectWidth;
// //     }
// // }

// // let x_2 = 0;
// // while (y < height) {
// //     rect(x_2, y, rectWidth);
// //     // terminating condition
// //     // y += rectWidth;
// // }

// // let i=0
// // for(let i=0; i< 20; i+= 1 ){
// //   // as long as i is less than 20 it will go through the loop
// //   // i + i+1 or -1 = > i++ i--
// // }
// // }
// // /*  let y = 50;
// //     for (1: let y=0; y < height; y += rectWidth)or 
// //         (2:let i=0; i< 20; i++){
// //     { fill(255, 0, 0)
// //      // to draw fill with gradient
// //         fill (i*20)
// //     1:rect(x,y, rectWidth, rectWidth)
// //     2:rect(x, y*i, rectWidth)
// //     // y is always 50 but we're offsetting by i each time
// //     text (i, x, y*i)

// // /* use forloop to draw a gradient
// //     }

// // } */    

// // let rectWidth = 50;
// // let x=10;

// // let startColor = color(255, 0, 0); // 0%
// // let endColor = color(0, 0, 255); // 100%
// // // let c = lerpColor(startColor, endColor, .5)
// // // fill(c)
// // rect (10,10,50)

// // // use i loop to maek a gradient from red to blue
// // for (let i = 0; i < 10; i++){
// //     let percent = i/10
// //     let c =lerpColor(startColor, endColor, percent)
// //     fill(c)
// //     rect(50*i,10,50)
// // }
// // }

// // i.g., making a grid of rectangles (row / column)
// const CELL_SIZE = 20;
// // my rect size
// const NUM_COLS = 500 / CELL_SIZE;
// // num_cols > number of columns
// const NUM_ROWS = 500 / CELL_SIZE;

//     rectMode(CORNER)
// // for (let x=0; x< NUM_COLS; x++){
// //         // nested for loop (keep one per code)
// //     fill ("#ff0000");
// //     rect(CELL_SIZE*x, 0, CELL_SIZE)
// // }

// for (let y=0; y< NUM_COLS; y++){
//     // nested for loop (keep one per code)
// fill ("#ff0000");
// for(x=0; x< NUM_ROWS; x++){
//     rect(CELL_SIZE*x, CELL_SIZE*y, CELL_SIZE)
// // rect(0,CELL_SIZE*y, 0, CELL_SIZE)
// // rect(20,CELL_SIZE*y, 0, CELL_SIZE)
// // rect(40,CELL_SIZE*y, 0, CELL_SIZE)
// // rect(60,CELL_SIZE*y, 0, CELL_SIZE)
// // inside of for loop there is a nested statement over and over again
// }
// }
// }

// ask sabine about rectmode and x not being define

let shrooksArray= [30,70,50,60,45,23]
// 30 = 0 70=1 50=2 60=3 45=4 23=5]
for(let i=0; i<shrooksArray.length; i++){
    // let i=shrooksArray.length-1; i>=0; i-- > to go backwards
    console.log (shrooksArray)
}
