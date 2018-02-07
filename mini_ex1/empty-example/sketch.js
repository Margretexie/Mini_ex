function setup() {
createCanvas(500,500);
background(240,230,140,200);
// put setup code here
}

function draw() {

// Nose
noStroke();
fill(255,120,100);
triangle(225,250,250,150,275,250);

// Eyes
fill(255);
ellipse(100,100,150,150);
ellipse(400,100,150,150);

// Pupils
fill(0,0,0);
ellipse(100,100,100,100);
ellipse(400,100,100,100);

// Reflection in Eyes
fill(255)
ellipse(125,80,20,20);
ellipse(425,80,20,20);

// Mouth
fill(255,120,100);
arc(200,330,100,100,0,PI + QUARTER_PI, CHORD);

}
