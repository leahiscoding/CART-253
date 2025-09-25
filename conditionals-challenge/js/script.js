/**
 * Circle Master
 * Leah Song, Norah Wilcox
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

    const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
  };
  
    const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
  };

    const target = {
    x: 30, 
    y: 30,
    size : 50,
    fill: "#65FF00",
    fills: {
        noOverlap: "#65FF00",
        overlap: "#A200FF"
    }
    };

  
  /**
   * Create the canvas
   */
  function setup() {
    createCanvas(400, 400);
  }
  
  /**
   * Move the user circle, check for overlap, draw the two circles
   */
  function draw() {
    background("#aaaaaa");
    
    // Move user circle
    moveUser();
    
    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();
    movePuck();
    checkTarget();
  }
  
  /**
   * Sets the user position to the mouse position
   */
  function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
  }
  
  /**
   * Displays the user circle
   */
  function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
  }
  
  /**
   * Displays the puck circle
   */
  function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
  }

  function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
  }

   function movePuck() {
     const d = dist (user.x, user.y, puck.x, puck.y);
     // the distance between the centers of the circles are smaller than /2

     const overlap = (d < user.size / 2 + puck.size / 2);
     // d is distance
     if (overlap && user.x > puck.x) {
         puck.x = puck.x - 1;
     }
     else if (overlap && user.x < puck.x) {
         puck.x = puck.x + 1;
     }
     if (overlap && user.y > puck.y) {
         puck.y = puck.y - 1;
     }
     else if (overlap && user.y < puck.y) {
         puck.y = puck.y + 1;
   }
}

 function checkTarget(){
        const d = dist (puck.x, puck.y, target.x, target.y)
        // the distance between the centres of the puck and the target
        const overlap = (d < puck.size / 2 + target.size / 2);
     if (overlap) {
        console.log(target.fill);
        target.fill = target.fills.overlap;
        } else {
        target.fill = target.fills.noOverlap;
    }
 }

