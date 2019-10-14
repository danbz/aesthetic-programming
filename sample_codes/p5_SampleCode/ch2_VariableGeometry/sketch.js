/*Inspired by David Reinfurt's work - Multi*/
let moving_size = 60;
let static_size = 20;

function setup() {
  createCanvas(500, 600);
  frameRate(15);
}

function draw() {
  //background
  background(random(130,140));
  //left
  noStroke()
  fill(0,0,0);
  rect(50,110,100,26);

  //right
  rect(350,140,static_size,static_size);
  fill(200,100,0);
  beginShape();
  vertex(350, 160);
  vertex(343, 180);
  vertex(353, 180);
  vertex(370, 160);
  endShape(CLOSE);

  //bottom
  noFill();
  stroke(255,255,255);
  strokeWeight(2);
  ellipse(190,370,static_size,static_size);

  //mouse interactions
  stroke(180);
  ellipse(mouseX, mouseY, moving_size, moving_size);

  if (mouseIsPressed) {
    static_size = floor(random(5, 20));
 }
}
