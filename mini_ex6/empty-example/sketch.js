var fans = [];

function setup() {
  createCanvas(windowHeight,windowHeight); // Both set to be height so the computer don't overwork itself
  background(255);
  frameRate(40);
  angleMode(DEGREES);
  for(var i = 0; i < 400; i++){
    //Attributes of the fan: r,g,b,xpos,ypos,w,h,start,stop (see class fan in line 29)
    fans[i] = new Fan(random(100),random(100,250),random(100,250),random(0,width),random(0,height),random(50,200),random(50,200),random(-360,0),random(-360,0));
  }
}

function draw() {
  //RULES: Draw a lot of fans. Make them jiggle. Change color with mouse movement.
  for (var i=0; i<fans.length; i++){
    fans[i].show();
    fans[i].move();
    fans[i].change();
  }

  //Calculates the distance of mouseposition for every frame
  var xspeed = abs(winMouseX - pwinMouseX);
  var yspeed = abs(winMouseY - pwinMouseY);
  if(xspeed > 250 || yspeed > 250){
    setup(); //it's like refreshing... maybe this function is a bit overkill
  }
}

class Fan {
  constructor(r,g,b,xpos,ypos,w,h,start,stop){
    this.r = r;
    this.g = g;
    this.b = b;
    this.xpos = xpos;
    this.ypos = ypos;
    this.w = w;
    this.h = h;
    this.start = start;
    this.stop = stop;
  }
  show(){  //This is how 1 fan looks like, details are decided in line 10
    noStroke();
    fill(this.r,this.g,this.b,8);
    arc(this.xpos,this.ypos,this.w,this.h,this.start,this.stop);
  }
  move(){ //This makes the fans jiggle
    this.xpos +=random(-20,20);
      if(this.xpos == width || this.xpos == 0){ //This makes sure the fans don't run off canvas, I make them bounce in the other direction when hit borders
        this.xpos = this.xpos * -1;
      }
    this.ypos +=random(-20,20);
      if(this.ypos == width || this.ypos == 0){
        this.ypos = this.ypos * -1;
      }
  }
  change(){ //Change color by moving mouse left or right
    var rval = map(mouseX,0,width,0,255);
    this.r = rval;
  }
}
