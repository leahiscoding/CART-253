// ASCII camera video capture
const density = '10pressabuttonatosavephoto   ';

let video;
let asciiDiv;
let cameraSound;

// preload function
function preload (){
    cameraSound = loadSound('assets/sounds/camera.mp3');
}
// setup function
function setup () {
    asciiDiv = createDiv ().id ('ascii-div');
    noCanvas();
    video = createCapture (VIDEO);
    video.size (260,110);
    video.position (CENTER);
    video.hide ();
}
// draw function
function draw () {
    video.loadPixels ();
    // create ascii image string
    let asciiImage = "";
    // loop through pixels
    for (let j =0; j < video.height; j ++){
        for (let i =0; i < video.width; i ++){
            // get pixel index
            const pixelIndex = (i + j * video.width) * 4;
            // get r g b values
            const r = video.pixels [pixelIndex + 0];
            const g = video.pixels [pixelIndex + 1];
            const b = video.pixels [pixelIndex + 2];
            // average brightness
            const avg = (r + g + b) / 48;
            // map avg to density string
            const len = density.length;
            // get character index
            const charIndex = floor (map (avg, 0,255, 0,len));
            // get character from density string
            const c = density.charAt (charIndex);
           // if space, add &nbsp; for html
            if (c === " "){
                asciiImage += "&nbsp;";
            }
            // else add character
            else {
                asciiImage += c;
            } 
        }
       // new line after each row
        asciiImage += '<br/>';
    }
    // display ascii image in div
     asciiDiv.html (asciiImage);
}
// save image when 'a' key is pressed
function keyPressed() {
  if (key === 'a' || key === 'A' ) {
     html2canvas(document.querySelector("#ascii-div")).then(canvas => {
    //canvas.id = "testCanvas"
    //document.body.appendChild(canvas)
    const dataURL = canvas.toDataURL('image/png');
    // save the data into a canvas image file
    // You can specify 'image/jpeg' or 'image/webp' for other formats
    const link = document.createElement('a');
    // create a tag to download the image
    link.href = dataURL;
    link.download = 'ascii.png'; 
    link.click(); // Simulate a click on the link to trigger the download

    cameraSound.play(); // play camera sound

    }); 
  }
}