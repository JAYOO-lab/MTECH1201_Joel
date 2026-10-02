/* Joel J
Glowing space flowers


My theme for this short study was glowing space nature. My code allows the user to plant glowing flowers in the sky

Instructions:
Move the mouse to move the floating light bugs
Click mouse to plant new glowing flower
Press "c" key to clear the flowers from the screen
*/

// Variables for flowers
let flowerX = [];
let flowerY = [];
let flowerSize = [];
let flowerColorR = [];
let flowerColorG = [];
let flowerColorB = [];

// Variables for background stars
let starX = [];
let starY = [];

// Variables for bugs
let bugX;
let bugY;

function setup() {
  createCanvas(800, 600);

  // custom function 1: Make stars at start
  makeStars();

  // start bugs in the middle
  bugX = width / 2;
  bugY = height / 2;
}

function draw() {
  // dark space background
  background(15, 15, 35);

  // Draw background stars
  drawStars();

  // Draw all flowers
  for (let i = 0; i < flowerX.length; i++) {
    drawFlower(flowerX[i], flowerY[i], flowerSize[i], flowerColorR[i], flowerColorG[i], flowerColorB[i]);
  }

  // Draw the floating light bugs
  drawBug();

  // Instructions text
  fill(255);
  textSize(16);
  text("Click to plant a flower | Move mouse to control glowing bug | Press 'c' to clear flowers", 20, 20);
}

// Custom function 1: Randomize stars in array
function makeStars() {
  for (let i = 0; i < 50; i++) {
    starX[i] = random(width);
    starY[i] = random(height);
  }
}

// Custom function 2: Draw a flower at a position
function drawFlower(x, y, size, r, g, b) {
  // stem
  stroke(50, 200, 100);
  strokeWeight(4);
  line(x, y, x, y + 50);

  // Glow circle behind flower
  noStroke();
  fill(r, g, b, 80);
  ellipse(x, y, size + 20, size + 20);

  // flower petals (top, bottom, left, right)
  fill(r, g, b);
  ellipse(x - size / 2, y, size, size / 2);
  ellipse(x + size / 2, y, size, size / 2);
  ellipse(x, y - size / 2, size / 2, size);
  ellipse(x, y + size / 2, size / 2, size);

  // center of flower
  fill(255, 230, 100);
  ellipse(x, y, size / 2, size / 2);
}

// helper function to draw the stars
function drawStars() {
  fill(255);
  noStroke();
  for (let i = 0; i < starX.length; i++) {
    ellipse(starX[i], starY[i], random(2, 5), random(2, 5));
  }
}

// Draw the floating light bugs
function drawBug() {
  // move the bug to the mouse position
  bugX = lerp(bugX, mouseX, 0.05);
  bugY = lerp(bugY, mouseY, 0.05);

  // add random wobble
  bugX += random(-2, 2);
  bugY += random(-2, 2);

  // draw bug
  fill(100, 255, 200, 100);
  ellipse(bugX, bugY, 10, 10);
}

// mousePressed function to plant a flower
function mousePressed() {
  flowerX.push(mouseX);
  flowerY.push(mouseY);
  flowerSize.push(random(30, 60));

  flowerColorR.push(random(100, 255));
  flowerColorG.push(random(50, 200));
  flowerColorB.push(random(150, 255));
}

// keyPressed function to clear flowers
function keyPressed() {
  if (key === 'c' || key === 'C') {
    flowerX = [];
    flowerY = [];
    flowerSize = [];
    flowerColorR = [];
    flowerColorG = [];
    flowerColorB = [];
  }
}