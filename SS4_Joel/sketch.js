//Joel Johnson
// Bouncing Squares

// Instructions:
// -Press R to change the color of the Squares
// -Press B to change the background color
// -Click the mouse to reset the Squares' positions
//Below is the Coding
// First Square (left to right) Variables
let x = 250;
let y = 250;
let speed = 3;
// Second Square (Up and Down) Variables
let x2 = 250;
let y2 = 250;
let speed2 = 3;
// Base color and allows RGB color switching for the squares
let r = 150;
let g = 255;
let b = 0;
// Base color and allows RGB color switching for the background (if needed)
let bgR = 220;
let bgG = 20;
let bgB = 60;
//Canvas
function setup() {
createCanvas(600, 600);
}
//Draw Loop
function draw() {
background(bgR, bgG, bgB);
fill(r, g, b);
square(x, y, 100);
//First Square (left to right)
x = x + speed;
if (x > 500) {
speed = -random(3, 12);
}
if (x < 0) {
speed = random(3, 12);
}
//Second Square (Up and Down)
y2 = y2 + speed2;
if (y2 > 500) {
speed2 = -random(3, 9);
}
if (y2 < 0) {
speed2 = random(3, 9);
}
square(x2, y2, 100);
fill(100, 50, 150);
}
//When you click the screen, both squares reset
function mousePressed() {
x = 250;
y = 250;
x2 = 250;
y2 = 250;
}
//When you press R the squares change color
function keyPressed() {
  if (key === 'r') {
    r = random(255);
    g = random(255);
    b = random(255);
  //When you press B the background changes colors
  } else if (key === 'b') {
    bgR = random(255);
    bgG = random(255);
    bgB = random(255);
  }
}