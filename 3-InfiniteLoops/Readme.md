## 3. Infinite Loops

## 3.1 function setup()
In computer programming, the concept of a loop is highly related to repetition, control and automation. For example, the function `draw()` also exhibits some kinds of repetition in p5.js while `frameRate()` controls how many times to run the draw functions in a second. One you run the whole program, things will run on its own for example automatically captures the mouse coordinates of the movement. Extending from programming to applications, the feature of loop can be observed in mandune daily activities and operations, such as the checking logic of a metro/underground/train card balance in kiosk machines, and the program does the same task by capturing data from the reader and outputting the card balance. If variables highlight the changes over time, then loops focus on repetition and operative tasks, but they are both inter-related in programming. 

Mathematician Augusta Ada Byron Lovelace first introduced the concept of a loop in the early nineteenth century. She recognised that there were repeatable operations in the early conceptual design of the operating machine that was regarded as “the first automatic, general-purpose computing machine ever designed” (ref: Kim & Toole, 1999, p. 76), known as Charles Babbage’s Analytical Engine. The concept of a loop, which she called a ‘cycle,’ was conceived in 1834 in her notes on the Analytical Engine which set a precedent for the direction in which digital computers would be later developed. Her notes include (in the form of a diagram in Note G.) the program procedures, also called the Bernoulli numbers program, of the Analytical Engine. The diagram utilises two loops to indicate the repetition of a set of instructions with conditions (ref: Kim & Toole, 1999, p. 78), minimizing duplicate efforts to write the repeatable operation again. Arguably, the concept of a loop in modern coding practice is highly influenced by her insights into the handling of repeated machine operations in a concrete diagramatic manner, which depict the essence of repetition and condition in a cycle. Modern high-level programming language includes a loop function, allowing a fragment of source code to be repeatedly executed (ref Nakov et al., 2013, p. 211). 

<img src="http://media.factmyth.com/2015/10/ada-lovelace-bernoulli-note-g.jpg" width ="700"><br>
*Figure 3.1: The diagram on Bernoulli in Note G by Ada Lovelace*

### 3.1.1 Start()
For this chapter, we are using the cultural icon - Throbber as a way to guide the programming tasks, but it also acts as an object for us to to think through the concept of loop and the relations with repetition, time and temporality. Users usually encounter a distinctive spinning icon during the loading, waiting and streaming of data content. Such graphical animation known as throbber indicates to users that something is loading and in-progress, but nothing more. Interestingly, a throbber does not indicate any completed or finished status and progress and all that is presented is a spinning icon, perceived as repeatedly spinning under constant speed as well as hinting at invisible background activities for an indeterminate and unforeseeable timespan. Throbber, as a cultural icon, expresses various dimensions of time at our times. We will introduce a few simple throbber related sample code and then it will lead to the artwork *Asterisk Painting* by John P. Bell.  

## 3.2 Decode 
We are moving from static objects (like shapes) to moving objects here. 
<img src="https://gitlab.com/siusoon/aesthetic-programming/raw/master/Ap2019/class03/throbber.gif"><br>
*Figure 3.2: What you see in the sample code* 

Task 1: By examining the RUNME (ref) of a simple throbber, can you describe the different elements of the work and imagine how they operate computationally in human language.

**Speculation** - based on what you see on the screen:
    - What do you see/hear/experience on the screen?
        - what are the elements on the screen?
        - how many ellipses at the center?
        - how does it rotate? (which syntax)
        - how to make the ellipse fades out and rotates to the next position?
        - where is the image? (how to position the image?)
        
**Mapping** - map the mapping elements with the code procedures:
    - what are the elements in setup() and draw()?
    - what is translate()?
    - why push() and pop() are used here?
    
**technical question/issues:**
    - what is this line means? `let cir = 360/num*(frameCount%num);` (can check with [Golan Levin's tutorial](https://www.youtube.com/watch?v=r5Iy3v1co0A) on the modulo operator(ref: https://www.youtube.com/watch?v=r5Iy3v1co0A) 
    
    - What does this function do?
    
    ```javascript
    function drawThrobber(num) {
    //something here
    }
   ```
   
    - To display an image, you can use the syntax  `createImg()` or  `loadImg()`, but the later one only loads the first frame if it is an animated gif
    
    ```javascript
    let loading_createimg;

    function preload() {
        loading_createimg = createImg("images/loading.gif"); //img ref: http://i.imgur.com/omGnqz7.gif
    }

    function draw() {
        loading_createimg.position(width/2-loading_createimg.width/2,20); //loads GIF - related to the width of the gif
    }
  ```

New functions in this sketch: translate(), frameCount(), rotate(), modulo/%, radians, createImg(), image.position and image.size, passing argument within functions,


>>>>> continue HERE

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
- Farman, Jason. Fidget Spinners. *Real Life*, 2017.

## Notes: 

===
https://gitlab.com/siusoon/aesthetic-programming/blob/master/Ap2019/class03/class03.md

In-Class structure:
Arrays
Conditional Statements
Iterations: For and While Loops
Time related syntax:

FrameRate(), FrameCount, setInterval(), millis()




