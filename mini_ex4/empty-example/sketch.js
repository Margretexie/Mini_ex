// This is the clm tracker
var ctracker;
// I used movement to check if the tracker is working
var movement;
// This is an array for the "matrix" effect
var num = ['0','1'];


function setup() {
  var capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.position(0,0);

  var canvas = createCanvas(640, 480);
  canvas.position(0,0);

  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);

}

function draw() {
  movement = ctracker.getScore();   // getScore() tells me how well the face is fitted, where 1 is perfect fit

  if (movement < 0.5){
    background(0,0,0,2);
    fill(0,250,0);
    textSize(15);
    text(random(num),random(0,640),random(0,480));
  } else {
    clear();
  }

}

function mousePressed(){
    console.log(movement);

}
