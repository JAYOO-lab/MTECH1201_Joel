//Joel Johnson
// Bouncing Squares

// Instructions:
// -Press R to change the color of the balls
// -Press B to change the background color
// -Click the mouse to reset the balls' positions
//Below is the Coding
// First Ball (left to right) Variables
let x = 250;
let y = 250;
let speed = 3;
// Second Ball (Up and Down) Variables
let x2 = 250;
let y2 = 250;
let speed2 = 3;
// Base color and allows RGB color switching for the balls
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
//First Ball (left to right)
x = x + speed;
if (x > 500) {
speed = -random(3, 12);
}
if (x < 0) {
speed = random(3, 12);
}
//Second Ball (Up and Down)
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
//When you click the screen, both balls reset
function mousePressed() {
x = 250;
y = 250;
x2 = 250;
y2 = 250;
}
//When you press R the balls change colors together
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