/*  Prepared by Winnie Soon - object orientation based on ES6 (class-based object oriented programming is introduced in ECMAScript 2015)
credit and inspiration:
game scene: ToFu Go by Francis Lam + emoji: Multi by David Reinfurt */
let pacmanSize = {
  w:86,
  h:89
};
let pacman;
let pacPosY;
let mini_height;
let min_tofu = 5;  //min tofu on the screen
let tofu = [];
let score =0, lose = 0;
let keyColor = 96;

function preload(){
  pacman = loadImage("data/pacman.gif");
}

function setup() {
  createCanvas(1000,600);
  pacPosY = height/2;
  mini_height = height/2;
  for (let i=0; i<=min_tofu; i++) {
    tofu[i] = new Tofu(); //create/construct a new object instance
  }
}
function draw() {
  background(255);
  fill(keyColor, 255);
  rect(0,height/1.5,width,1);
  displayScore();
  showTofu();
  image(pacman, 0, pacPosY,pacmanSize.w, pacmanSize.h);
  checkTofuNum(); //available tofu
  checkEating(); //scoring
  checkResult();
}

function showTofu(){
  for (let i = 0; i <tofu.length; i++) {
    tofu[i].move();
    tofu[i].show();
  }
}

function checkTofuNum() {
  if (tofu.length < min_tofu) {
    tofu.push(new Tofu());
  }
}

function checkEating() {
  //calculate the distance between each tofu
  for (let i = 0; i <tofu.length; i++) {
    let d = int(dist(pacmanSize.w/2, pacPosY+pacmanSize.h/2,tofu[i].pos.x, tofu[i].pos.y));
    if (d < pacmanSize.w/2.5) { //close enough as if eating the tofu
      score++;
      tofu.splice(i,1);
    }else if (tofu[i].pos.x < 3) { //pacman missed the tofu
      lose++;
      tofu.splice(i,1);
    }
  }
}

function displayScore() {
    fill(keyColor,110);
    textSize(17);
    text('You have eaten '+ score + " tofu(s)", 10, height/1.4);
    text('You have wasted ' + lose + " tofu(s)", 10, height/1.4+20);
    fill(keyColor,255);
    text('PRESS the ARROW UP & DOWN key to eat the ToFu', 10, height/1.4+40)
}

function checkResult() {
  if (lose > score && lose > 2) {
    fill(keyColor,255);
    textSize(26);
    text("Too Much WASTAGE...GAME OVER", width/3, height/1.4);
    noLoop();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    pacPosY-=30;
  } else if (keyCode === DOWN_ARROW) {
    pacPosY+=30;
  }
  //reset if the pacman moves out of range
  if (pacPosY > mini_height) {
    pacPosY = mini_height;
  } else if (pacPosY < 0 - pacmanSize.w/2) {
    pacPosY = 0;
  }
}
