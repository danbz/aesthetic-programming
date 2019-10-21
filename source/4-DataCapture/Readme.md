Title: 4. Data Capture
page_order: 4

## 4. Data Capture

## 4.1 function setup()
This chapter focuses on how a program can capture and process input data. In some programming books, this would fall into the topic of interactivity, such as interacting with physical devices like a mouse and a keyboard. In the earlier chapters we have already introduced the functions `mouseX` and `mouseY` (see Chapter 2 - Variable Geometry), as well as the concept of listening events via the functions `mouseIsPressed()` and `windowResized()`(see Chapter 3 - Infinite Loops).  This chapter is more an extension of those and present with more different types of data capture, including mouse movement, keyboard press, audio volume and facial recognization with a web camera. Framing under the topic of Data Capture instead of Interactivity is to shift away our attention from immediate interactions to think about what kinds of possible data can be captured, and how data is being computed and processed so as to start unfolding the complexity of 'capture', such as what do these captures do to us and what these mean in digital culture especially the phenomena of datafication. 

The chapter begins with a familiar button that we can picture it in our head, something like switching on/off a light, a kettle and many other electronic devices. A button is "seductive" (ref: pold p. 34), indicating a potentiality of interaction and generating a desire to press it, and usually it comes with an immediate feedback. Similarly in software and platforms like Facebook, a button indicates a call for actions, inviting a user to click and and interact with it in a binary state: on or off, like or (not)like, accept or cancel. Further with the capability to customize wordings on a button, Pold suggests that a button is developed with distinct functionality and signification (ref: pold p. 31). The following section will introduce the sample code of this chapter that is centered around the button of likes to demonstrating the potential of interactions, customizations and manipulations. Then it will further discuss different modes of capture in contemporary culture.

