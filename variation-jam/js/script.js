/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let usernameBox;
let passwordBox;
let button;
let greeting;





/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    background (0);
    createCanvas (windowWidth, windowHeight);
    
    usernameBox = createInput ();
    usernameBox.attribute('Placeholder', 'Enter Username');
    usernameBox.position (windowWidth/2, windowHeight/2);
    // questions

    passwordBox = createInput ();
    passwordBox.attribute('Placeholder', 'Enter Password');
    passwordBox.position (windowWidth/2, windowHeight/2+50);
    // questions

    button = createButton ('enter');
    button.class ("");
    button.position (windowWidth/2, windowHeight/2+100);
    button.mousePressed (login);
}






function login (){
    let username = usernameBox.value ()
    let password = passwordBox.value ()
    
    if (username == "user" && password == "pass") {
        localStorage.setItem ("username", username);
        localStorage.setItem ("password", password);
        window.open (script2.js)
}
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
