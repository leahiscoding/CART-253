const density = '10#$%^&*()_+-=[]{}|;:\'",.<>/?`~   ';

let video;
let asciiDiv;

function setup () {
    asciiDiv = createDiv ().id ('ascii-div');
    noCanvas();
    video = createCapture (VIDEO);
    video.size (190,120);
    video.position (CENTER);
    video.hide ();
}

function draw () {
    video.loadPixels ();
    let asciiImage = "";
    for (let j =0; j < video.height; j ++){
        for (let i =0; i < video.width; i ++){
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels [pixelIndex + 0];
            const g = video.pixels [pixelIndex + 1];
            const b = video.pixels [pixelIndex + 2];
            const avg = (r + g + b) / 48;
            const len = density.length;
            const charIndex = floor (map (avg, 0,255, 0,len));
            const c = density.charAt (charIndex);
           
            if (c === " "){
                asciiImage += "&nbsp;";
            }
            else {
                asciiImage += c;
            } 
        }
       
        asciiImage += '<br/>';
    }
     asciiDiv.html (asciiImage);
}

