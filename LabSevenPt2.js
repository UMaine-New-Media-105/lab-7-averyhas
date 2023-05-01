// Lab #7, pt. 2 - Avery Haskell
// Draw a grid of shapes with nested loops.

function setup() {
  createCanvas(440, 440);
    x = 40;
    y = 40;
}

function draw() {
  background("white");
  
    hue1 = 275
    hue2 = 125
  
  for(let row = 0; row < 10; row++){
    for(let column = 0; column < 10; column++){
      fill(hue1, hue2, 255);
      noStroke();
      ellipse(x + 40 * row, y + 40 * column, 40);
      hue1 = hue1 + 1
      hue2 = hue2 + 1
    }
  } 
}
