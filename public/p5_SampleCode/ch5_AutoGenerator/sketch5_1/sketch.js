/* Inpsired by Langton's Ant (1986) by Chris Langton and Daniel Shiffman: https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_089_langtonsant/P5/sketch.js
Remade for educational purpose by Winnie Soon
1. draw a grid with your desired size (grid_space) via initializing a grid structure based on width and height, columns and width
2. set all the cell states as 0 (where 0 =off/white, 1 = on/black)
3. set initial (current) x, y position and direction in the setup()
4. logic starts - in the draw():
  - based on the current position to check if the cell hits the edges (width and height)
  - check the current state of the cell against the rules (2 rules in total and those also define the on/off state of the cell)
  - change color of the cell
  - update corresponding/latest ant's direction + state
  - move to next cell and loop again within #4
  - *'grid_space' needs to be dividable as an integer by the width and height of the canvas
learning: 2d array- https://www.youtube.com/watch?v=OTNpiLUSiB4
*/

let grid_space = 5;  //e.g 4, 5, 10 need to be dividable as an integer by the width and height of the canvas
let grid =[]; //on/off state
let cols, rows;  //for drawing the grid purpose
let xPos, yPos; //current position in terms of rows and cols, not actual pixel
let dir; //current direction of the ant
const antUP = 0;
const antRIGHT = 1;
const antDOWN = 2;
const antLEFT = 3;
let offColor;
let onColor;

function setup() {
  createCanvas(1000,700);
  offColor = color(255);  //setting offcolor
  onColor = color(0); //setting onColor
  background(offColor);
  grid = drawGrid();
  xPos = floor(cols/2);  //initial x position and make sure it is an integer in the grid array
  yPos = floor(rows/2); //initial y position and make sure it is an integer in the grid array
  dir = antUP; //initial direction
  frameRate(20);
}

function draw() {
  for (let n = 0; n < 100; n++) { //just for running faster per frame, try changing the n e.g 1
   checkEdges();
   let state = grid[xPos][yPos];
   //check the current cell's state
   if (state == 0) { //rule 1
    dir++;  // turn right 90°
    grid[xPos][yPos] = 1; //change the currect cell's state to 'on'
    fill(onColor);  //subsequent color change
    if (dir > antLEFT) {
      dir = antUP;  //reset the counter
    }
   }else{  //rule 2
    dir--;  //turn left 90°
    grid[xPos][yPos] = 0; //change the current cell's state to 'off'
    fill(offColor);  //subsequent color change
    if (dir < antUP) {
      dir = antLEFT; //reset the counter
    }
   }
   rect(xPos*grid_space, yPos*grid_space, grid_space, grid_space);
   nextMove();
  }
}
function drawGrid() {
  cols = width/grid_space;
  rows = height/grid_space;
  let arr = new Array(cols);
  for (let i=0; i < cols; i++) {//no of cols
    arr[i] = new Array(rows); //2D array
    for (let j=0; j < rows; j++){ //no of rows
      let x = i * grid_space; //actual x coordinate
      let y = j * grid_space; //actual y coordinate
      stroke(0);
      strokeWeight(1);
      noFill();
      rect(x, y, grid_space, grid_space);
      arr[i][j] = 0;  // assign each cell with the off state + color
    }
  }
  return arr; //a function with a return value of cell's status
}

function nextMove () {
  //check which direction to go next and set the new current direction
  if (dir == antUP) {
    yPos--;
  } else if (dir == antRIGHT) {
    xPos++;
  } else if (dir == antDOWN) {
    yPos++;
  } else if (dir == antLEFT) {
    xPos--;
  }
}

function checkEdges() {
  //check width and height boundary
  if (xPos > cols-1) { //reach the right edge
    xPos = 0;    //go back to the left
  } else if (xPos < 0) {  //reach the left edge
    xPos = cols-1;  //go to the right edge
  }
  if (yPos > rows-1) { //reach the bottom edge
    yPos = 0; //go back to the top
  } else if (yPos < 0) { //reach the top edge
    yPos = rows-1;  //go to the bottom
  }
}
