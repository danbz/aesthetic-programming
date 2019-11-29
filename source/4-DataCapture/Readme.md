Title: 4. Data Capture
page_order: 4

## 4. Data Capture

## 4.1 setup()
This chapter focuses on how a program captures and processes input data. In some programming books, this would fall under the topic of interactivity, such as interacting with physical devices like a mouse and a keyboard. This is already familiar in  earlier chapters where we already introduced the functions `mouseX` and `mouseY` (see Chapter 2 - VariableGeometry), as well as the idea of listening events via the functions `mouseIsPressed()` and `windowResized()` (see Chapter 3 - InfiniteLoops). This chapter extends these ideas and presents different types of data capture, including mouse movement, keyboard press, audio volume and face tracking with a web camera. Framing this under data capture allows us to move from immediate interactions to question what kinds of data is being captured, and how it is being processed, and the wider consequences of this as part of a broader cultural tendency that tends to be referred to as *datafication*. The term refer to the ways in which all aspects of our life seem to be turned into data which is subsequently transferred into information realised as a new form of value. Articulated in this way we can say that social media platforms datify people's friendships, thoughts, and experiences. This is what Kenneth Cukier and Victor Mayer-Schöenberger describe in their article "The Rise of Big Data",[^bigdata] in the context of the need for large amounts of data to be harvested for computational purposes, such as to perform predictive analytics for instance (think of us saying, you bought this book, and we think you might like these other ones too). 

We will come back to these issues later in the book (Chapter 10 - MachineLearning) but suffice to say for now that in the era of big data, there appears to be the need to capture everything, even the most mundane activities like button pressing. The chapter begins with this example, a relatively simple action like switching on/off a device — a light, a kitchen appliance, and so on. A button is "seductive",[^Pold] generating the desire to press it, with immediate feedback and instant gratification. Similarly in software and online platforms like Facebook, a button indicates a call for inter-action, inviting the user to click and to interact with it in a binary state: on or off, like or not-like, accept or cancel. The functionality is simple and gives the impression of *interaction* despite the severe limitations of choice on offer. Indeed this might be considered to be more *interpassive* than interactive, like accepting the terms of conditions for a social media platform like Facebook without bothering to read the details, or liking something as a way of registering engagement however superficial. Basically permission is given to capture data. With this in mind, the next section will introduce the sample code for a customizable Like button in order to demonstrate the potential of simple interactions like button-press, and how you might begin to reflect on how data is captured through such processes for specific ends. 

