var pupils= {
  pLX: 100,
  pRX: 400
};

var reflect= {
 rLX: 100,
 rRX: 400
}

var on = false;
var r;
var speed = 0.5;
var x;
var y;
var img;
var Musman;
function preload(){
 img = loadImage('Images/mus.png');
 man1 = loadImage('Images/Burgundy.jpg');
 man2 = loadImage('Images/Brad_Pitt.jpg');
 man3 = loadImage('Images/Chaplin.jpg');
 man4 = loadImage('Images/David_Beckham.jpg');
 man5 = loadImage('Images/Einstein2.jpg');
 man6 = loadImage('Images/freddie_Mercury.jpg');
 man7 = loadImage('Images/Gandhi.jpg');
 man8 = loadImage('Images/Hitler.jpg');
 man9 = loadImage('Images/Hulk_Hogan.jpg');
 man10 = loadImage('Images/James_Franco.jpg');
 man11 = loadImage('Images/Johnny_Depp2.jpg');
 man12 = loadImage('Images/La_Cour3.jpg');
 man13 = loadImage('Images/Mario2.jpg');
 man14 = loadImage('Images/Ned_Flanders.jpg');
 man15 = loadImage('Images/Ryan_Gosling.jpg');
 man16 = loadImage('Images/Salvador_Dali.jpg');
 man17 = loadImage('Images/Stalin.jpg');
 man18 = loadImage('Images/Tom_Selleck.jpg');
 man19 = loadImage('Images/Tony_Stark.jpg');
}


function setup() {
createCanvas(500,450);
// This is an Arrey
Musman = [man1,man2,man3,man4,man5,man6,man7,man8,man9,man10,man11,man12,man13,man14,man15,man16,man17,man18,man19];
}

function draw() {
 background(240,230,140,200);
 frameRate(60);

 // Cheeks
 fill(255,120,100,30);
 ellipse(100,225,100,50);
 ellipse(400,225,100,50);

 // Eyes
 fill(255);
 ellipse(100,100,150,150);
 ellipse(400,100,150,150);

 // Mouth
 fill(255,100,90);
 if (mouseX >224 && mouseX <273 && mouseY >152 && mouseY <249){
  ellipse(220,330,80,80,80);
} else{
  arc(220,330,100,100,50,PI + QUARTER_PI, CHORD);
}

// Moustache
push();
imageMode(CENTER);
rotate(radians(10));
translate(280,240)
image(img,0,0,300,100,0,0,500,125);//image(img,dx,dy,dWidth,dHeight,sx,sy,[sWidth],[sHeight])
pop();

// Pupils
 fill(0,0,0);
 ellipse(pupils.pLX,100,100,100);
 ellipse(pupils.pRX,100,100,100);

// This makes it move
 pupils.pLX = pupils.pLX + speed;
 pupils.pRX = pupils.pRX + speed;

// This makes it bounce back
if(pupils.pLX > 125 || pupils.pLX < 75){
 speed = speed * -1;
}

// Reflection in Eyes
 fill(255)
 ellipse(reflect.rLX+20,80,20,20);
 ellipse(reflect.rRX+20,80,20,20);

// This makes it move, speed as pupils
 reflect.rLX = reflect.rLX + speed;
 reflect.rRX = reflect.rRX + speed;

// Man Botton
if (on){
  imageMode(CENTER);
  background(255);
  if(r==0){
    x= 230;
    y=190;
  }
  if(r==1){
    x=250;
    y=290;
  }
  if(r==2){
    x=250;
    y=330;
  }
  if(r==3){
    x=240;
    y=235;
  }
  if(r==4){ //do something
    x=250;
    y=240;
  }
  if(r==5){
    x=280;
    y=180;
  }
  if(r==6){
    x=260;
    y=210;
  }
  if(r==7){
    x=310;
    y=240;
  }
  if(r==8){
    x=255;
    y=445;
  }
  if(r==9){
    x=290;
    y=200;
  }
  if(r==10){
    x=245;
    y=225;
  }
  if(r==11){
    x=250;
    y=75;
  }
  if(r==12){
    x=250;
    y=190;
  }
  if(r==13){
    x=250;
    y=330;
  }
  if(r==14){
    x=340;
    y=300;
  }
  if(r==15){
    x=250;
    y=225;
  }
  if(r==16){
    x=270;
    y=235;
  }
  if(r==17){
    x=225;
    y=215;
  }
  if(r==11){
    x=225;
    y=225;
  }
  if(r==18){
    x=255;
    y=200;
  }
  if(r==19){
    x=225;
    y=225;
  }
  image(Musman[r],x,y);
  console.log(r);
}

// Nose
noStroke();
fill(255,120,100);
if (mouseX >224 && mouseX <273 && mouseY >152 && mouseY <249){
   fill(250,100,80);
}
triangle(225,250,250,150,275,250);

// Nose Shadow
fill(255,100,90);
if (mouseX >224 && mouseX <273 && mouseY >152 && mouseY <249){
 fill(250,80,70);
}
triangle(260,250,250,150,275,250);


}


function mousePressed(){
   if (mouseX >224 && mouseX <273 && mouseY >152 && mouseY <249){
     r = floor(random(19));
     on = ! on;
   }
console.log(mouseX,mouseY);
}
