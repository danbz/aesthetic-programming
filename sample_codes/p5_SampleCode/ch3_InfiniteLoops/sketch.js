/*
Asterisk Painting by John P.Bell (http://www.johnpbell.com/asterisk-painting/)
Original code in Processing: http://wg18.criticalcodestudies.com/index.php?p=/discussion/31/week-2-critical-and-creative-coding-calvinball-and-coders#latest
Port to p5js and modified by Winnie Soon with comment notes, last update: 12 Oct 2019

notes:
1. The color mode has been changed to a variable as the push/pop function will restore the previous fill color state.
2. Remove font
3. change the bg color
4. add text size
5. remove load signature image
6. change the canvas size and corresponding no. of asterisk
7. display a counter on the bottom left corner and in black color
8. Add extensive comments
9. return a random no in integer
*/

let xDim = 1000;  //canvas size-width
let yDim = 600;   //canvas size-height
let timer=0;
let speed=100;  //the speed of rotating , default 100
let maxSentences = 77;  //original: 77
let sentences = 0;
let xPos = [1,2,3,4,5]; //original: 8 columns
let yPos = [1,2,3,4]; //original: 5 rows
let xCtr = 0;
let yCtr = 0;
let waitTime = 10000;
let itr = 0; // no. of iteration
let milliStart = 0;
let currentMillis;
let fillColor;

function setup(){
  createCanvas(xDim, yDim);
  background(240);
  for(let i=0; i<xPos.length; i++) {  //calculate the position of each asterisk horizontally as an array that starts with an array index[0]
    xPos[i] = xPos[i] * (xDim / (xPos.length+1));
  }
  for(let i=0; i<yPos.length; i++) {  //calculate the position of each asterisk vertically as an array that starts with an array index[0]
    yPos[i] = yPos[i] * (yDim / (yPos.length+1));
  }
  fill(0);  //counter color at the bottom left
  textAlign(LEFT, CENTER);
  text(itr, 10, yDim-30); //display counter
  fillColor = color(floor(random(0,255)),floor(random(0,255)),floor(random(0,255)));
}

function draw(){
     currentMillis = floor(millis() - milliStart);  //millis means millsecond since starting the program, like frameCount
     if(currentMillis > timer){
       push()
       translate(xPos[xCtr], yPos[yCtr]);  //rows and cols
       rotate(radians((360/8)* (millis()/speed)));  //rotate in itself
       timer = currentMillis + speed; //the time for the next loop
       textSize(12);
       //nf:format numbers into strings and adds zeros in front [https://p5js.org/reference/#/p5/nf]  3 digits in front and 0 digit after the decimal
       fill(fillColor);
       text(nf(currentMillis, 6), 3, 0);  //which is about the time string written as the asterisk, and it starts with 0 always.
       sentences++;
       if(sentences >= maxSentences){  //reach the max for each asterisk
         xCtr++;  //move to next array

         if(xCtr >= xPos.length) {  //meet max cols, and need to go to next row
           xCtr = 0;
           yCtr++;  //next row
           //the screen is filled > reset everything and update the counter
           if(yCtr >= yPos.length){  //reach the max no of rows on a screen (after reach the no. of max cols)
             yCtr = 0;
             background(240);
             itr++;  //add counter (iteration)
             pop();
             fill(0);   //counter's display color
             text(itr, 10, yDim-30);  //change counter display again
             let wait = floor(millis() + waitTime);  //wait for next round
             while(millis() < wait){}  // Just wait for resetting
             milliStart = millis(); //reset the starting time
             timer = 0; //reset the timer
             push();
           }
         }
        sentences = 0;
        fillColor = color(floor(random(0,255)),floor(random(0,255)),floor(random(0,255)));
       }
       pop();  //restore previous state
     }
}
