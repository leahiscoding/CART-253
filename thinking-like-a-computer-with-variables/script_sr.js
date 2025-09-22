
let ellipseSize = 20;
let ellipseOffset = 4;
let backgroundColor = 0;
let otherVar = 100;

let eyeProperties = {
    eyeX:100,
    eyeY:200,
    eyeSize:200,
    eyeSpeed_x:1,
    eyeSpeed_Y:2
}

let eye_other_Properties = {
    eyeX:40,
    eyeY:100,
    eyeSize:30

}
// to assign a variable to an object, use a colon :

// do not mix a function and an object together because they're both variables. It'll make P5 confused.
// this is grouping variables together


// any variable declared outside of a function (a.k.a curly braces) is a global variable
// declare variables together and declare them at the top (by default) DO NOT declare variables all over your code.
// you cannot declare the same name to two different variables.
// DO NOT force VS code to do something else
// if your code is messy, Sabine will take the mark off grades. 

function setup() {
    createCanvas(600, 600);
    
    


}

function draw() {

    // greyed out > this variable is not being used
    backgroundColor = constrain(mouseX,0,255);
    background(0);
    eyeProperties.eyeSpeed_x = random(10,400)

    eyeProperties.eyeX=eyeProperties.eyeX+eyeProperties.eyeSpeed_x;
    eyeProperties.eyeY=eyeProperties.eyeY+eyeProperties.eyeSpeed_Y;
    eyeProperties.eyeX = constrain (eyeProperties.eyeX,0,200);
    // constrain(variable, min, max)
    eye();
    
  
    //backgroundColor = backgroundColor + 0.5;
    //push();
    //ellipseSize = ellipseSize+ellipseOffset;
    // this overwrites ellipse size
    //fill(255, 0, 0);
    // color of ellipse
    //ellipse(mouseX,mouseY,ellipseSize/5,ellipseSize/5);
    // x,y,width,height > width and height are in-bulit variables by p5.js 
    // you can use it as a substition of 600,600 > basiclally substituting
    //pop();


} 
// if I declare ellipseSize here, it's only available withtin draw function > {}

function eye(){
    console.log(eyeProperties.eyeX);
    console.log(eyeProperties_other.eyeX);
    push();
    fill(255, 0, 0);
    ellipse(eyeProperties.eyeX,
        eyeProperties.eyeY,
        eyeProperties.eyeSize,
        eyeProperties.eyeSize); 
    fill(255);
    ellipse(eyeProperties_other.eyeX,
        eyeProperties_other.eyeY,
        eyeProperties_other.eyeSize/2,
        eyeProperties_other.eyeSize/2); 
    pop();
}

// declaring is when I use the keyword "let". 