let snowflakes = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  for (let i = 0; i < 120; i++) {
    snowflakes.push({
      x: random(width),
      y: random(height),
      r: random(2, 5),
      speed: random(0.5, 2),
      drift: random(-0.5, 0.5)
    });
  }
}

function draw() {
  background(135, 206, 235);

  drawSnowGround();
  drawSnowman(width / 2, height - 60);
  drawSnowflakes();
}

function drawSnowGround() {
  fill(240, 248, 255);
  rect(0, height - 60, width, 60);

  fill(255);
  for (let i = 0; i < 8; i++) {
    ellipse(i * 60 + 15, height - 50 + random(-2, 2), 18, 18);
  }
}

function drawSnowman(x, y) {
  const bodyColor = [255, 255, 255];

  fill(bodyColor);
  ellipse(x, y, 80, 80);
  ellipse(x, y - 85, 60, 60);
  ellipse(x, y - 160, 45, 45);

  fill(255, 165, 0);
  ellipse(x, y - 180, 9, 9);

  fill(0);
  ellipse(x - 10, y - 165, 5, 5);
  ellipse(x + 10, y - 165, 5, 5);
  ellipse(x, y - 152, 4, 4);

  fill(255, 99, 71);
  rect(x - 18, y - 135, 36, 8);

  fill(255, 0, 0);
  rect(x - 20, y - 120, 40, 10);

  fill(0);
  for (let i = 0; i < 3; i++) {
    ellipse(x, y - 10 - i * 25, 5, 5);
  }

  stroke(0);
  strokeWeight(4);
  line(x - 45, y - 80, x - 80, y - 110);
  line(x + 45, y - 80, x + 80, y - 110);
  noStroke();

  fill(0, 0, 255);
  rect(x - 25, y - 130, 50, 10);

  fill(255, 165, 0);
  ellipse(x, y - 200, 10, 10);
}

function drawSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    flake.x += flake.drift;

    if (flake.y > height) {
      flake.y = -5;
      flake.x = random(width);
    }

    if (flake.x < 0) flake.x = width;
    if (flake.x > width) flake.x = 0;

    fill(255, 255, 255, 220);
    ellipse(flake.x, flake.y, flake.r, flake.r);
  }
}
