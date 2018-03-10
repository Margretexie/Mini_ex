let player;
var balls = [];
var lvl = 1;

function preload(){
  bg = loadImage('pic/background.jpg');
  music = loadSound('audio/Walking In A Winter Wonderland.mp3');
}

function setup() {
  createCanvas(640,320);
  music.play();
  player = new Player(width/2,height/1.13,20,2);
  for(var i=0; i<150 ;i++){
    balls [i] = new Ball(random(0,width),0,color(255),5,random(3,4));
    }
  angleMode(DEGREES);
/*  var musicbutton = createButton('Music off',600,20);
    musicbutton.mousePressed(music.setVolume(0));
*/
}

function draw() {
  image(bg,0,0,width,height,0,0,width,140);
  noStroke()
  fill(135,205,250);
  rect(0,height/1.03,width,height);
  fill(180);

  player.show();
  player.move();

  for (var i=0; i<lvl; i++){
    balls[i].show();
    balls[i].drop();
    var hit = balls[i].hits(player);
  }

//lvl goes up every 5 second
  if(frameCount%320==0){
    lvl = lvl + 1;
  }
  textSize(15);
  textFont('Impact');
  text('Level:'+ lvl, 10,20);
}



class Player{
  constructor(xpos, ypos, size, speed){
  this.xpos = xpos;
  this.ypos = ypos;
  this.size = size;
  this.speed = speed;
  }
  show(){
    noStroke();
    fill(250,220,120); //face
    ellipse(this.xpos, this.ypos, this.size,this.size);
    fill(255,70,70); //clothes
    ellipse(this.xpos, this.ypos-this.size/1.7, 7,7);
    ellipse(this.xpos, this.ypos+this.size,this.size+2);
    arc(this.xpos,this.ypos,this.size+3,this.size+2,175,365);
    fill(255,150,0); //scarf
    rect(this.xpos-this.size/2.2, this.ypos+this.size/2.4, this.size-2, 4);
    fill(150,50,50); //buttons
    ellipse(this.xpos, this.ypos+15,2,2);
    ellipse(this.xpos, this.ypos+20,2,2);
    ellipse(this.xpos, this.ypos+25,2,2);
  }
  move(){
    if(keyCode === RIGHT_ARROW){
      this.xpos = this.xpos + this.speed;
    } else if (keyCode === LEFT_ARROW){
      this.xpos = this.xpos - this.speed;
    }
    if(this.xpos > width){
      this.xpos = 0;
    } else if (this.xpos < 0 ){
      this.xpos = width;
    }
  }
}

class Ball{
  constructor(xpos, ypos, getcolor, size, speed){
  this.xpos = xpos;
  this.ypos = ypos;
  this.getcolor = getcolor;
  this.size = size;
  this.speed = speed;
  }
  show(){
    fill(this.getcolor);
    noStroke();
    ellipse(this.xpos, this.ypos, this.size, this.size);
  }
  drop(){
    this.ypos += this.speed;
    if(this.ypos > height-20){
      this.ypos = 0;
      this.xpos = random(0,width);
      }else if (this.ypos < 0){
        this.ypos = height;
      }
    }
  hits(player){
    if (dist(this.xpos, this.ypos, player.xpos, player.ypos) < (this.size/2)+(player.size/2) ){
        frameRate(0);
        push();
        textSize(30);
        textAlign(CENTER);
        textFont('Impact');
        text('Game over',width/2,height/2);
        pop();
        music.setVolume(0.5);
        return true;
      } else {
        return false;
    }
  }
}