## 4.1.1 Start()
![datacapture](https://gitlab.com/siusoon/aesthetic-programming/raw/master/Ap2019/class04/sketch04.gif) [need to update the image and runme /w]

[Runme](xxx_ch4)    

Starting with this sample code of Data Capture, the sketch incorporates four data inputs around the customized-like button: 
1. The button is clickable through a mouse in which to clearing the screen.
2. The button will rotate 180 degree when you click on the spacebar of your keyboard.
3. The button will change its size according to the volume of the audio/mic input.
4. The button will move according to the facial recognization technology, following the mouth of your face. 

The button is customized with Cascading Style Sheets (aka CSS), describing the style and visual elements of an object in a format consists of a selector and a declaration block. This simply means *which* element you want to customize and *how* to do it precisely. CSS works with HTML elements and we use the library p5.dom (which is included in the html file by default when you download the whole completed p5.js library) to create most form elements, including button. 

## 4.1.2 Exercise in class

By looking at the like button closely in the RUNME, can you come up with a list of possible customization that have been introduced in the sample code? 

Then look at the source code in the next section (line 67-83) and can you describe some of the button's styling in natural language? 

## 4.2 Source Code 
```javascript
/*Data Capture for Chapter 4
//Interacting with captured data: Mouse, Keyboard, Audio, Web Camera
check:
1. sound input via microphone: https://p5js.org/examples/sound-mic-input.html
2. dom objects like button
3. p5.sound library: https://github.com/processing/p5.js-sound/blob/master/lib/p5.sound.js
4. Face tracking library: https://github.com/auduno/clmtrackr
5. p5js + clmtracker.js: https://gist.github.com/lmccart/2273a047874939ad8ad1
*/
let button;
let mic;
let ctracker;

function setup() {
  background(100);
  // Audio capture
  mic = new p5.AudioIn();
  mic.start();

  //web cam capture
  let capture = createCapture();
  capture.size(640,480);
  capture.position(0,0);
  //capture.hide();
  let c = createCanvas(640, 480);
  c.position(0,0);

  //setup face tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);

  //styling the like button with CSS
  button = createButton('like');
  button.style("display","inline-block");
  button.style("color","#fff");
  button.style("padding","5px 8px");
  button.style("text-decoration","none");
  button.style("font-size","0.9em");
  button.style("font-weight","normal");
  button.style("border-radius","3px");
  button.style("border","none");
  button.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
  button.style("background","#4c69ba");
  button.style("background","-moz-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%, #3b55a0))");
  button.style("background","-webkit-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","-o-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","-ms-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style("background","linear-gradient(to bottom, #4c69ba 0%, #3b55a0 100%)");
  button.style("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c69ba', endColorstr='#3b55a0', GradientType=0 )");

  //mouse capture
  button.mousePressed(clearence);  //click the button to clear the screen
}

function draw() {
  //sound capture
  let vol = mic.getLevel(); // Get the overall volume (between 0 and 1.0)
  button.size(floor(map(vol, 0, 1, 40, 500)));  //map the mic vol to the size of button: check map function: https://p5js.org/reference/#/p5/map

  let positions = ctracker.getCurrentPosition();
  if (positions.length) { //check the availability of web cam tracking
    button.position(positions[60][0]-20, positions[60][1]);  //as the button is too long, i wanna put it in the middle of my mouth, and -> 60 is the mouth area
    for (let i=0; i<positions.length; i++) {  //loop through all major face track points (see: https://www.auduno.com/clmtrackr/docs/reference.html)
       noStroke();
       fill(map(positions[i][0], 0, width, 100, 255), 0,0,10);  //color with alpha value
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 5, 5);
    }
  }
}

function clearence() {
  clear();
}

//keyboard capture
function keyPressed() {
  if (keyCode === 32) { //spacebar - check here: http://keycode.info/
    button.style("transform", "rotate(180deg)");
  } else {   //for other keycode
    button.style("transform", "rotate(0deg)");
  }
}
```
## 4.3 p5.dom: Creating and Styling a button

The basic structure for creating form elements is relatively simple. Under the p5.js reference guide under the DOM category (ref: https://p5js.org/reference/#group-DOM), there are different form creation syntaxes e.g `createCheckbox()`, `createSlider()`, `createRadio()`, `createSelect()`, `createFileInput()`, etc. The one that we need for creating a button is called `createButton()`. 

First you need to give an object name for a button, and of course a different name if you have more than one so that you can set the properties for each individual one. 

- `let button;`: declare the dom object name
- `button = createButton('like');`: create a button and consider the text display of the button
- `button.style("xxx","xxxx");` : This is the CSS standard, where the first argument is a selection and the second is a declaration block. For example if you want to set the font color, then you can put in "color" and "#fff" for the arguments. (ref/footnote: This can be easily checked out the possible styling of a button, and here is some examples: https://www.w3schools.com/csS/css3_buttons.asp) For this specific sample code, all the styling are copied from Facebook interface directly by looking into their CSS source code. 
- 


button.mousePressed();
button.size();
button.position();
```

https://p5js.org/reference/#/p5.Element

## The Concept of Capture

## mouse
## keyboard
## audio
## face 

## 4.2.1 Exercise in class

## 4.7 While()

## 4.8 Mini_Exercise[4]: Capture All

**Objective:**
- To experiment various data capturing inputs, including audio, mouse, keyboard, web camera and beyond.
- To critically reflect upon the activity of data capture in digital culture (beyond buttons).

**To get some additional inspiration here:**
- [nonsense](http://siusoon.net/nonsense/) (2015) by Winnie Soon (look at the comment in the source code to get a sense of the work's concept)
- [Facebook Demetricator](https://bengrosser.com/projects/facebook-demetricator/) by Benjamin Grosser
- [LAUREN](http://lauren-mccarthy.com/LAUREN) by Lauren McCarthy
- [Feedback Machines](https://www.creativeapplications.net/processing/feedback-machines-mis-using-technology-non-linear-behavioural-systems/)

**Tasks (RUNME):**
1. Experiment various data capturing input and interactive devices, such as audio, mouse, keyboard, web camera, etc.
2. Develop a sketch that response loosely to the open call ["CAPTURE ALL"](https://transmediale.de/content/call-for-works-2015) from Transmediale 2015 that acts as the guideline for this mini exercise. (Imagine you are submitting a sketch/an artwork/a critical or speculative design work to Transmediale, hoping your sketch will be selected in the forthcoming exhibition. It is not a usual 'design brief' as you normally see with clear 'instructions' or 'problems to be solved' but it requires more conceptual thinking on problematizing the notion of 'capture all' and to think about what does it mean by 'data capture'.)

**Questions to think about as README:**
- **Describe** your program and what you have used and learnt
- **Articulate** how do your program and thoughts behind address the open call from Transmediale 2015. 
- What might be the cultural implicatons of data capture? 

## Required readings:
- Pold, Søren. "Button" in *Software Studies* (Fuller, M ed), MIT Press 2008.
- Gerlitz, Carolin, and Helmond, Anne. “The like Economy: Social Buttons and the Data-Intensive Web.” *New Media & Society* 15, no. 8 (December 1, 2013): 1348–65.
- [p5.js examples - Interactivity 1](https://p5js.org/examples/hello-p5-interactivity-1.html)
- [p5.js examples - Interactivity 2](https://p5js.org/examples/hello-p5-interactivity-2.html)
- [p5.dom library reference](https://p5js.org/reference/#/libraries/p5.dom)

## Further reading:
- Shiffman, Daniel. (2017) 8. HTML / CSS/DOM - p5.js Tutorial [online] Available at: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX [Accessed 09 Sep. 2019].
- [clmtrackr - Face tracking javascript library](https://github.com/auduno/clmtrackr) by Audun M. Øygard
- Charlton, James (2015). [Add to Shopping Basket](http://www.aprja.net/add-to-shopping-basket/). *APRJA* 4.1.
- Bivens, R. (2017). The gender binary will not be deprogrammed: Ten years of coding gender on Facebook. New Media & Society, 19(6), 880–898. https://doi.org/10.1177/1461444815621527

## Notes