






function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,150,255);

// roof 
stroke(0);
fill(100,100,0);
triangle(85, 150,327,152,200,40);

//house frame
fill(0,0,230);
rect(85,150,240,250);

//door
fill(100,0,100);
rect(150,250,75,150);

//door knob
fill(255,255,0);
ellipse(160,330,10,10);

//sun
noStroke();
fill(255,255,0);
ellipse(0,0,150,150)

}