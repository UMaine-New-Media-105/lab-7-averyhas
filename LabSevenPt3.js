// Lab #7, pt. 3 - Avery Haskell
// Add mouse interactivity.

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
      
  // Gradient intensity changes depending on the positioning of the mouse.
      hue1 = hue1 + 0.0005 * mouseX;
      hue2 = hue2 + 0.005 * mouseY;
    }
  } 
}
