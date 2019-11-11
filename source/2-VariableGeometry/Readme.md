Title: 2. VariableGeometry
page_order: 2

## 2. VariableGeometry

## 2.1 setup()

Aside from the difficulties of learning anything new and complex, learning to code can be enjoyable and rewarding (we hope!). That fun can be had with programming would seem to be demonstrated in the numerous titles that make explicit reference to it such as Linus Torvalds's book *Just for Fun: The Story of an Accidental Revolutionary*, written with David Diamond, part autobiography and part story of the development of Linux.[^Fun] Fun in this case combines with the serious effort of making source code freely available and open to further modification. Like sharing a joke (or indeed recipe), programmming is indeed a social activity and relies on collective understanding in order to *get it*. 

There are many more examples that reinforce the idea of fun, as if simply the declaration was enough to convince users to work through learning to program and not be too put off by its underlying difficulty. In what follows we encourage you to have fun with geometry, building on the drawing of an ellipse in the previous chapter. The idea is to further explore various shapes, sizes, positions, space, and lengths, all which are regarded as geometry in the serious discipline of mathematics, with multiple applications in everyday life, including but not limited to typography, signage, graphic design and architecture, as well as other organisational forms. More specifically, points, lines and panes are regarded as the foundational elements of design as these elements constitute objects, and the world is made up of various objects. Fun with geometry comes from manipulating these properties, and reconsituting them anew, creating alternative patterns of recognition and understanding.[^Fun2] As Olga Goriunova has argued in her book *Fun and Software*, fun with computers can be considered to be a mode of thinking and reasoning in this way,[^Olga] and furthermore fun can be had with the paradoxes that arise in this process. By creating new computational objects, you are manipulating learnt procedural logics, and exploring how these might be further adapted and redrawn. Variable geometry in this sense is about shape-shifting: re-imagining all sorts of new shapes and compositional forms, about challenging geometric conventions.[^Femke] 

We take the example of emojis — ideograms, typically smileys — as typographic shorthands for expressing emotional states such as happiness, using facial expressions and common objects. These have become pervasive in communications, and no longer simply typographic but actual pictures which can be funny but also come with underlying issues related to a politics of representation and stereotyping. More on this soon, but for now it is enough to say that emojis make a good example as they consist of geometric shapes, using lines, points, panes and color. This chapter is about having fun with this (even if some of the underlying issues are not fun), exploring the affective dimension of emojis, and the varying representations that we encounter in everyday communications. 

The relationship between emojis and a politics of representation, has been explored by many commentators. The essay "Modifying the Universal", written by Rosel Roscam Abbing, Peggy Pierrot and Femke Snelting makes a good example,[^Emojis] as it investigates the *universal* standardisation of emojis, emerging from the Unicode project, a non-profit organization based in America, that has set the computing industry standard for the consistent encoding, representation, and handling of text for software internationalization in all major operating systems and writing applications since 1987. Interestingly, on a technical level, Unicode provides a unique code point — a number — to represent a character in an abstract way and leaves the visual rendering (size, font, shape, geometry) to other software, such as a web browser or word processor. It is this question of representation that interests us. 

Much like the utopian project of developing a universal language to be spoken and understood by all or most of the world's population — such as Esperanto — Unicode is clearly important for communicative operations across international/multilingual systems. By the time of the release of the most recent version, Unicode 12.1, in May 2019, there were 137,994 characters covering 150 modern and historic scripts, as well as multiple symbol sets and emojis.[^Unicode] Yet as the standard expanded from the underlying characters and glyphs to symbol sets and emojis, the universalism has become increasingly problematic. Criticism has unsurprisingly centred on a politics of representation, such as blatent gender stereotyping and racial discrimination: female emojis were under-represented in certain professional roles,[^Telegraph] as well as there were limitations of skin tones applied on emojis and 'universal modifiers', that were not displayed 'universally' across all devices and operating systems. 

