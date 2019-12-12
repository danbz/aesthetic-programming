Title: 5. Object Abstraction
page_order: 5

## Object Abstraction

## 5.1 setup()
The idea of an object is a key concept in programming but also more broadly understood as a thing with properties that can be identified in relation to the term subject. Put simply, and following philosophical conventions, a subject is an observer (we might say programmer) and an object is a thing outside of this, a thing observed (the program). In this chapter we will learn to further manipulate objects and understand their complexity in keeping with those that think we need to place more importance on nonhuman things so as to understand better how objects exist and interact (with other objects but also with subjects). 

In the previous chapters, we have worked with different objects such as geometric shapes like ellipses, rectangles and polygons. You can apply different attributes to these objects, such as color, size and position, and additionally objects can exhibit certain behaviors such as movement, animation and rotation (as seen in Chapter 3 — InfiniteLoops, and Chapter 4 — DataCapture). These geometric objects use functions that are already built-in within `p5.js` as a set of pre-defined arguments and attributes. In this chapter, we will work on constructing our own objects, attributes and behaviors, that represent aspects of the real world. There is a process of abstraction here, because physical objects need to be translated into the idea of an object, and in doing this certain details and contextual information is inevitably left out. We will return to this issue later. 

Abstraction is one of the key concepts of Object-Oriented Programming (OOP), a model of programming in which programs are organized around data, or objects, rather than functions and logic.[^history] The main goal is to handle an object's complexity by abstracting certain details and representing a concrete model. Beatrice Fazi and Matthew Fuller discuss the wider significance of this and the relations between concrete and abstracted computation: "Computation not only abstracts from the world in order to model and represent it; through such abstractions, it also partakes in it".[^Fazi] If we recall the previous chapter and the many examples of data capture and gamification, it becomes clear that computation can begin to shape certain behaviours and actions. In other words, objects in OOP are not only about negotiating with the real world as a form of realism and representation, nor the functions and logic that compose the objects, but the wider relations and "interactions between and with the computational".[^Fuller]

Indeed, abstraction exists at many different layers and scales of computing. At the lowest level of abstraction, the flow of information is stored, processed and represented in the form of binary (base 2 number system) numbers — zeros and ones.[^binary] In other words, the way we understand all multimedia formats (whether texts, images, video or sound) is quite different from how a computer understands them as data, or more precisely as binary numbers, including pixels, color values and waveforms. In this way, we can move from low-level abstraction in the form of machine code and the switching of electric circuits to high-levels of abstraction such as the graphical user interface or the programming language `p5.js` that we use in the book. 

Recognition of the levels of abstraction are important to understand that the specific details of how a computer actually works are largely hidden from view or substituted by desktop metaphors (such as deleting a file by throwing it in the bin). That the complexity is reduced is useful of course for a number of reasons including accessability and usability, but we also need to bear in mind that there is more at stake here. In learning to program, even at the higher level, we engage the politics of this movement between abstract and concrete reality. More specically, for this chapter, we focus on object abstraction, which is an approach in OOP, to think conceptually about how objects model the world and what this suggests in terms of an understanding of its hidden layers. 

## 5.1.1 Start()

Object Abstraction in computing is about representation. Certain attributes and relations are abstracted from the real world, but at the same time details and contexts are left out. Let's imagine a person as an object (rather than a subject) and consider what properties and behaviors that person might have. We use the name **class** to give an overview of the object's properties and behaviors. 

For example:

**Properties**: A person with the **name** Winnie, has black **hair color**, **wears** no glasses with **height** as 164 cm. Their **favorite color** is black and their **favorite food** is Tofu.  

**Behavior**: A person can run from location A (Home) to location B (University). 

From the above, we can construct a pseudo class that can use to create another object with the following properties and behaviors:

|Person                  |
| ---------------------- |
| Name, HairColor, withGlasses, Height, FavoriteColor, FavoriteFood, FromLocation, ToLocation |
| run()                  |

