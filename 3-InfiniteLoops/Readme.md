## 3. Infinite Loops

## 3.1 function setup()
In computer programming, the concept of loop is highly related to repetition, control and automation. For example, the function `draw()` also exhibits some kinds of repetition in p5.js while `frameRate()` controls how many times to run the draw function in a second. Once you run the whole program, things will run on its own, for example the program automatically captures the mouse coordinates of the movement. Extending from programming to applications, the feature of loop can be observed in mandune daily activities and operations, such as the checking logic of a metro/underground/train card balance in kiosk machines, and the program does the same task by capturing data via the card reader and outputting the card balance amount on a screen. If variables highlight the changes over time, then loops focus on repetition and operative tasks, but they are both inter-related in programming. 

Mathematician Augusta Ada Byron Lovelace first introduced the concept of a loop in the early nineteenth century. She recognised that there were repeatable operations in the conceptual design of the operating machine that was regarded as “the first automatic, general-purpose computing machine ever designed” (ref: Kim & Toole, 1999, p. 76), known as Charles Babbage’s Analytical Engine. The concept of a loop, which she called a ‘cycle,’ was conceived in 1834 in her notes on the Analytical Engine which set a precedent for the direction in which digital computers would be later developed. Her notes include (in the form of a diagram in Note G) the program procedures, also called the Bernoulli numbers program, of the Analytical Engine. The diagram utilises two loops to indicate the repetition of a set of instructions with conditions (ref: Kim & Toole, 1999, p. 78), minimizing duplicate efforts to write the repeatable operation again. Arguably, the concept of a loop in modern coding practice is highly influenced by her insights into the handling of repeated machine operations expressed in a concrete diagramatic manner, which depicts the essence of repetition and condition in a cycle. Modern high-level programming language includes a loop function, allowing a fragment of source code to be repeatedly executed. 

<img src="http://media.factmyth.com/2015/10/ada-lovelace-bernoulli-note-g.jpg" width ="700"><br>
*Figure 3.1: The diagram on Bernoulli in Note G by Ada Lovelace*

### 3.1.1 Start()
For this chapter, we are using the cultural icon - Throbber as a way to guide the programming tasks, but it also acts as an object for us to to think through the concept of a loop and the relations with repetition, time and temporality. Users usually encounter a distinctive spinning icon during the loading, waiting and streaming of data content. Such graphical animation known as throbber indicates to users that something is loading and in-progress, but nothing more. Interestingly, a throbber does not indicate any completed or finished status and progress and all that is presented is a spinning icon, perceived as repeatedly spinning under constant speed as well as hinting at invisible background activities for an indeterminate and unforeseeable timespan. Throbber, as a cultural icon, expresses various dimensions of time at our times. We will introduce a few simple throbber related sample code and then it will lead to the artwork *Asterisk Painting* by John P. Bell.  

## 3.2 Decode 
We are moving from static objects (like shapes) to a mix of static and moving objects here. 
<br><img src="https://gitlab.com/siusoon/aesthetic-programming/raw/master/Ap2019/class03/throbber.gif" width="380"><br>
*Figure 3.2: The runme of sample code - sketch 3_1* [need to change the path /w]

By examining the RUNME (ref) of a simple throbber, can you describe the different elements of the work and imagine how they operate computationally in human language.

1) **Speculation** - based on what you see on the screen:
    - What do you see/hear/experience on the screen?
        - What are the elements on the screen?
        - What are moving and not moving?
        - How many ellipses at the center?
        - Try to resize the window and see what happens?
    - Further questions:
        - how to set the background color?
        - how does an ellipse rotate? 
        - how to make a ellipse fades out and rotates to the next position?
        - how to position the ellipse, the red lines and the image?
        
2) **Experimention** - Change some of the code parameters
    - Try to change some of the parameters e.g background(), framerate(), drawThrobber()
    - There are some new functions are used, can you check that out in the p5.js reference? (e.g loadImage(), push(), pop(), translate(), rotate())
    
3) **Mapping** - Map some of the elements from #1 to the source code level 
    - Can you identify the part/block of the code responds to the elements that you have speculated before?

