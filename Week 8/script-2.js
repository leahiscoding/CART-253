


let color = "#ff0000";
let color2="#00d9ffff";
let color3="#00ff26ff";

let colors = ["#ff0000","#00d9ffff","#00ff26ff","#acc3b0ff"];
let boxes = []; //empty list
//console.log(boxes.length)



function createBox(){
    let box = {
    x:random(10,400),
    y:random(10,400),
    size:20,
    color:{
        r: random(255),
        g:random(255),
        b:random(255)

    }

}
return box;

}
/**
 * Create the canvas and adds circles to our array
*/
function setup() {
    createCanvas(500, 500);

    // boxes[0] = createBox();
    // boxes[1] = createBox();
    // boxes[2] = createBox();
    // console.log(boxes.length)

    // boxes.push(createBox())
    //  boxes.push(createBox())
    //   boxes.push(createBox())

      for(let i=0;i<10;i=i+1){
        console.log(i)
        boxes.push(createBox())

      }

}


/**
 * Display the contents of the array
*/

function draw() {
    
    background(0);
    // fill(colors[0]);
    // rect(20,20,10,10);
    
    // fill(color2);
    // rect(80,20,10,10);

    // fill(color3);
    // rect(100,20,10,10);

    // text(colors.length, width/2, height/2)
    // displayBox(boxes[0]);
    //  displayBox(boxes[1]);
    //   displayBox(boxes[2]);
    //  for(let i=0;i<boxes.length;i=i+1){
    //     displayBox(boxes[i])

    //   }

      for (let box of boxes){
         displayBox(box)

      }

       for(let i=0;i<boxes.length;i=i+1){
        moveBox(boxes[i])

      }
   
}

function moveBox(tempBox){
    tempBox.x++;
}

function displayBox(tempBox){
    fill(tempBox.color.r,tempBox.color.g,tempBox.color.b);
    rect(tempBox.x,tempBox.y,tempBox.size,tempBox.size);
    
}

function mousePressed()
{
    let box = createBox()
    box.x=mouseX;
    box.y = mouseY;
    boxes.push(box)
    console.log(boxes.length)
}


