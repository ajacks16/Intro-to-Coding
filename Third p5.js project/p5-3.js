function setup() {
  createCanvas(1400, 600);
}


function draw() {
  background(0);
  circle(50,50,80,80);
}

function setup() {
  createCanvas(1400, 600);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  circle(mouseX, mouseY, 80, 80);
}