4) **Technical question/issues:**
    - `let cir = 360/num*(frameCount%num);` <br> What this line means? (can check with [Golan Levin's tutorial](https://www.youtube.com/watch?v=r5Iy3v1co0A) on the modulo operator(ref: https://www.youtube.com/watch?v=r5Iy3v1co0A) 
    
    - What is special about the below function struture? 
    
    ```javascript
    function drawThrobber(num) {
        //something here
    }
   ```
### 3.2.1 Source Code
 ```javascript
//ch3_1
let img;
let img_width= 512;
let img_height=512;

function preload() {
 img = loadImage("data/waiting.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 background(10);
 frameRate (8);  //try to change this parameter
}

function draw() {
  fill(70,80);  //check this syntax with alpha value
  noStroke();
  rect(0, 0, width, height);
  image(img, (width-img_width)/2,(height-img_height)/2);
  drawElements();
}

function drawElements() {
  let num =9;
  push();
  translate(width/2, height/2); //move things to the center
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  let cir = 360/num*(frameCount%num);  //to know which one among 8 possible positions.
  rotate(radians(cir));
  noStroke();
  fill(255,255,0);
  ellipse(35,0,22,22);  //the moving dot(s), the x is the distance from the center
  pop();

  stroke(255,0,0);
  line(60,0,60,height);   //a static line
  line(width-60,0,width-60,height);   //a static line
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 ```

## 3.3 Image 

To display the throbber image in a PNG format, the sample code utilizes few functions. The logic is to first load the exact path of the image and then position it at the center of the screen. The sample code does not define the exact canvas size, but rather the size is determined by the existing width and height of the current window. This illustrates in line 11 `createCanvas(windowWidth, windowHeight);`. Again, the two variables are defined by the p5.js library. 

1. `function preload() {}`: This function is called directly before `setup()` and `draw()`. The purpose is to make sure the image is loaded fully before starting other things. It is very useful when the image is big in size and you have multiple of them. Similarly, you can also load files/data that are related to other medium like sounds, text files, etc.  
- `loadImage()`: This syntax is to specify what you want to load and this is about loading an image. The image file is located inside the data folder, and as such a relative path to the index.html file is written `img = loadImage("data/waiting.png");`. Since we need to reuse the image in order to display in a particular position (or you may want to further manipulate the image), therefore a global variable has been defined as `let img` at the top. 
- `image()`: This is a syntax to draw an image on the canvas. At the most basic level it specifics three parameters 1) which image, 2 & 3) where to locate in terms of x and y coordinates - `image(img, (width-img_width)/2,(height-img_height)/2);`. Further parameters include the size you want to display, as well as displaying the subsection of the source image. [ref: https://p5js.org/reference/#/p5/image] For this sample code, I want to simply display the image in the middle, as such the program makes use of the variables `width` and `height` of the canvas (can refer to the previous chapter) as well as the size of the actual image, which has defined through global variables, to calculate and position the image at the center via arithmetic operations.

## 3.4 Function
A function of code in p5.js starts with the syntax `function() {}`, containing "a self-contained section of code" (Ref: Derek p. 101) to peform a certain task. For the most basic built-in functions in p5.js, `setup()` and `draw()`, specifying the contained code in relation to a particular purpose as setting up the environment for running the program, as well as doing things over time. Other built-in functions include `preload()` and `windowResized()` in the provided sample code, which serve the purpose of preload image(s) and readjust the canvas size if there is any event of window resizing. The later one suggests an event listener implements at the code level to not only run once, but *constantly* listening to events of window resizing specifically and it is similar to other listening events such as `mouseIsPressed()`. This is considered as asynchronicity, which means some other events occur concurrently with the main program flow. For these event listeners, it works fine but this may not be good for all the scenarios. If some of the images or files are too big, then it takes time to load and display on a screen. Having running the setup and draw function but the images or files are not fully loaded will result in empty display. To escape from such asynchronicity, the function `preload()` is used to force the program finish loading files before the program moves to setup and draw. 

Apart from built-in functions, the sample code contains the custom-one called `function drawElement();` which is invoked by line 21: `drawElement();` within the `draw()` function. Defining a function is relatively simple in JavaScript with the keyword "function". From the function name "drawElement", one may get a sense of what this function does, which is mainly to draw ellipses and the two lines in a particular size, position and color, as well as making ellipses and lines to rotate in a clock-wise direction and statically stay at a position respectively. There are many ways to achieve drawing the same result especially with object-oriented approach but we are still in the early stage of learning to program, therefore we work on example that can do similar tasks that can be more aligned with our learning progress. Some of the code are intentionally written in a way that is less efficient but can serve the purpose of unfolding some of the key elements. 

Programmers like to split a big task into smaller operations and procedures, which is easier to structure, manage, debug, read and potentially collaborate with other programmers. In `function drawElement();`, the sample code is just simply seperate out from the function `draw()`, and clearly indicate this particular part of code relates to drawing the different elements on a screen. Of course one can also seperate out the drawing of ellipses and lines, and it is a subjective decision to decide how details you need to seperate the tasks.  

There is another type of function where you can specify with arguments passing to the function and receive a return value.  See below example:
```javascript
let x = sum(4, 3, 2);   
print(x);
function sum(a, b, c) { //passing values 4 as a, 3 as b, 2 as c to the function sum
  return a + b + c; //return statement 
}
```
> output: 
"9"

You can also try to type this in the console area `let x = sum(4, 3, 2); print(x); function sum(a, b, c) {return a + b + c;}` and it returns the number 9 as the output which has summed the values 4, 3 and 2. The arguments a, b and c are parameter variables. The function "sum" can be reused if you pass other values say another line of code `let y = sum(5,6,7);` and the return value of y would be 18. 

## 3.5 Transform
In general, the transform-related functions apply a 2D or 3D transformation to an element or object. For the provided sample code, there are two specific transformational functions have been used. 
1. `translate()`: This function allows you to move or displace objects within the display window. For example, moving the ellipses to center (`translate(width/2, height/2);`). The ellipse is drawn as `ellipse(35,0,22,22)` which takes in (35,0) as the x and y coordinates, where 22 is the size of it. If we don't have the upfront `translate()` function, the ellipse will be placed at the top left corner instead while the x coordinate value "35" is the distance of the circulating ellipses from the center position.
2. `rotate()`: By using the function `rotate()`, the object ellipse, in this sample code, will rotate at a certain angle. The default unit for rotation is radians. As such, the code is written as `rotate(radians(cir));`. `rotate()` takes in radians as the default mode and if you want to change to the degree mode, you can add the code `angleMode(DEGREES)`. 
In the most simple way, there are in total 9 ellipses (which is indicated as `let num=9;`), and each has a difference of 40 degree (i.e 0.968 rad) which is derived from 360/9. A circle has 360 degrees and to rotate the ellipse over time, it requires the time element to calculate when to move and how to move. This is how the function `frameCount` comes in, which counts the number of frames that have been displayed since the program started (ref: https://p5js.org/reference/#/p5/frameCount). The line `let cir = 360/num*(frameCount%num);` illustrates the use of a modulo operation to find the remainder after division of one number by another. As such the value of the variable `cir` is only limited to the multiples of 40: 0, 40, 80, 120, 160, 240, 280 and 320. 

There are also other transform-related functions such as `scale()`, `shearX()`, `shearY()`. (ref: https://p5js.org/reference/#group-Transform) 

Further to the control of transformation, `push()` and `pop()` functions are commonly used to saves the current style and retores such setting respectively. Style such as color and setting such as rotate and translate. Let's explain with the except of code: 

```javascript
function drawElements() {
  let num =9;
  push();
  translate(width/2, height/2); //move things to the center
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  let cir = 360/num*(frameCount%num);  //to know which one among 8 possible positions.
  print(cir);
  rotate(radians(cir));
  noStroke();
  fill(255,255,0);
  ellipse(35,0,22,22);  //the moving dot(s), the x is the distance from the center
  pop();

  stroke(255,0,0);
  line(60,0,60,height);   //a static line
  line(width-60,0,width-60,height);   //a static line
}
```
The last three lines are about the drawing of two static red lines on the left and right side of the canvas. Logically speaking, the translate and rotate functions should also apply to these two lines but because the `pop()` function is in placed right after all the drawing of ellipses and such transform features, therefore, would not impact the lines. But if you move the line `pop()` till the end, then the two lines will also rotate and translate. This is to illustrate the idea of how `push()` and `pop()` could be used and where to place them does matter (ref: https://p5js.org/reference/#/p5/push).


## loops
Iterations: For/ While Loops
Conditional statements and Functions
Time related syntax, machine and human time (unix-epoch), clocks
Transform: translate(), rotate(), push/pop()
Artwork: Asterisk Painting (2013) by Bell John

## Source code

## While()
Temporalities: real-time, machine time, micro-time and just-in-time (live) coding (Ernst's essay - if... then - loop forever)

## Exercise in class

## Mini_Exercise[3]: Designing a throbber 

## Required reading:
- Shiffman, Daniel. (2018) 3.1,3.2,3.3,3.4,4.1,4.2,5.1,5.2,5.3,7.1,7.2: Code! Programming with p5.js [online] Available at: https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2 [Accessed 09 Sep. 2019]. (practical usage on conditional statements, loops, functions and arrays)
- Soon, Winnie. Throbber: Executing Micro-temporal Streams, *Computational Culture*, inpress, 2019.
- Close reading on the work *Asterisk Painting* by John P. Bell, ported to p5.js, and modified, by Winnie Soon 

## Further reading:
- Bek, Wilfried Hou Je. "Loop" in Software Studies (Fuller, M ed), MIT Press 2008.
- Robinson, Derek. "Function" in Software Studies (Fuller, M ed), MIT Press 2008.
- Farman, Jason. Fidget Spinners. *Real Life*, 2017.

## Notes: 

//
https://gitlab.com/siusoon/aesthetic-programming/blob/master/Ap2019/class03/class03.md

In-Class structure:
Arrays
Conditional Statements
Iterations: For and While Loops
Time related syntax:

FrameRate(), FrameCount, setInterval(), millis()