Our point is that using emojis may be fun and expressive but they also simplify and universalise differences, and thereby perpetuate normative ideologies within already "violent power structures",[^ideology] such that only selected people, those with specific skin tones for instance, can be represented while others are marginalized or erased altogether. So the question is who gets to be represented, and who has the power to control and standardize the representations? That these operations are characterised as fun is part of the problem. These are the issues we want to explore in this chapter by introducing variable geometry and learning to be able to produce alternatives, more politically-correct ones perhaps. We start with the work *Multi* by David Reinfurt which will be used to demonstrate the basis of geometry and the variations of facial expression and composition that can be generated from simple typographic elements. 

## 2.1.1 Start()
<img src="http://o-r-g.com/media/00004.gif" height="400"><br>
*Figure 2.1: Multi by David Reinfurt* 

The designer David Reinfurt created the work *[Multi](http://www.o-r-g.com/apps/multi)*,[^Multi] inspired by another designer Enzo Mari who spent a whole year in 1957 exploring the essential form of an object (an apple, the universal apple we might add). Reinfurt explains that "He was not looking to draw AN apple, but rather THE apple — a perfect symbol designed for the serial logic of industrial reproduction." *Multi* develops this idea for the informational reproduction as a mobile app with 1,728 possible arrangements, or facial compositions, built from minimal punctuation glyphs. But instead of using preset typographic characters, which admittedly is the conceptual charm of *Multi*, for our purpose we will draw these with foundational elements of geometry.

## 2.1.2 Source Code
<!-- <img src="ch2_2.png" width="250"> -->
![](ch2_2.png)<br>
*Figure 2.2: The screenshot of the remix of Multi*

[the image and source code will change a bit to match exactly the spatial composition of Multi - will get back in *future* /w]

[RunMe: need something to run the program - need to check with OSP, ref: https://creative-coding.decontextualize.com/first-steps/ or https://p5js.org/learn/coordinate-system-and-shapes.html /w]

```javascript
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
```
The above code draws various shapes and performs simple interactions: 
- the background is in a verticle rectanglar shape, flashing grey-scale colors 
- the left with a horizontal rectangle in black color 
- the right with a square in black color and a polygon in orange color 
- the bottom with an ellipse without any filled color but with white stroke color
- One can move the mouse in which an outlined ellipse in grey color follows the mouse 
- One can also click on the mouse to change the size of the white ellipse and the black square

## 2.2 Coordination
In the last chapter, we have briefly talked about x and y coordinations, which is the fundamental concept for positioning and drawing objects with various measurement on a canvas. 
For a line of code like `createCanvas(500,600)`, it refers to the action of creating a canvas with the width of 500 pixel and the height of 600 pixel. In high school's maths class, there is a different coordinate system with the origin [0,0] places in the middle of a grid paper/screen but in computing, the canvas is started to draw from the upper left corner which is the origin (see Figure 1.11 in the previous chapter).

## 2.2.1 Exercise in class
```javascript
function setup() {
  createCanvas(500, 600);
  frameRate(15);
}

function draw() {
  background(random(130,140));
}
```
<!-- <img src="ch2_3.png" width="400"> -->
![](ch2_3.png)<br>
*Figure 2.3: Simple exercise* 

Remember the structure of a web page includes both the html, working javascript file (for example sketch.js) and p5.js associated libraries.  

- Type the above source code in the working javascript file and then save the code. Run the program on ATOM (the live-atom-server with the shortcut Crtl+Alt+L) and you should see just a flashing rectangle on a screen. 
- There are few new syntax or slightly different use of syntax here: 
    - `frameRate()`: This sets the number of frames per second that the computer will run the program. The default is 60 and now is set as 15, referring to a slower iteration and thus you can see the background color for each frame quite clearly (You can also compare the flashing rate with the sample code in the previous chapter).
    - `random(130,140)`: In the earlier sample code the function `random()` took one argument only. This sample code gives you a different use of the function with two arguments. If you look at the [reference guide](https://p5js.org/reference/#/p5/random)<sup>[10](#myfootnote10)</sup>, it tells you the random function returns a floating-point number, and this means that the number is not an integer but a number with decimals. By looking at the description (checking reference is very useful to understand how function and syntax work), it also explains the difference on the number of arguments. For this case, the program will return a floating-point number between 130 and up to (but not including) 140. Example of such returned value would be, for example, 131.34387. Such returned value refers to a grey-scale color value. 
- Next is to recall our memories in using the web console (Under Tools > Web Developer > Web Console - Ctrl+Shift+K)
    - Type `print(width);` and then press enter
    - Type `console.log(width, height);` and then press enter

You should notice from the responses of the console area (see Figure 2.2), where it displays the actual width in pixel unit (500) when you type the functions `print(width);`. Additionally, if you use `console.log(width, height);`, which is the equivalent of the print function in JavaScript (not a p5.js function), the screen displays two numbers 500 and 600. With just two lines in the console area, you have asked the program to give you the values of the width and height of the canvas. The program can then understand these two names 'width' and 'height'. They are the pre-set names in p5.js in which you can use specifically for asking the canvas' dimension. 

## 2.3 Variables 

In programming, the use of both width and height is called variables, which is another important concept. Variables are used to store data and information in a computer program. You can think of variables as many lockers [need to change metaphor - may be kitchen cabinet, extending with types, capacity, but need to think about the link with memory and physicality /w], and you can put things, replace them with other things, and store them for later retrieval. Just like the variable 'width' and 'height' as something what is called 'global variables', in which you can use in any parts of your code. However for local variables, it is defined within a structure or a function, then the variable can only be used within that block of code. To define a global variable, you need to define it before the setup of the program, usually in the first few lines of the program. 

To use the earlier example, the value behind 'width' is 500 which is the canvas' width that has been defined in line 2 (see section 2.2.1). To continue with the metaphor, a locker with the name 'width' is being labeled and stored the value '500'. For this case, it is assigned by default as the program is able to retrieve the measurement of the canvas. 

But you can also assign your own variable names (metaphorically speaking, it is to create your own locker and store other values). 

```javascript
let moving_size = 60;
let static_size = 20;
.
.
.
ellipse(190,370,static_size,static_size);
.
.
.
ellipse(mouseX, mouseY, moving_size, moving_size);
  
if (mouseIsPressed) {
    static_size = floor(random(5, 20));
}
```

The above is the excerpt of the entire code, relating to drawing two different size of ellipses. The last two arguments of the ellipse function refer to width and height. Instead of placing a number in the function like in Chapter 1, this time we use variables instead as they hold value too. There are 3 steps to use variables:

1. **Declare:** Think of a name you want to store the value (usually it will make sense to yourself and to others to read it). Declare with the syntax 'let' in front<sup>[11](#myfootnote11)</sup> 
2. **Assign:** What is the stuff you want to store there? Is it a number? By assigning a value, you will need to use the equal sign. Officially, there are 4 data types are useful to know at this introductary level:
    1. number for numbers of any kind: integer or floating-point.
    2. string for strings. A string may have one or more characters and it has to be used with double or single quote. For example: `let moving_size = "sixty";`
    3. boolean for true/false. For example: `let moving_size = true;`
    4. color for color values. It can take in Red Green, Blue (RGB) or Hue, Saturation and Brightness (HSB) values. For example: `let moving_size = color(255,255,0);` (see more from the [p5.js color reference](https://p5js.org/reference/#/p5/color)<sup>[12](#myfootnote12)</sup>)
3. **(Re)Use:** How and when do you want to retrieve the stored data? If such variable will change over time, you may want to reuse it for many times. 

For this example, two variables: 'moving_size' is more stable than 'static_size' because the later one will change according to mouse press. (If you forsee the values won't change, you may also consider to use `const`, where a value remains unchanged for the entire program).

There are two more variables in the example: `mouseX` and `mouseY`. These are changing variables and are subjected to the mouse movement to trace the coresponding x and y coordinates. If you want to know the mouseX and mouseY exact coordinate position, you may also use `print()` or `console.log` to display the two values onto the console area.

<br><need to replace with a kitchen metaphor <br>
*Figure 2.4: Illustration of variables*

<br>

Though there are many books use the metaphor of a container to illustrate the concept of variable, the use of lockers[change metaphor] is to convey there is an address for each locker. Technically speaking, by declaring a variable, it also declares a location/address in which the computer memory can hold the value. In short, each variable stores at a block of computer memory which is located inside a physical and concrete memory like RAM. Each block has a identification which is called the memory address so that the computer knows where to store it and retrieve it while the program is run. As such, software and hardware is not separable, and it is just we can't able to see the inner micro-working of a computer in handling .

## 2.3.1 Why use variables? 
As you learn to program more complex software, you will know it is very common to use variables to store values and data. More importantly, the value of variables can be changed while a program is run in real-time. The earlier variables: mouseX and mouseY may serve the purpose of illustrating the point because the coordinate of the mouse will change according to the movement. We will also discuss variable again in the next Chapter with the concept of loop and repetition. 

Another reason is that if you have longer lines of code, it is easier to have all the variables that you have declared for the program as an overview. As such you can change the value for testing, for example different size of shapes, but without locating the specific line of code. Morever, it is also easier for others to read your code with a well-thought variable name when you have to use it in different parts of your program.

This leads to the reusability of variables. Variables can be used in different functions and more than one function (and also as arguments passed to a function subroutine where we will discuss in the next chapter), just like static_size variable in the sample code for drawing both the ellipse and the rectangle. 

## 2.4 Other functions 
This section is to briefly introduce other new functions in the sample code, in which drawing and designing a emoji requires different decisions, in terms of shapes, color and spaitial composition. 

- `noStroke()`, `strokeWeight()` : These refer to the settings of the shape, whether it is without any outline, and what is the weight of the border.
- `stroke()`, `fill()` and `nofill()`: These functions set the color of objects like border, shapes or text. It takes RGB (as default) or HSB color. But if the function with 1 argument, then it refers to gray scale color between 0-255 [add why it is the range of 255 - binary value/bytes of data in memory -  2^8th power is 256 (8 bit each). In the range of 0-255 there are actually 256 possible values - link to the nature of computation in a binary system /w]. If the function with 3 arguments like `fill(255,255,0)`, then it means the object/shape/text will be filled with yellow color (the mix of red and green with no blue color). There is an optional argument called 'alpha', referring to the opacity of the color, e.g `fill(255,255,0,127)`;
- `rect()`: This is similar to draw an ellipse, but just display as a rectangle. 
- `vertex()`, `beginShape()` and `endShape(CLOSE)`: All these three functions are used for drawing a more complex form according to different vertices. What you need is to use the `vertex` function to tell its x and y coordinates. You can also join all the vertices by using the 'close' argument in `endShape()`. The `beginShape()` is used to record the starting of the vertex for a complex form/polygon. 
- `floor()`: Since the random function returns a floating-point number instead, the use of `floor()` is to calculate the closest integer value. 
- `if (mouseIsPressed) {}`: This is a conditional structure for a program, constantly listening to mouse press actions. This wil be further discussed in Chapter 4. [will be introduce here in 2.6 instead so as to easen the next chapter /w]


## 2.5 Basic Arithmetic Operators 
You can also do arithmetic operations in programming and it is commonly done in arguments of a function. 
Here is the list of baisc arithmetic operators: 
- add(+): Addition and concatenation, which is applicable for both numbers and text/characters respectively.
- subtract(-)
- multiply(*)  
- divide(/)
- Special operators: increment (++), decrement (--)   

You can try the following in the console area:
```
print(2*3);
```
> Output: 
"6"
```
print("hello " + "world");
```
> output:
"hello world"

## 2.6 Conditional Structure 
Move conditional structure from ch 3 to here with the starting example of mouseIsPressed. Next chapter will be more a deeper use and repetition. /w

## 2.7 Exercise in class
1. Think: Try to look into [existing emojis](https://printable360.com/wp-content/uploads/2018/01/printable-pictures-of-emojis-f85e23c6c5560b017f1154346490d23d.jpg) or your handset, and reflect upon the complexity of human emotions and the abstracted human representation. What's your experience in using emojis? What's the cultural implications of emojis (perhaps can refer to the readings)? 
2. Discussion: What constitute a face? If you have to use the view of essentialism, what will you have for a facial expression and why those elements are essential from your point of view? What have been abstracted and excluded then?
3. Beyond the face: Take a look at [more emojis](https://www.pngfind.com/mpng/ohwmTJ_all-the-emojis-available-on-facebook-russian-revolution/)<sup>[13](#myfootnote13)</sup> beyond facial expression, are there anything you want to add? 
4. Exploration: Try out the interactive online tool [p5.playground](https://1023.io/p5-inspector/)<sup>[14](#myfootnote14)</sup> developed by Yining Shi, and do some sketching of emojis by paying attention to spatial composition and foundational design elements. 
5. Experiment with p5.js: How would you translate your thoughts into lines of code? You may want to print out the coordinates of mouse press on the console area to get a more accurate position of your shapes. 

## 2.8 While()
outro:

- faciality machines (Deleuze)
- facial recognition
- politics of measuremen can go here > in relation to what constitute a face and how a face is being recognized in nowadays facial recognization technology. -> but this will address in the chapter data capture too. 

## 2.9 Mini_Exercise[2]: Geometric emoji
**Objective:**
- To experiment various geometric drawing's possibilites, especially on shapes and drawing with colors.
- To reflect culturally and critically on emojis via the assigned text 

**To get some additional inspiration here:**
- [Multi](http://o-r-g.com/apps/multi) by David Reinfurt
- [Chinese Characters as Ancient Emoji](https://publish.illinois.edu/iaslibrary/2015/10/21/chinese-characters/)<sup>[15](#myfootnote15)</sup> by Steve Witt
- [Women finally get a menstruation emoji](https://www.fastcompany.com/90302946/women-finally-get-a-menstruation-emoji)<sup>[16](#myfootnote16)</sup> by Michael Grothaus
- [Between Art and Application by Crystal Abidin and Joel Gn](https://firstmonday.org/ojs/index.php/fm/article/view/9410)<sup>[17](#myfootnote17)</sup> (A short text about researching emoji cultures)

**Tasks (RUNME):**
1. Make sure you have read/watch the required readings/instructional videos and references
2. Explore different shape and geometric related syntax (via p5.js [references](https://p5js.org/reference/))
3. Design two emoji icons and reflect upon how does emoji relate to identity and cultural phenomena

**Questions to think about as README:**
  - **Describe** your program and what you have used and learnt
  - **How** would you put your emoji into a wider cultural context that concerns representation,s identity, race, social, economics, culture, device politics and beyond? (Try to think through the assigned reading and your coding process, and then expand that to your experience and thoughts - this is a difficult task, you may need to spend sometimes in thinking about it)

## Required readings:
- Abbing, R.R, Pierrot, P and Snelting, F., "[Modifying the Universal.](http://www.data-browser.net/db06.html)" *Executing Practices*. Eds. Helen Pritchard, Eric Snodgrass & Magda Tyżlik-Carver. Open Humanities Press, 2018, pp. 35-51 
- (OR) Snelting, Femke. [Modifying the Universal](https://www.youtube.com/watch?v=ZP2bQ_4Q7DY), MedeaTV, 2016. (1 hr 15 mins) 
- p5.js. p5.js | Simple Shapes. [Web] Available at: https://p5js.org/examples/hello-p5-simple-shapes.html [Accessed 09 Sep. 2019].
- Shiffman, Daniel. (2018) 1.3,1.4,2.1,2.2: Code! Programming with p5.js [online] Available at: https://www.youtube.com/watch?v=yPWkPOfnGsw&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2 [Accessed 09 Sep. 2019].

## Further reading:
- Robinson, Derek. "Variables" in *Software Studies* (Fuller, M ed), MIT Press 2008.
- Goriunova, Olga, *Fun and Software: Exploring Pleasure, Paradox and Pain in Computing*, New York, London: Bloomsbury, 2014, pp.1-19 (Introduction chapter)
- Abidin, Crystal and Gn, Joel (eds), Histories and cultures of emoji vernaculars, *first monday*, 23(9), September, 2018. Available at: https://firstmonday.org/ojs/index.php/fm/issue/view/607
- Cox, Geoff and Andersen, UC, Machine Feeling, *A Peer-Reviwed Journal About*, 8(1), 2019. Available at: https://tidsskrift.dk/APRJA/issue/view/8133


## Notes

[^Fun]: Linus Torvalds and David Diamond, *Just for Fun: The Story of an Accidental Revolutionary* (Knutsford: Texere Publishing, 2001), see http://en.wikipedia.org/wiki/Just_for_Fun. Other examples include *Computers are Fun* by Tony Gray and Carl Billson, and, as mentioned, *The Fun of Programming* by Jeremy Gibbons and Oege de Moor. 

[^Fun2]: See the children's book: Owyang Chan, V, *Geometry Is Fun For Me* (Dog Ear Publishing, 2017).

[^Olga]: Olga Goriunova, *Fun and Software: Exploring Pleasure, Paradox and Pain in Computing* (New York, London: Bloomsbury, 2014), 4.

[^Femke]: Femke Snelting, "Other Geometries", *transmediale journal*, Issue#3, 31 October 2019, https://transmediale.de/content/other-geometries

[^Emojis]: Abbing, R.R, Pierrot, P and Snelting, F., "[Modifying the Universal.](http://www.data-browser.net/db06.html)", *Executing Practices*. Eds. Helen Pritchard, Eric Snodgrass & Magda Tyżlik-Carver (Open Humanities Press, 2018, 35-51). Other references include: Crystal Abidin and Joel Gn, "Between Art and Application: Special issue on emoji epistemology", *First Monday*, 23(9), 3 September 2018; Luke Stark, "Facial recognition, emotion and race in animated social media", *First Monday*, 23(9), 3 September 2018; Miriam E Sweeney and Kelsea Whaley, "Technically White: Emoji skin-tone modifiers as American technoculture", *First Monday*, 24(7), 1 July 2019.

[^Unicode]: See https://en.wikipedia.org/wiki/Unicode#Origin_and_development.

[^Telegraph]: See https://www.telegraph.co.uk/technology/2016/07/15/new-gender-equality-emoji-to-show-women-at-work/

[^ideology]: Abbing, Pierrot and Snelting, *Modifying the Universal*, 210. 

[^multi]: See http://www.o-r-g.com/apps/multi. *Multi* also provides variations of book covers for the DATA browser series published by Open Humanities Press, at http://www.data-browser.net/.

[^random]]: See p5.js random reference at https://p5js.org/reference/#/p5/random.

<a name="myfootnote11">11</a>: 'let' is introduced in ES6 (ECMAScript- scripting language specification standardization) to declare variable although 'var' is still commonly used. They are both used for variable declaration but the difference is that let is block scoped while var is function scoped. Specifically for the let case, if the same variable is declared in both global and local levels, the local value will be restricted to the specific block of code and won't be overridden. For more, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

<a name="myfootnote12">12</a>: See p5.js color reference: https://p5js.org/reference/#/p5/color

<a name="myfootnote13">13</a>: See https://www.pngfind.com/mpng/ohwmTJ_all-the-emojis-available-on-facebook-russian-revolution/

<a name="myfootnote14">14</a>: See the tool p5.playground developed by Yining Shi:https://1023.io/p5-inspector/

<a name="myfootnote15">15</a>: Witt, Steve, "Chinese Characters as Ancient 'Emoji'"", *Glocal Notes*, 2015, Web, available at: https://publish.illinois.edu/iaslibrary/2015/10/21/chinese-characters/

<a name="myfootnote16">16</a>: Grothaus, Michael, "Women finally get a menstruation emoji", *Fastcompany*, 2019, Web, available at: https://www.fastcompany.com/90302946/women-finally-get-a-menstruation-emoji

<a name="myfootnote17">17</a>: Abidin and Gn, "Between art and application".