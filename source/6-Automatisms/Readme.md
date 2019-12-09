Title: Automatisms
page_order: 6

## Automatisms 

## setup() 

Following the concept of object abstraction before in making class blueprints and object instances, this chapter introduces the creation of rules and the study of automaton as a self-operating machine, which is widely known as an abstract machine or Turing machine. Mathematician and computer scientist Alan Turing who first described this kind of machines in his infamous article 'On Computable Numbers, with an Application to the Entscheidungsproblem' in 1936 [^Turing]. He uses the term *universal computing machine* to theorize a model that describes how a machine "can be used to computate any computatable sequence" [^Turing1] and this could be understood as how a machine operates, following a predetermined sequence of instructions that process input and produce output results. 

Specifically, the Turing machine is capable for 6 types of fundamental operations (at that time there wasn't a thing called computer yet), including read, write, move left, move right, change state and halt/stop. Turing suggested these operations can be performed via running an endless tape (acts like the memory/storage in a modern computer) with instructions like what symbols to read, what symbols to write as well as how to move. These instructions are fundamental to the Turing machine. [^visualization]  

![turing](ch6_1.jpg)

*Figure 6.1: An illustration of the Turing Machine*

This chapter focuses on instructions, and to explore how instructions are the fundamental elements in an automatic system. You might argue that the previous chapter on game object is also about rules such as how the tofus and beers should be moved and appeared. It is true though but the last chapter was more focused on the notion of abstraction and this chapter will be less on interacting with abstracted objects but on rules in which an autonomous system is generated over time. 

Focusing on rules are not only something programmers do, artists are also interested in art that is based on instructions. Indeed, we can trace the use of rules back to the conceptual art movement in the 60s. An exhibition called *Programmed: Rules, Codes, and Choreographies in Art, 1965-2018* [^exhibition], organized by Christiane Paul in the Whitney Museum of American Art, showcasing pieces that are regarded as predecessors of computational art, and tracing how rules and instructions in art have both responded to and been shaped by technologies. Artist Sol Le Witt as one of the key figures in the conceptual art movement, demonstrating how a concept is based on a set of instructions but the outcome might be different and it depends on the person who adapts the instructions. For example, the work *Wall Drawing #289* consists of three simple instructions but without specifying the angles and length of the lines, as such each time this piece can be drawn differently:

1. twenty-four lines from the center 
2. Twelve lines from the midpoint of each of the sides
3. Twelve lines from each corner 

![drawing2](ch6_2.jpg)
*Figure 6.2: Sol LeWitt, Wall drawing #289, 1976*

Another example is Joan Truckenbrod who have showned her work *Coded Algorithmic Drawing (#9)* in the same show. The piece with a number of squares of variations in size and angle was coded with the programming language Fortran in the 1970s, simulating moving substance in natural phenomena.[^joan]


![drawing3](ch6_3.png)

*Figure 6.3: Joan Truckenbrod,Coded Algorithmic Drawing, 1975*

Rules and instructions are highly interesting, which is not only because of having a different way of creative drawing, but also how a sketch can be produced which is based on or derived from mathematics and logics in which to give more agency to the rules. It is not simply a direct instruction of drawing something like having an ellipse in white color at the x and y coordinate 100 and 120 respectively. Clearly, this instruction has a full control on what would be the outcome in a very precise manner and this specific rule does not allow the program to emerge and create something different. This idea of agency and the matter of control is how Philip Galanter hightlighted when defining generative art, as he puts it [^galanter],
> Generative art refers to any art practice where artists use a system, such as a set of natural languages, rules, a computer program, a machine, or other procedural invention, which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art.

In the following sections, we will explore two examples of rule-based programs to unfold the thinking of agency and control. 

[g: may be move some of the bits to start(), duno, and perhaps need to link this rule-based art into authorship ? or move to while() /w ]
- ideas as form 
- Focus on rules, orders, chaos, emergent behaviors ?
- Generators and other automatisms (genotypes), love letter generators

## start()
Two sample code will be provided in this chapter. The first one is called *10 PRINT* which is based on one-line program code that is written in BASIC programming language that was executed in Commodore 64, an early home homputer model: `10 PRINT CHR$(205.5+RND(1)); : GOTO 10` to generate endless pattern on a screen. It wasn't claimed to be an art piece, but instead this line of code was printed in the 1982 *Commodore 64 User's Guide* and later published on the web. This line of code also becomes an important example in the field of software studies to demonstrate how to study code critically via history, science and culture. [^10print] This 10 PRINT in `p5.js` is mainly to let you familiar with rules and its creative potential to allow the program to set some degree of autonomy.  

The second program is called Langton's Ant which is invented by a computer scentist Christopher Gale Langton, who is considered the father of the concept of Artificial life, in 1986. The core different with the *10 PRINT* is to discuss complex system and emergent behavior through simple rules, thinking about automated simulation as a Turing machine. 

## Exercise in class (10 PRINT)
1. Read the source code of *10 PRINT* then copy it and run in your own computer.

```javascript
let x = 0;
let y = 0;
let spacing = 10;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) <0.5) {  
    line(x,y,x+spacing,y+spacing);
  } else {
    line(x,y+spacing,x+spacing,y);
  }
  x+=10;
  if (x > width) {
    x = 0;
    y += spacing;

  }
}
```

2. Discuss the following rules of *10 PRINT* and map the rules to the related lines of code:
    1. Throw a dice randomly and half of the chance print a backward slash
    2. The other half of the chance will print a forward slash

3. Discuss the use and the role of randomness in this specific *10 PRINT* and in games/literature, and the arts?  

4. Try to modify existing rules, for example: 
    - Can we have more different outputs rather than the backward and forward slash?
    - the size and color of slashes? 

5. *10 PRINT* has been appropriated by many artists, designers and students. Take a look at the different possibilities of [*10 PRINT*](https://twitter.com/search?q=%2310print&src=typd) that is documented on Twitter. Your in-class task is to create a sketch with a clear set of rules and a modified version of the *10 PRINT*.  

## Langton's Ant 

Langton's Ant, invented by Christopher Gale Langton [^Langton], is a classical mathematical game involving an ant, simulating the molecular logic of the ant's living state. The simulation of the ant's state is inspired by the Turing machine that can perform computational tasks.    

This section will present the sample code that simulate the states of the ant, presenting in a grid system with the state in either white or black color. The ant will move base on the simple rules, but it will turn into a more complex system and exhibit emergent behavior over time.



## Source code (Langton Ant)


## Exercise in class
Discussion:

- What have been generated beyond the end product but to focus on systems and processes? or How would you understand "autonomy is the ultimate goal" (Marius Watz 2007)?
- What is the role of rules and "software as material" (Marius Watz 2007), and do you consider the machine as a co-author?

## While()

## Mini_Exercise[6]: A generative program

**Objectives:**
- To implement a rule-based generative program from scratch.
- To strengthen the computational use of loops and conditional statements in a program.
- To reflect upon the concept of automatism conceptually and practically, such as systems, rules, temporality, emergence and processes.

**To get some additional inspiration here:**
- [{Software} Structure #003 A by Casey Reas](https://whitney.org/exhibitions/programmed?section=1&subsection=6#exhibition-artworks)
- [Generative Design - sketches](http://www.generative-gestaltung.de/2/), [soure code](https://github.com/generative-design/Code-Package-p5.js)
- [GenArt (with source code)](https://github.com/JosephFiola/GenArt) by JosephFiola, see ch.1-4
- [Open Processing with the search keyword 'generative'](https://www.openprocessing.org/browse/?q=generative&time=anytime&type=all#)
- [John Conway's Game of Life](http://web.stanford.edu/~cdebs/GameOfLife/)
- [The recode project](http://recodeproject.com/) or https://web.archive.org/web/20181227225001/http://www.recodeproject.com/

**Tasks (RUNME):**
1. Start with a blank paper. Think of at least three simple rules that you want to implement in a generative program. (You may take reference from Langton's ant (1986) and The Game of Life (1970))
2. Based on the rules that you set in step 1, then design a generative program that utilizes at least one for-loop/while-loop and one conditional statement but without any direct interactivity. Just let the program runs and emerges automatically.(You may also consider to use noise() and random() syntax)

**Questions to think about as README:**
- What are the rules in your generative program and describe how your program performs over time. What have been generated beyond just the end product?
- What's the role of rules and processes in your work?
- What's generativity and automatism? How does this mini-exericse help you to understand what might be generativity and automatism? 

## Required readings:
- Montfort, N, et al. "Randomness". *[10 PRINT CHR$(205.5+RND(1)); : GOTO 10](https://10print.org/)*, The MIT Press, 2012, pp. 119-146 (The chapter: Randomness)
- [6 mins video] [Langton's Ant Colonies](https://www.youtube.com/watch?v=w6XQQhCgq5c)
- [noise() vs random() - Perlin Noise and p5.js Tutorial by Daniel Shiffman](https://www.youtube.com/watch?v=YcdldZ1E9gU)
- [p5.js - 2D Arrays in Javascript by Daniel Shiffman](https://www.youtube.com/watch?v=OTNpiLUSiB4) 

## Further readings:
- Langton, Chris G. (1986). "[Studying artificial life with cellular automata](https://deepblue.lib.umich.edu/bitstream/2027.42/26022/1/0000093.pdf)". Physica D: Nonlinear Phenomena. 22 (1–3): 120–149.
- [The Game of Life (1970)](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) by John Horton Conway
- [The Recode Project](http://recodeproject.com/) and [Memory Slam](http://nickm.com/memslam/) by Nick Montfort
- Galanter, Philip. "[Generative Art Theory](http://cmuems.com/2016/60212/resources/galanter_generative.pdf)". *A Companion to Digital Art*. Eds. Christiane P, 2016.
- [How to Draw with Code by Casey Reas](https://www.youtube.com/watch?v=_8DMEHxOLQE)
- [p5.js Coding Challenge #14: Fractal Trees - Recursive by Daniel Shiffman](https://www.youtube.com/watch?v=0jjeOYMjmDU)
- [p5.js Coding Challenge #76: Recursion by Daniel Shiffman](https://www.youtube.com/watch?v=jPsZwrV9ld0)

## Notes
[^Turing]: Turing, Alan Mathison. "On computable numbers, with an application to the Entscheidungsproblem." Proceedings of the London mathematical society 2.1 (1937): 230-265.

[^Turing1]: ibid, 241.

[^visualization]: A visualization of the Turing Machine can be tried here: https://turingmachine.io/.

[^exhibition]: See https://whitney.org/exhibitions/programmed. 

[^joan]: See more of her works here: http://joantruckenbrod.com/gallery/#

[^galanter]: Galanter, P. (2003). *What is Generative Art? Complexity theory as a context for art theory*. In GA2003-6th Generative Art Conference Citeseer. 

[^10print]: Montfort, Nick, et al. *10 PRINT CHR $(205.5+ RND (1));: GOTO 10.* MIT Press, 2012.

[^Langton]: Langton, Christopher G. “Studying Artificial Life with Cellular Automata.” Physica D: Nonlinear Phenomena 22, no. 1–3 (October 1986): 120–49. https://doi.org/10.1016/0167-2789(86)90237-X.

