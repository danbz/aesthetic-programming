//ch3_1
function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 frameRate (8);  //try to change this parameter
}

function draw() {
  fill(255, 255, 255, 100);  //check this syntax with alpha value
  noStroke();
  rect(0, 0, width, height);
  drawElements();
}

function drawElements() {
  let num = 9;
  push();
  translate(width/2, height/2); //move things to the center
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  let cir = 360/num*(frameCount%num);  //to know which one among 8 possible positions.
  rotate(radians(cir));
  noStroke();
  fill(0,0,0);
  ellipse(35,0,22,22);  //the moving dot(s), the x is the distance from the center
  pop();

  stroke(0,0,0, 18);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
