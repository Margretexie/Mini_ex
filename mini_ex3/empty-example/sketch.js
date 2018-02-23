var speed = 1.5; //how can I change speed?
var xPos = 0;
var yPos = 250;

function setup() {
createCanvas(400,500);
background(0,30,30);
frameRate(60);
}

function draw() {
  // Grids
  for(var x = -50; x < width; x = x + 50){
    for(var y = -50; y < height; y = y + 50){
      stroke(0,120,120,2);
      line(x,y,x,height);
      line(x,y,width,y);
    }
  }
// Heartbeat monitor throbber
noStroke();
fill(0,220,220);
ellipse(xPos,yPos,8,8);
 xPos = xPos + speed;
 if(xPos > 150){
   yPos = yPos - 3;
 }
 if(xPos > 180){
   yPos = yPos + 6;
 }
 if(xPos > 230){
   yPos = yPos - 6;
 }
 if(xPos > 250){
   yPos = 250;
 }
 if(xPos >400){
   xPos = 0;
 }

// Millisecond count
 var millisecond = millis();
 textSize(25);
 fill(0,100,100,15);
 textAlign(CENTER);
 text(floor(millisecond), 50,400 );

// Fade
fill(1,5);
rect(0,0,width,height);

}

function mousePressed(){
  console.log(mouseX,mouseY);
}
