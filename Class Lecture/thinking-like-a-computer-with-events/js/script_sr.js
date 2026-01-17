/**
 * Thinking like a computer with events
 * Pippin Barr
 * 
 * A small project for exploring how events work!
*/

"use strict";

// this area is called the global scope
let face = {
        x: 0, 
        y: 0,
        /*can't do width/2 height/2 here because width and height aren't defined yet 
        we're not in setup or draw
        a variable has a scope > where it's valid it's within the curly braces which is defined
        therefore, the variable only exists inside the setup, so when we try to retrieve it from draw, it won't find it 
        we have to define things separately*/
        size: 20,
        color:"#15ff00ff",
        isGreen: true
    }

let face_2 = {
        x: 100, 
        y: 100,
        size: 50,
        color:"#0000FF",
        isGreen: true
}

 let face_3 = {
        x: 100, 
        y: 100,
        size: 50,
        color:"#0000FF",
        isGreen: true,
        rectBoolean: false

}
/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
    face.x = width/2;
    face.y = height/2;
    /* it's allowed to do
    let face = {
        x: width/2,
        y: height/2,
        size: 20,
        color:"#0000FF"
    here because it's a different scope but it'll give you a 0 because it's using the width and height in the global scope
    you thought you were using the global one but you're using the local one becasue you're using the global one
    when something doesn't work, just console.log > log the variable
    }*/
   setTimeout (timeEvent, 5000)
   // you can have as many time events as possible!
}

function timeEvent (){
    console.log ("timer was triggered")
    face_3.rectBoolean = true;
}
/**
 * Draw a rectangle
*/
function draw() {
    // console.log (millis()) > keeps track of how many milliseconds occured since the beginning of the program
    background ("#eaff00ff")
    push();
    fill (face.color);
    noStroke();
    ellipse(face.x, face.y, face.size, face.size, face.size);
    pop();
    // mousePressed(); > basically calling it automatically all the time which is not what we want
   
    push();
    fill (face_2.color);
    noStroke();
    ellipse(face_2.x, face_2.y, face_2.size, face_2.size, face_2.size);
    pop();

    if(face_3.rectBoolean===true){
    push();
    fill (face_3.color);
    noStroke();
    rect(face_3.x, face_3.y, face_3.size, face_3.size);
    pop();
    }


}
function mousePressed(){
    // it gets called automatically by p5 when the mouse is pressed
    // the functions are only based ont eh canvas
    // face.x=mouseX
    // face.y=mouseY
    // if I press anywhere I want my ellipse to change the color
    let distance = dist(face.x, face.y, mouseX, mouseY)

    // switch something to a new state and switch back to where it was
   
    if (distance < face.size/2){
        // check if the face is green
        if (face.isGreen === true){
            face.color = "#d217d5ff"
            face.isGreen = false;
        }

    
    else {
        face.color = "#15ff00ff"
        //face.isGreen = true;
    }

    //alternatively
    face.isGreen = !face.isGreen;
    /*alternative to face.isGreeen= true because it's a negation 
    does not equal to != face.isGreen because it means it does not equal to 
    be careful and put the ! on the other side 
    unary operator > only applies to face.isGreen */

    }
}

function keyPressed(event){
    // every time the key is pressed the event object will be pressed by the browser and the function keypressed will hold this event object
    // use the standard event function
    if (event.key === "q")  {
        face_2.x += 2
    }
    else if (event.key === "f"){
        face_2.x -=2
    }
}

// arguments inside of function 
/* (event) > event argument is inside of the function */

// try to do things in small chunks and make a small list of things for yourself that you want to do
// make sure what is needed
