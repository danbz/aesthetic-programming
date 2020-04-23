class Tofu { //create a class: template/blueprint of objects with properties and behaviors
    constructor()
    { //initalize the objects
    this.speed = floor(random(2,5));
    this.pos = new createVector(width+5, random(12,height/1.7));  //check this feature: https://p5js.org/reference/#/p5/createVector
    this.size = floor(random(15,35));
    this.toFu_rotate = random(0,PI/20); //rotate in clockwise for +ve no
    this.emoji_size = this.size/1.5;
    }
  move() {  //moving behaviors
    this.pos.x-=this.speed;  //i.e, this.pos.x = this.pos.x - this.speed;
  }
  show() { //show tofu as a cube
    push()
    translate(this.pos.x, this.pos.y);
    rotate(this.toFu_rotate);
    noStroke();
    fill(130, 120);//shadow
    rect(0,this.size, this.size, 1);
    fill(253); //front plane
    rect(0,0, this.size,this.size);
    fill(150); //top
    beginShape();
    vertex(0,0);
    vertex(0-this.size/4,0-this.size/4);
    vertex(0+this.size/1.5,0-this.size/4);  //no special hair style
    vertex(0+this.size, 0);
    endShape(CLOSE);
    fill(220);//side
    beginShape();
    vertex(0, 0);
    vertex(0-this.size/4,0-this.size/4);
    vertex(0-this.size/4,0+this.size/1.5);
    vertex(0,0+this.size);
    endShape(CLOSE);
    fill(80); //face
    textSize(this.emoji_size);
    text('*',0+this.size/6, 0+this.size/1.5);
    text('-',0+this.size/1.7, 0+this.size/1.9);
    text('。',0+this.size/8, 0+this.size/1.15);
    pop();
 }
}