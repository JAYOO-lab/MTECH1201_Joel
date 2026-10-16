let canvasSize = 500;
let currentScene = 0;
let numScenes = 2;

function setup() { 
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(0);
  if(currentScene === 0) {
    drawScene1();
  }
  else if(currentScene === 1) {
    drawScene2();
  }
}

function mousePressed() {
  currentScene++;
  if(currentScene >= numScenes) {
    currentScene = 0;
  }

}

function drawScene1() {
  fill(255, 0, 100);
  textFont("Courier New")
  textSize(20);
  text("HELLO, BONJOUR, HOLA, NI HAO", 50, 250);

}
// I had to look up how to say goodbye in Mandarin, So I googled it
function drawScene2() {
  fill(255,255,0);
  textFont("Comic Sans MS");
  textSize(20);
  text("GOODBYE, ADIOS, AU REVOIR, ZAI JIAN", 50, 250);
}