In the same token, we can *reuse* the same properties and behavior to create another *object instance* with the corresponding data values:

| Object instance 1             | Object instance 2         |
|-------------------------------|---------------------------|
| Name = Winnie                 | Name = Geoff              |
| HairColor = Black             | HairColor = Brown         |
| withGlasses = No              | withGlasses = Yes         |
| Height = 164 cm               | Height = 183 cm           |
| FavoriteColor = Black         | favoriteColor = Green      |
| FavoriteFood = Tofu           | FavoriteFood = Avocado      |
| FromLocation = Home           | FromLocation = University |
| ToLocation = University       | ToLocation = Home         |
| run()                         | run()                     |

From the pseudo object, we can begin to see how abstraction takes place in computation as *computerized material*, in which we only select properties and behaviors that we think are important to be represented in a program and ignore others. This is a way of modeling physical phenomena and simulating the behaviors of real or imaginary entities.[^Madsen] The understooding is that objects in the real world are highly complex and nonlinear. After the brief example of modeling the person-object, we now move to another example, tofu, that informs the sample code for this chapter, inspired by the game [Tofu Go!](https://www.dbdbking.com/Tofu-Go) (2018), a game developed and designed by Francis Lam (HK/CN).[^francis] 

Tofu, or bean curd, is a popular food derived from soya orginating from China 2000 years ago. Through soaking and grinding soybeans, as well as filtering out remaining particulates, it becomes something known as soymilk, containing stable emulsion of oil, water, and protein. This is then pressed into solid white blocks with varying softness as tofu in a process similar to cheesemaking. It is an important food product specifically in the East, not only because of its protein richness but also as a cultural symbol. 

When tofu becomes a computational object, as in *Tofu Go!*, abstraction is required to capture the complexity of processes and relations, and to represent what are thought to be essential and desired properties and behaviours. In the game, tofu is designed as a simple white three-dimensional cube form with an emoticon, and the ability to move and jump. Of course in the real world tofu cannot behave in that way, but one can imagine how objects can perform differently when you program your own software, and if you love tofu as Lam does: "*Tofu Go!* is a game dedicated to my love for tofu and hotpot" as he puts it.[^francis2] You need to save the tofu from the chopsticks. 

![tofu go](ch5_1.png)

*Figure 5.1: A screenshot of the game ToFu Go!, developed and designed by Francis Lam*

[embeded video](https://www.youtube.com/watch?v=V9NirY55HfU])

In the following, we will use the game *ToFu Go!* (freely available to download on App Store[^App]) for the main flow of discussion and then a simplified version is introduced as the sample code (the recipe if you like). As discussed, *ToFu Go!* is a mobile game that makes reference to Chinese food culture, especially HotPot (a convenient one pot meal). By programming a modified and simplier version of *ToFu Go!*, the remaining parts unfold the computational logic and modeling required to understand the basics of OOP. 

This chapter's sample code has the following core components: 
1. A static table. 
2. A cube-like Tofu as a class object. There are many object instances, and they appear on different parts of the table, running from left to right.
3. The button with the text "Add Tofu: maintain minimum 5 on the table". It allows the addition of Tofu object instances.
4. There is a continuous display of beer objects which move from right to left. (The beers can be considered to be decorative objects in this game and in the chapter, which means the game can still function without them. We use the library of [p5.play](http://molleindustria.github.io/p5.play/) to control the beer image and together it illustrates a different way of constructing objects)
5. The simple game logic is used to maintain at least 5 pieces of tofu on the table, or else the game will stop and display the text 'Game Over'.

![ch5_2](ch5_2.png)

*Figure 5.2: A screenshot of the simplified Tofu Go!.* [need to adjust slightly the code and visual for next round /w]

[RUNME](https://gitlab.com/siusoon/Aesthetic_Programming_Book/blob/master/sample_codes/p5_SampleCode/ch5_ObjectAbstraction/index.html)

## Source Code 

The source code is divided into two, one with all the core functions in `sketch.js`, and the other `tofu.js` that specifies the class/object relationship. Sometimes it can help to give a clearer overview if you separate the program into different functions and files. To enable the two js files in a program, you need to add the following into the index.html file:

```html
  <script language="javascript" type="text/javascript" src="sketch.js"></script>
  <script language="javascript" type="text/javascript" src="Tofu.js"></script>
```

sketch.js:

```javascript
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
  button = createButton("add Tofu: maintain minimum" + min_tofu + "on the table");
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
    textSize(40);
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
    beer.addImage('normal', beerImage);  //can check for other sprite properties, e.g. beer.rotationSpeed = random(-1,-3);
    beer.addToGroup(beers);
  }
}
function drawTable() {
  let texture_width = 60;
  stroke(196,98,16,15);
  fill(196,98,16,10);
  rect(0,height_limit, width, height/2.95);
  let tableX=-texture_width;
  for (let i = 0; i < width/texture_width+1; i++) {
    line(tableX, height_limit, tableX+texture_width, height_limit+height/2.95);
    tableX+=texture_width;
  }
  fill(196,98,16, 30);
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
           b.remove(); //remove sprites when they are out of screen
         }
      }
      if (beers.length < min_beer) { //refill beer on the screen
        addBeers();
      }
      drawSprites();
}
function addTofu() { //speed, xpos, ypos, size
  tofu.push(new Tofu(floor(random(0,20))));
}
function checkLoser() {
    if (tofu.length < min_tofu) {
      return true;
    }
}
```
tofu.js:

```javascript 
class Tofu { //create a class: template/blueprint of objects with properties and behaviors
    constructor(xpos) { //initalize the objects
    this.speed = floor(random(3,10));
    this.pos = new createVector(xpos, floor(random(height_limit+20,height_limit+115))); //check this feature: https://p5js.org/reference/#/p5/createVector
    this.size = floor(random(30,35));
    this.toFu_rotate = random(0,PI/8); //rotate in clockwise for +ve no
    this.emoji_size = this.size/1.5;
    }
  move() { //moving behaviors
    this.pos.x+=this.speed; //i.e. this.pos.x = this.pos.x + this.speed;
  }
  show() { //show tofu as a cube
    push()
    translate(this.pos.x, this.pos.y);
    rotate(this.toFu_rotate);
    noStroke();
    fill(255); //front plane
    rect(0,0, this.size,this.size);
    fill(150); //top
    beginShape();
    vertex(0,0);
    vertex(0-this.size/4,0-this.size/4);
    //vertex(0+this.size/0.45,0-this.size/5); //special hair style
    vertex(0+this.size/1.5,0-this.size/4); //no special hair style
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
```

## class

To first construct objects in OOP, it is important to have a blueprint. A class specifies the structure of its objects' attributes and the possible behaviors/actions of its objects. Thus, class can be understood as a template and blueprint of things.  

Similar to the template that we had for a person-object, we have the following:

|Tofu                                              |
| ------------------------------------------------ |
| speed, xpos, ypos, size, toFu_rotate, emoji_size |
| move(), show()                                   |

You may refer to `Tofu.js` with the full source code for how the Tofu class is constructed.

**(Step 1) Naming**: Give a name of your class

```javascript
class Tofu {

}
```

In the sample code above, we have Tofu as the class name and Tofu as the name of object instances. The things within a class describes what it means to be the object, such as what the properties are, the data values, and behaviors and functionality. In computer science, this is called *encapsulation*.  

**(Step 2) Properties**: What are the (varying) attributes/properties of tofu?

```javascript
class Tofu { //create a class: template/blueprint of objects with properties and behaviors
    constructor(xpos) { //initalize the objects
    this.speed = floor(random(3,10));
    this.pos = new createVector(xpos, floor(random(height_limit+20,height_limit+115))); //check this feature: https://p5js.org/reference/#/p5/createVector
    this.size = floor(random(30,35));
    this.toFu_rotate = random(0,PI/8); //rotate clockwise for +ve no
    this.emoji_size = this.size/1.5;
    }
//something more here
}
```

The above is to prepare the object construction. As such we have a function called constructor. Here the variable `xpos` is put inside the constructor function because this will be passed from other function in the `sketch.js` that actually instructs the class to make an object instance. It is similar to how a function passes an argument from one to another. 

Below the function constructor is a list of variables that indicate the properties of speed, position, size, rotating angle and the emoji's size. All these properties are defined with the keyword `this`, which refers to the current object instance, e.g. `this.speed = floor(random(3,10));`. It can be translated roughly as: when the object instance tofu is created, that particular tofu's speed value will be a random integer between 3 to 10. 

For the other variable `this.pos`, we have used the function `new createVector` to create the new p5 vector which contains the x and y components. With the `createVector` function, we can then use `pos.x` and `pos.y` to specify the x and y coordinates of a tofu. 

**(Step 3) Behaviors**: What are the behaviors of the tofu? 

```javascript 
class Tofu {
  constructor(xpos) { //initalize the objects
    // something here
  }
  move() { //moving behaviors
    this.pos.x+=this.speed; //i.e, this.pos.x = this.pos.x + this.speed;
  }
  show() {
      //show Tofu as a cube by using vertex 
      //show the emoji on the Tofu surface/pane
  }
}
```
The two behaviors `move()` and `show()` are the functions that can be used by each object instance. Each object can move differently with variations of speed, size, etc. 

## Objects

For this section, we will illustrate how to create an object instance, which is coded in the file `sketch.js`. 

**(Step 4) Object creation**: After the basic setup of the class structure, the next step is to create a tofu object that can display on a screen. 

```javascript
let tofu = [];
let min_tofu = 5;

function setup() {
 //something here
 for (let i=0; i<=min_tofu; i++) {
   tofu[i] = new Tofu(30); //create a new object instance
 }
}
```
The above shows that the program will start off with five pieces of tofu (which is the minimum requirement of the game). The tofu is created through a for-loop with specific properties (in this case, the x position with the data value 30) that are defined earlier in the class: Tofu. The five pieces of tofu are all started at 30 pixels on the x coordinate, and they have different properties (refer to step 2 above). 

Specifically, we now look at the most important line here:
`tofu[i] = new Tofu(30);`

- tofu[i] refers to the new object instance and it starts with the index 0. 
- new Tofu() refers to the action of creating the new object through passing the data value(s) into the class Tofu. 

These small snippets of code shows that objects can be duplicated and relatively easy to manage. This demonstrates one the advantages of using OOP which is the reusability of objects. 

**(Step 5) Display**: How you want to display and present them over time?

```javascript
let tofu = [];
let min_tofu = 5;

function setup() {
 //something here
}

function draw() {
 //something here
 for (let i = 0; i <tofu.length; i++) {
   tofu[i].move();
   tofu[i].show();
   if (tofu[i].pos.x > width){
     tofu.splice(i,1); //first argument is start at which index, and the second one stands for how many
   }
 }
}
```

Since the program is running all the time in the draw() function, which means the tofu(s) will be continuously moving and displaying, as well as disappearing on the screen once a tofu reaches the edge of the table. Hence, there are some calculations required for every frame such as the x position in particular that is derived from the speed and the previous position.  

```javascript
tofu[i].move();
tofu[i].show();
```

The two important lines above instruct the tofu(s) to move and display on screen. The number of total tofu pieces depends on how many objects have been created. You can check the amount of objects by using `tofu.length` and update each tofu with a for-loop. 

**(Step 6) Trigger point**: Think with the holistic logic

Think about if you want to create a new object when there is a trigger point, e.g. click on a button to create something (Tofu). The trigger point can be clicking a button (as with data capture in the previous chapter), and on clicking the mouse moves to a particular position, the mic's volume exceeds a certain value or detection of a human face, etc. To append the new object instance in an existing array in which you do not know the existing amount of tofu, you can use the `push()` [^push] function.

```javascript
function addTofu() { //speed, xpos, ypos, size
  tofu.push(new Tofu(floor(random(0,20))));
}
```

Think about if you want objects to stay on a screen, or disappear? As mentioned, any specific tofu object will no longer be used when it reaches the end of the table, so we use the function `splice()` [^splice] to remove the objects when the object's x position is greater than the width of the screen (equivalent to the table's width). 

## Class-Object creation

It requires some planning before you start coding if you want to implement a class-object in your own program. In a nutshell, an object consists of attributes/properties and actions/behaviors, and all these hold and manage data in which the data can be used and operation can be performed. 

- **(Step 1) Naming**: Give a name for your class.
- **(Step 2) Properties**: What are the attributes/properties of tofu?
- **(Step 3) Behaviors**: What are the actions/behaviors of tofu? 
- **(Step 4) Object creation**: After the basic setup of the class structure, next is to create a tofu object that can display on screen. 
- **(Step 5) Display**: How you want to display and present the tofu object over time?
- **(Step 6) Trigger point**: Think with the holistic logic.

## Exercise in class

1. Tinkering 
- modify the numbers, colors.
- add features and behaviors to the existing sample code.

2. Discussion in groups:
- Identify a game that you are familiar with, and describe the characters/objects by using the concept and vocabulary of class and object. Can you identify the classes and objects within the chosen example?
- Given that the creation of objects requires the concept of abstraction, and following some of the introductory ideas for this chapter, can you use the sample code or your game as an example to think through some of the political implications of class/object abstraction? Does the fact that this is a game allow for further reflection on the way everyday activities (such as enjoying tofu) become object-oriented?

## Further notes

We chose to discuss the class-object creation in greater detail in this chapter with the step by step approach. The sample code also includes other built-in and customized objects as a whole game. 

**Button:** The button in this chapter is similar to the previous one (Chapter 4 - DataCapture), which is to define the global variable `button`, then create the button with text and add the style such as background color, padding and font-size (in the style of CSS). A function called `addTofu` is created to push for new object creation when the button is clicked.  

**Table:** The table mainly consists of two rectangles that show the table weight with shadow. Two for-loops are used to draw the colored line with a certain and equal amount of width so as to give a three-dimentional effect. 

**Beers:** The sample code uses the `p5.play` library with the functions of `createSprite()`, `addImage()`, `addtoGroup`, considering beer as a sprite object that one can manipulate. The beer is an image technically, and all the images can be added as a group. `checkBeer()` is a custom function to check for beer availability. As sprites with the built-in concept of objects, `remove()` is similar to `splice()`, used to remove those beers that have already reached the edge of the other side of the table. In a similar vein, beers are added if the program does not have enough of them on the table. That said, there is also a logic of checking the availablity of beers. But for this chapter, it is more important to walkthrough the whole concept of object-oriented programming rather than using other libraries, as it will defeat the purpose of understanding the decision for each step in terms of the creation of class and object instances with properties and behaviors. Having the beers in `p5.play` is more to give a sense of how different things can be put together. 

**A game:** The program is a game, and as such there are winners and losers (eating tofu is gamified). `checkLoser()` is a function used to check how many tofus remain. If they are less than the required amount, then the "game over" text will be displayed.  

**Arithmetic operators:** There is new arithmetic syntax beyond simply `=`, `+`, `-`, `*`, `/`, such as `+=` in `tableX+=texture_width;` and `edgeX+=texture_width;`. See the list below: 

| Operator | Use case | Same as |
|----------|----------|---------|
| +=       | x+=y     | x=x+y   |
| -=       | x-=y     | x=x-y   |


## While()

By going through the tofu example, we can see object-oriented programming is highly organized and concrete even though objects are abstracted from the world. It's worth adding here that OOP is designed in this way





The movement between abstract and concrete states is important here, not least as a means to underpin a critical approach too. Matthew Fuller and Andrew Goffey suggest that this kind of modeling of the world is a socialtechnical practice, as they put it "compressing and abstracting relations operative at different scales of reality, composing new forms of agency",[^FullerGoffey] and such agency lies at the computational and material arrangement of everyday encounters. 

Computerized objects produce a different perspective that affect how we perceive the world. Who design the objects? We are indeed entering the mind of the programmer/designer who has their own worldview. Game may be a good example especially the apparent persistent sexualisation of female characters. The cultural implication is significant if we aware how much we interact with various objects, even just simply buttons, sliders, check boxes and each of the object has it own affordances and agency. 

[g: not sure if it is good to incorporate item 1 and 2 below but i think the idea of class from history - PD and workers union may be a good way to link with your marx + abstraction with the notion of class struggle ? /w]
-  history of the concept of objects in the mid-1960s with Simula 67 created by Ole-Johan Dahl and Kristen Nygaard of the Norwegian Computing Center in Oslo. > A programming paradigm
https://user-content.gitlab-static.net/38287337cdf9f32ae05de5b3d9d7037868960496/687474703a2f2f6a6f667261706573652e626c6f6769612e636f6d2f75706c6f61642f32303038303632373232313730302d6461686c2d6e7967616172642e6a7067
- objects and subject-pbject relations, OOO and OOP, units (Bogost maybe??)
- about working class and hireachy? but it is more than just create for efficiency. It is created with the perspective of participatory design in the context of utopia project that works with workers' union to "bring technical process closer to non-specialist understanding" (Fuller and Goffey 2017 + Andersen and Pold's metainterface) > re-use of code and operation: "it saves time and effort to be able to write the code once and re-use it in different programs" (Fuller and Goffey 2017). 
- Epistemologies
- marx + abstraction
- cooking and coding with class struggle (food and recipes, cultural difference)

## Mini_Exercise[5]: Games with objects

**Objective:**
- To implement a class-based object oriented sketch via abstracting and designing objects' properties and behaviors.
- To reflect upon object abstraction in the domain of digital culture

**To get some additional inspiration here:**
- [p5.js - Array Objects](https://p5js.org/examples/arrays-array-objects.html)
- [p5.js coding challenge #31: Flappy Bird by Daniel Shiffman](https://www.youtube.com/watch?v=cXgA1d_E-jY)
- [p5.js coding challenge #3: The snake game by Daniel Shiffman](https://www.youtube.com/watch?v=AaGK-fj-BAM)
- [EAT FOOD NOT BOMBS by Ben Grosser](https://editor.p5js.org/bengrosser/full/Ml3Nj2X6w?fbclid=IwAR0pegtorx1cyYYKsEh8jNXTHdFika6tGIGOjEUgr8vTXGLHv6ajYuY4EQI)

**Tasks (RUNME)**
1. Think of a simple game that you want to design and implement, what are the objects required? What are their properties and behaviors? At the most basic level, you need to **use class-based object oriented approach** to design your game components that can exhibit certain behaviors (that means you need to at least have a class, constructor and method). If you can master objects and classes, you may further work on a mini game (with basic rules) and/or with p5.play that works with data input and interactive devices (such as keyboard and mouse) that you have learned from previous classes.

**Questions to think about as README:**
- **Describe** how does your game/game objects work?
- **Describe** how you program the objects and their related attributes and methods in your game.
- **What** are the characteristics of object-oriented programming and implications of abstraction? 
- **Extend/connect** your game project to wider digital culture context, can you think of a digital example and describe how complex details and operations are being **abstracted**?

## Required readings:
- Fuller, M & Goffey, A. "The obscure Objects of Object Orientation." *How to be a geek : essays on the culture of software*. Eds Matthew Fuller. Cambridge, UK, Malden, MA, USA : Polity, 2017
- [p5.js examples - Objects](https://p5js.org/examples/objects-objects.html)
- [p5.js examples - Array of Objects](https://p5js.org/examples/objects-array-of-objects.html)
- Shiffman, Daniel. Courses 2.3, 6.1, 6.2, 6.3, 7.1, 7.2, 7.3, [Code! Programming with p5.js on YouTube](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA), 2018 [Accessed 9 Sep. 2019]. (practical usage on conditional statements, loops, functions and arrays)

## Further readings:
- Lee, Roger Y. *Software Engineering: A Hands-On Approach*. Springer, 2013. 17-24, 35-37 (ch. 2 Object-Oriented concepts)
- Crutzen, Cecile and Kotkamp Erna. Object Orientation. *Software Studies\a lexicon*. Eds Matthew F. MIT Press, 2008. 200-207
- Black, Andrew P. [Object-oriented Programming: some history, and challenges for the next fifty years](https://arxiv.org/abs/1303.0427). 2013.
- Dahl, Ole-Johan. [T he Birth of Object Orientation: the Simula Languages](https://link.springer.com/chapter/10.1007/978-3-540-39993-3_3). *Object-Orientation to Formal Methods*. Eds. Owe O., Krogdahl S., Lyche T. Lecture Notes in Computer Science, vol 2635. Springer, Berlin, Heidelberg . 2004.
- [16.17 Inheritance in JavaScript - Topics of JavaScript/ES6 by Daniel Shiffman](https://www.youtube.com/watch?v=MfxBfRD0FVU&feature=youtu.be&fbclid=IwAR14JwOuRnCXYUIKV7DxML3ORwPIttOPPKhqTCKehbq4EcxbtdZDXJDr4b0)

## Notes:



[^history]: Simula, developed in the 1960s at the Norwegian Computing Center in Oslo, is considered to be the first object-oriented programming language. Despite being first, Smalltalk is more often cited, first developed for educational use at Xerox Corporation's Palo Alto Research Center in the late 1960s and released in 1972. For more on the history of this, see ?????

[^Fazi]: Beatrice M. Fazi and Matthew Fuller, "Computational Aesthetics", in Christiane Paul, ed., *A Companion to Digital Art* (Hoboken, NJ: Wiley Blackwell, 2016), 281-296. 

[^Fuller]: Matthew Fuller & Andrew Goffey, "The Obscure Objects of Object Orientation", in Matthew Fuller, ed., *How to be a Geek: Essays on the Culture of Software* (Cambridge, UK: Polity, 2017).

[^binary]: Limor Fried & Federico Gomez Suarez (n.d). "Binary & Data". Khan Academy. Available at: https://www.khanacademy.org/computing/computer-science/how-computers-work2/v/khan-academy-and-codeorg-binary-data.

[^Madsen]: Madsen, Ole & Møller-Pedersen, Birger & Nygaard, Kristen. (1993). Object-Oriented Programming in the BETA Programming Language, pp. 16-18.  

[^francis]: *ToFu Go!* is freely available on the App store for iphone and iPad, see: https://apps.apple.com/us/app/tofu-go/id441704812. 

[^francis2]: See the interview of Francis Lam in 2012 here: https://www.design-china.org/post/35833433475/francis-lam

[^App]: *ToFu Go!* is freely available on the App store for iphone and iPad, see: https://apps.apple.com/us/app/tofu-go/id441704812 

[^splice]: `splice()` is a p5.js function, see here: https://p5js.org/reference/#/p5/splice 

[^push]: `push()` is a JavaScript function that is used in an array to add one or more elements to the end of an array, see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push 

