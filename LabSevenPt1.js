// Lab #7, pt.1 - Avery Haskell
// Draw a shape diagonally across the canvas, in the shape of an "X"

function setup() {
  createCanvas(400, 400);
    x = 40;
    y = 40;
    colors = ["thistle", "plum","orchid", "mediumorchid", "darkorchid"];
  
}

function draw() {
  background("lavender");
  noLoop();
  
  push();
  for(let i = 0; i < 10; i++){
    randomColor(colors);
    ellipse(20, 20, 40);
    translate(x, y);
  }
  pop();
  
  push();
  for(let j = 0; j < 10; j++){
    randomColor(colors);
    ellipse(380, 20, 40);
    translate(-x, y);
  }
  pop();
}

function randomColor(colors){
  fill("white");
  stroke(random(colors));
  strokeWeight(5);
}