## 4.1.1 Start()
![datacapture](https://gitlab.com/siusoon/aesthetic-programming/raw/master/Ap2019/class04/sketch04.gif) 
<br>
*Figure 4.1 The web interface and interaction of Data Capture*<br>
[need to update the image and runme /w]

[RUNME](xxx_ch4)    

Starting with this sample code, the sketch incorporates four data inputs for a customizable Like button: 
1. The button is clickable through the mouse to clear the screen.
2. The button will rotate 180 degrees when you click on the spacebar of your keyboard.
3. The button will change its size according to the volume of the audio/mic input.
4. The button will move according to the facial recognization software, following what it considers to be the mouth of the face. 

The button is customized using CSS (Cascading Style Sheets), which describes the style and visual elements of an object in a format that onsists of a selector and a declaration block. These simply identify *which* elements you want to customize and *how* to do it precisely. CSS works with HTML elements and we can use the library p5.dom (which is included in the html file by default when you download the whole completed p5.js library) to create most form elements, including a button. 

## 4.1.2 Exercise in class
By looking at the Like button closely in the RUNME, can you come up with a list of potential customizations that have been introduced in the sample code? 

Then look at the source code in the next section (lines 67-83) and describe some of the button's styling in your own words. 

## 4.2 Source Code 
```javascript
/*Data Capture for Chapter 4
//Interacting with captured data: Mouse, Keyboard, Audio, Web Camera
check:
1. sound input via the microphone: https://p5js.org/examples/sound-mic-input.html
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
  //getting the audio data
  let vol = mic.getLevel(); //get the overall volume (between 0 and 1.0)
  button.size(floor(map(vol, 0, 1, 40, 500))); //map the mic vol to the size of button, check map function: https://p5js.org/reference/#/p5/map

  let positions = ctracker.getCurrentPosition();
  if (positions.length) { //check the availability of web cam tracking
    button.position(positions[60][0]-20, positions[60][1]);  //as the button is too big, place it in the middle of my mouth, and -> 60 is the mouth area
    for (let i=0; i<positions.length; i++) {  //loop through all major face track points (see: https://www.auduno.com/clmtrackr/docs/reference.html)
       noStroke();
       fill(map(positions[i][0], 0, width, 100, 255), 0,0,10);  //color with alpha value
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 5, 5);
    }
  }
}

function clearance() {
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
## 4.3 p5.dom: Creating and styling a button

The basic structure for creating from elements is relatively simple. Under the p5.js reference guide under the DOM category (ref: https://p5js.org/reference/#group-DOM), there are different form creation syntaxes, e.g. `createCheckbox()`, `createSlider()`, `createRadio()`, `createSelect()`, `createFileInput()`, and so on. The one that we need for creating a button is called `createButton()`. 

First you need to assign an object name for the button, and of course different names if you have more than one so that you can set the properties (ref: see the method list of p5.Element here: https://p5js.org/reference/#/p5.Element) for each individual one. 

///// add - Furthermore with the capability to customize wordings on a button, Pold suggests that a button is developed with distinct functionality and signification (ref: pold p. 31). 

- `let button;`: First is to declare the object by assigning a name.
- `button = createButton('like');`: Create a button and consider the text display of the button.
- `button.style("xxx","xxxx");`: This is the CSS standard, where the first argument is a selection and the second is a declaration block. For example if you want to set the font color, then you can put in "color" and "#fff" for the arguments. (ref/footnote: This can be easily checked out the possible styling of a button, and here are some examples: https://www.w3schools.com/csS/css3_buttons.asp) For this specific sample code, all the styling are copied from the Facebook interface directly (as of 2015) by looking into their CSS source code. Those styling include `display`, `color`, `padding`, `text-decoration`, `font-size`, `font-weight`, `border-radius`, `border`, `text-shadow`, `background` and `filter`, with the additional added one called `transform`.  
- `button.mousePressed(clearance());`: This specifies what to do (which function to call) when the program listens to the mousePressed event. Within the customized function `clearance()`, the `clear()` is a JavaScript built-in function and in this case is to clear the screen.    
- `button.size();`: This sets the size of the button in terms of the width and height. 
- `button.position();` This sets the position of the button. 

## 4.4 Mouse Capture 
In the previous chapter the program listened to the mouse movement and captured the corresponding x and y coordinates by using the built-in functions `mouseX` and `mouseY`. This sample code incorporates a specific `mousePressed` function which is called once every time the user presses a mouse button. See the excerpt of code below:

```javascript
button.mousePressed(clearence);  
//click the button to clear the screen

function clearence() {
  clear();
}
```
The function `mousePressed()` is attached to which button you want to listen and trigger actions. There are other mouse related mouseEvents (ref: See the related function in the reference page, which is under Events > Mouse> https://p5js.org/reference/), such as `mouseClicked()`, `mouseReleased()`, `doubleClicked()`, `mouseMoved()`, etc. 

## 4.5 Keyboard Capture
```javascript
function keyPressed() {
  if (keyCode === 32) { //spacebar - check here: http://keycode.info/
    button.style("transform", "rotate(180deg)");
  } else {   //for other keycode
    button.style("transform", "rotate(0deg)");
  }
}
```

The use of `keyPressed()` function is to listen any keyboard pressing events. If you want to specify any `keyCode` (that is the actual key on the keyboard), the sample code shows how a conditional statement can be implemented within the `keyPressed()` function. Within the if-else conditional statment, if a keyboard press of a spacebar is detected, then the button will rotate in 180 degree and any other keys will just resume back to the original state which is 0 degree.

`keyCode` takes in numbers or special keys like BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW. In the above example, the `keyCode` of a spacebar is 32.

Capital and small letter do not make a different and they are using equavilent to the same keyCode, such as 'A' and 'a' with the same `keyCode` as 65.  

Similar to mouseEvents, there are also many other keyboardEvents (ref: See the related function in the reference page, which is under Events > Keyboard> https://p5js.org/reference/), such as `keyReleased()`, `keyTyped()`, `keyIsDown()`. 

## 4.6 Audio Capture
```javascript
let mic;

function setup() {
  // Audio capture
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  //getting the audio data
  let vol = mic.getLevel(); // Get the overall volume (between 0 and 1.0)
  button.size(floor(map(vol, 0, 1, 40, 500)));  //map the mic vol to the size of button: check map function: https://p5js.org/reference/#/p5/map
}
```
To deal with basic web audio p5.sound library is the one used in the sample code. It includes features like audio input, sound files playback, audio analysis and synthesis. (ref: see the different features of the sound library: https://p5js.org/reference/#/libraries/p5.sound)

The library should be also included in the html file (as demonstrated in Chapter 1 - Getting Started) so that we can use the corresponding functions like `p5.AudioIn()` and `getLevel()`. 

Similar to a button, you first declare the object e.g `let mic;`, and then setting up the input source (usually from a computer microphone) and starting to listen the audio input (See the two lines within `setup()`). When the entire sample code is executed, a popup screen from a browser will ask for a permission to access the audio source. This audio capture only works when the access is granted. 

![](ch4_1.png)

*Figure 4.1: Permission for audio access*

![](ch4_2.png)

*Figure 4.2: Permission for camera access*

This sample code is only focused on the methods under `p5.AudioIn()`, which is to read the Amplitude (volume level) of the input source with the return value between 0 to 1.0 by using the method `getLevel()`.

A new function `map()` is introduced to map a number from one range to another. Since the return of the volume is range between 0 to 1.0, but this actual number will not make a significant different in terms of the size of the button. As such, the range of the audio input will then map to the size range of the button dynamically and on-the-fly. 

## 4.7 Face Tracker 
```javascript
let ctracker;

function setup() {
//web cam capture
let capture = createCapture();
capture.size(640,480);
capture.position(0,0);

//setup tracker
ctracker = new clm.tracker();
ctracker.init(pModel);
ctracker.start(capture.elt);
}

function draw() {
let positions = ctracker.getCurrentPosition();
if (positions.length) { //check the availability of web cam tracking
    button.position(positions[60][0]-20, positions[60][1]);  //as the button is too long, i wanna put it in the middle of my mouth, and 60 is the mouth area (check lib spec)
    for (let i=0; i<positions.length; i++) {  //loop through all major face track points
       noStroke();
       fill(map(positions[i][0], 0, width, 100, 255), 0,0,10);  //color with alpha value
       ellipse(positions[i][0], positions[i][1], 5, 5);
    }
}
}
```
For face capture, the sample code has used the clmtrackr which is a JavaScript library developed by a data scientist Audun M. Øygard in 2014 for fitting a facial model to faces in images or video (ref: https://www.auduno.com/2014/01/05/fitting-faces/). Based on the facial algorithms designed by Jason Saragih and Simon Lucey (ref: J. M. Saragih, S. Lucey and J. F. Cohn, "Face alignment through subspace constrained mean-shifts," 2009 IEEE 12th International Conference on Computer Vision, Kyoto, 2009, pp. 1034-1041.
doi: 10.1109/ICCV.2009.5459377), the library analyses a face and divides it into 70 points in real-time based on a pretrained machine training model on face images for classification. 

![](ch4_3.png)

*Figure 4.3: The tracker points of a face.*

What the program does in terms of face capture and recognization: 
1. `createCapture()`: This is a HTML5 <video> element that capture the feed from a web camera. In relation to this function would be to define the size (which is subjected to the resolution of the web camera) and position e.g `capture.size(640,480);` and `capture.position(0,0);`
2. `clmtrackr`: Similar to audio and camera use, first you need to initialize the tracker library, select the classified model and start tracking from the video source. 
3. `ctracker.getPosition()`: This is to loop through all the 70 tracker points and return the position in terms of x and y coordinates. Since the like button will follow the mouth of a face and the tracker point of a mouth is 60, the program then will return the position in terms of an array: `positions[60][0]-20` and `positions[60][1]`. The second array's dimension with [0] and [1] refers to the x and y coordinates specifically. 
4. The last part is to draw the ellipses the cover the face. A for-loop is implemented to loop through all the ctracker points and then get the x and y coordinates for the drawing of ellipses. 

## 4.8 Exercise in class
To familiar with the face capture, we can try the followings:

1. Explore the different modes of capture by tinkering various parameters such as `keyCode`, other keyboard and mouse events. 
2. Study the tracker points and try to change the position of the like button that you have customized in the earlier exercise. 
3. Try to test the boundary of facial recognition: to what extend a face can(not) be recognized?
4. How has facial recognization tecnology been applied in society? 

## 4.9 The Concept of Capture
After the demonstration of different inputs for data capture, this section discusses various examples of capture in our society and culture. It is more a showcase some possibilities of capture, and more importantly how these capture relate to the phenomena of datafication, commodification, surveillance and personalization, which is more around data politics to questioning how our data is being captured, quantified, stored and used, and for what purpose? Who has the power to access the captured data? 

### 4.9.1 Web Analytics and Heatmap
The most widely used web analytics service is currently offered by Google that tracks data on website traffic and browsing behaviors, including number of unique visits, average time on site, browser and operating system information, traffic sources and users' geographic locations, etc. 

![](ch4_4.png)
*Figure 4.4: Screenshot of Google Analytics*

Among different visualization tools, Heatmap is a graphical representation of data to visualize user behavior. It is commonly used in industries for the purpose of data analytics. For example, it is possible to track the cursor's position and compute the stay's duration on different parts of a web page so as to present which contents are hot or not. This is useful for many marketers to understand which part of their content is more attractive to their users. In particular if pages with advertisement, it will be useful for companies to analyze where to place the advertisement and content according to screen behaviors. 

![](ch4_7.png)

*Figure 4.5: An example of heatmap on analysing a web page*

Big companies like Facebook[ref: Will Conley (2013), Facebook investigates tracking users' cursors and screen behavior. Available at: https://www.slashgear.com/facebook-investigates-tracking-users-cursors-and-screen-behavior-30303663/.] constantly investigate differnet methods for data collection in order to optimize the screen presentation. Yet, how people know exactly about what have been captured and how data will be used?  

### 4.9.2 Form elements
Each form elements like a dropdown menu and a button signals different meaning with its affordance. Researcher Rena Bivens did a thorough analysis on Facebook's registration page in relation to gender options. When Facebook first launched to the market in 2004, gender field was not needed for the sign-up page. But things changed in 2008 where a drop-down list showed the selection of only Male and Female for registration and it further changed to the use of radio buttons to emphasize the binary options of gender representation [ref:   Bivens, R. (2017). The gender binary will not be deprogrammed: Ten years of coding gender on Facebook. New Media & Society, 19(6), 880–898. https://doi.org/10.1177/1461444815621527]. The breakthrough was on 2014 where Facebook allowed user to customize the gender field and one can select from a list of more than 50 custom gender options. According to Facebook, they want to enhance "personalized experiences" with "authetic identity" (ref: Facebook (2012) Form S-1 registration statement. Available at: https://infodocket.files.wordpress.com/2012/02/facebook_s1-copy.pdf (accessed 16 Oct 2019)). But this is also arguable whether such gender specific personalization (not only to Facebook but border culture) is actually enforcing gender division through social construction.

### 4.9.3 Metrics on likes/favorites
The use of a single like button and the six emoticons was launched in 2016 by Facebook including Like, Love, Haha, Wow, sad and Angry. All the clicks are *reduced* and *categorized* into emotional metrics and display on the web publicly. Those data will be used for part of the algorithmic calculation, prioritizing feeds to be shown to you and others. 

Interestingly, Facebook and Instagram were testing the feature of hiding public counts on posts so as to shift the audience attention from metrics to what they called "connecting people" in 2019 (ref: https://www.wired.co.uk/article/instagram-hides-likes). But such feature has been experimented by software artist Benjamin Grosser on his series of artworks on demetricator since 2012 to critique the digital culture of quantification (ref: See Grosser's artwork on Facebook Demetricator here: https://bengrosser.com/projects/facebook-demetricator/; Instagram Demetricator here: https://bengrosser.com/projects/instagram-demetricator/; Twitter Demetricator: https://bengrosser.com/projects/twitter-demetricator/ ) It is worth thinking about how such metrics affect the way of how you click and see. 

### 4.9.4 Self-censorship data 
In 2013, Facebook conducted a rsearch project about last-minute self-censorship [ref: See ref https://research.fb.com/publications/self-censorship-on-facebook/]. The project revealed the capability of tracking unposted status updates/posts/comments, which is the erased text or images while you are thinking and typing but haven't been posted publicly. This implies that Facebook is not only interested in what you have posted but what you have been thinking. 

### 4.9.5 Voice and Audio data 
Smart devices like our computers, phones and gagets are now equiped with the feature of voice recognization through Siri, Google Assistant or Alexa, turning an audio input into a command for software processing, and feedback with "more personalised experiences" to assist in many organizational works. Finn Ed uses the term "Culture Machines" to think about how algorithms are operated at a "marco-social level" that produces "cultural objects, processes and experiences" (p. 34). It is worth further thinking about these audio assistants, what are the ambitious of such cultural objects?

![](ch4_6.png)

*Figure 4.6: Screenshot of Voice & Audio activity*

### 4.9.6 Health tracker 
Within the domain of health and well being, one can find a growing trend of quantified self - a phenomenon of self-tracking with technology. Data such as movement, steps, heart rate and even sleep pattern can be traced and analyzed easily with software behind the use of wearable devices and gagets.

![](ch4_5.png)

*Figure 4.7: Screenshot of Sleep tracker*

There are also many other kinds of data that can be captured, quantified and analyzed as part of life, work and play. In 2015, transmediale, an annual festival for art and digital culture in Berlin, posted a call for works on such theme, addressing the culture's pervasive logic of CAPTURE ALL and its quantificaton of life, work and play. Some interesting questions worth to think about: "Are there still modes of being that resist the imperative of digital capitalism to CAPTURE ALL or is there no option but to play along? If so, are there artistic strategies and speculative approaches that do not play this game of quantification by the numbers? What are the blind spots and gaps of relentless quantification and gamification that can be exploited in order to carve out new ways of living?" [ref: See https://transmediale.de/content/call-for-works-2015]

## 4.10 While()

[unsorted notes /g]
*datafication*. As such we refer to the ways in which all aspects of our life seem to be turned into data which is subsequently transferred into information realised as a new form of value.

There is a tendency of think of data as raw and unmediated; and that somehow data should simply be allowed to speak for itself rather than be lost in the ornamentation of visualisation. In saying this we make reference to Edward Tufte’s guidelines for information graphics, and the removal of unnecessary graphical information to “let the data speak for itself" as he puts it. Of course in reality what happens is far from this, as unstructured data is selected, targeted, preprocessed and cleaned, mined, and so on, not least to make it human readable. Data begins relatively raw and uninterpreted, but in practice there is always some additional information about its composition, usually derived from the means by which it was gathered in the first place.

//////////data-subject

## 4.11 Mini_Exercise[4]: Capture All

**Objective:**
- To experiment various data capturing inputs, including audio, mouse, keyboard, web camera and beyond.
- To critically reflect upon the activity of data capture in digital culture (beyond buttons).

**To get some additional inspiration here:**
- [nonsense](http://siusoon.net/nonsense/) (2015) by Winnie Soon (look at the comment in the source code to get a sense of the work's concept)
- [Facebook Demetricator](https://bengrosser.com/projects/facebook-demetricator/) or [Instagram Demetricator](https://bengrosser.com/projects/instagram-demetricator/) or [Twitter Demetricator](https://bengrosser.com/projects/twitter-demetricator/) by Benjamin Grosser
- [LAUREN](http://lauren-mccarthy.com/LAUREN) by Lauren McCarthy

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
- Kenneth Cukier and Victor Mayer-Schöenberger, "The Rise of Big Data". *Foreign Affairs* (May/June 2013): 28–40.
- Shiffman, Daniel. (2017) 8. HTML / CSS/DOM - p5.js Tutorial [online] Available at: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX [Accessed 09 Sep. 2019].
- [clmtrackr - Face tracking javascript library](https://github.com/auduno/clmtrackr) by Audun M. Øygard
- Charlton, James (2015). [Add to Shopping Basket](http://www.aprja.net/add-to-shopping-basket/). *APRJA* 4.1.
- Bivens, R. (2017). The gender binary will not be deprogrammed: Ten years of coding gender on Facebook. New Media & Society, 19(6), 880–898. https://doi.org/10.1177/1461444815621527
- Cox, G and Andersen, C (eds) (2015), [A Peer-Reviewed Journal About Datafied Research](https://tidsskrift.dk/APRJA/issue/view/8402), *APRJA* 4(1).

## Notes

[^bigdata]: Kenneth Cukier and Victor Mayer-Schöenberger, "The Rise of Big Data". *Foreign Affairs* (May/June 2013): 28–40. 
[^Pold]: Søren Pold, "Button", in Matthew Fuller. ed. *Software Studies* (Cambridge, Mass.: MIT Press 2008), 34.


