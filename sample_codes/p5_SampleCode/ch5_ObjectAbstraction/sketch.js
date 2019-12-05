/*  Prepared by Winnie Soon for AP-class06 - object orientation based on ES6 (class-based object oriented programming is introduced in ECMAScript 2015)
credit and inspiration:
img source: https://www.kisspng.com/png-beer-bottle-png-clip-art-59521/download-png.html
game scene: ToFu Go by Francis Lam + emoji: Multi by David Reinfurt */
let tofu = [];
let button;
let beerImage, beer, beers, beerY;
const max_beer=20, min_beer=10;
let min_tofu = 5;
let height_limit;

function preload() {
  beerImage = loadImage("data/beer2.png");
}
function setup() {
  createCanvas(windowWidth, 600);
  height_limit = height/4; //a reference point for the table, beers and tofu
  button = createButton("add Tofu: maintain minimum " + min_tofu + " on the table");
  button.style('background-color','white');
  button.style('padding','10px 30px');
  button.style('font-size','12px');
  button.mousePressed(addTofu);
  addBeers();
  for (let i=0; i<=min_tofu; i++) {
    tofu[i] = new Tofu(30); //create/construct a new object instance
  }
}
function draw() {
  background(255);
  button.position(width/3,55);
  drawTable();
  checkBeer();
  for (let i = 0; i <tofu.length; i++) {
    tofu[i].move();
    tofu[i].show();
    if (tofu[i].pos.x > width){
      tofu.splice(i,1); //first argument is start at which index, and the second one stands for how many
    }
  }
  let loser = checkLoser();
  if (loser==true){
    fill(200,0,0);
    textSize(30);
    text("GAME OVER", width/2, height/2);
    noLoop();
  }
}

function addBeers() { //sprite - using p5.play library
  beers = new Group();
  for (let i=0; i < max_beer ; i++ ){
    beerImage.resize(20,50);
    if (floor(random(0,2)) == 0){
      beerY = height_limit;
    }else {
      beerY = height/1.9;
    }
    beer = createSprite(random(width, width+width), beerY);
    beer.addImage('normal', beerImage);  // can check for other sprite' properties e.g beer.rotationSpeed = random(-1,-3);
    beer.addToGroup(beers);
  }
}
function drawTable() {
  let texture_width = 60;
  stroke(196,98,16,15);
  fill(196,98,16,20);
  rect(0,height_limit, width, height/2.95);
  let tableX=-texture_width;
  for (let i = 0; i < width/texture_width+1; i++) {
    line(tableX, height_limit, tableX+texture_width, height_limit+height/2.95);
    tableX+=texture_width;
  }
  fill(196,98,16,35);
  rect(0,height/1.7, width, 40);
  let edgeX = 0;
  stroke(196,98,16, 30);
  for (let i = 0; i < width/texture_width; i++) {
    line(edgeX, height/1.7, edgeX, height/1.7+39);
    edgeX+=texture_width;
  }
}
function checkBeer() { //check beer availability
      for(let i = 0; i<beers.length; i++) { //add beer
        let b = beers[i];
         b.velocity.x = -2;
         if(b.position.x < -10) { //check out of screen
           b.remove();  //remove sprites when they are out of screen
         }
      }
      if (beers.length < min_beer) { //refill beer on the screen
        addBeers();
      }
      drawSprites();
}
function addTofu() {   //speed, xpos, ypos, size
  tofu.push(new Tofu(floor(random(0,20))));
}
function checkLoser() {
    if (tofu.length < min_tofu) {
      return true;
    }
}
