function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
        createCanvas(windowWidth, windowHeight);
      }

      function draw() {
        background(255);
        line(width / 2, height / 2, mouseX, mouseY);
      }

      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        background(255);
      }