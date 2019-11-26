Title: 5. Object Abstraction
page_order: 5

## Object Abstraction

## 5.1 setup()
In the previous chapters, we have worked with different objects such as geometric shapes like ellipses, rectangles and polygons. One can apply different attributes to these objects, such as color, size and position. Additionally, they can exhibit certain behaviors such as moving, animating and rotation (as seen in Ch.3- Infinite Loops and Ch.4- Data Capture). But those geometric objects are already built-in `p5.js`. In this chapter, we will work on constructing our own objects, attributes and behaviors, representing some parts of the objects in a physical or imagined world.

Abstraction in computing is about representation. There are too much details and relations to handle in real world in which objects are complex and nonlinear. For example, Tofu, originated in China with over 2000 years, is a food made of soybean. Through soaking and grinding soybeans, as well as filering out remaining particulates, it becomes something known as soymilk, containing stable emulsion of oil, water, and protein. Such condensed soymilk is pressed into solid white blocks with varying softness as Tofu in a process similar to cheesemaking. It is an important food product specifically in the East, not only because of its protein richness but also as a cultural symbol. When you present a ToFu in a game context like [Tofu Go](https://www.dbdbking.com/Tofu-Go), developed and designed by Francis Lam (HK/CN), it is inevitably required to abstract the complexity of processes and relations, representing essential and desired elements. In the game, Tofu is designed as a white 3-d cube form with an emoticon, and it could also move and jump. Of course in real world Tofu cannot behave in that way, but one can imgine how objects can be performed differently when you program your own software. 

Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle object's complexity by presenting and abstracting certain details to the users by representing a concrete model. Fazi and Fuller discuss such concreteness of abstracted computation [^Fazi], they said "Computation not only abstracts from the world in order to model and represet it; through such abstractions, it also partakes in it." If we think of previous capture of data capture, it becomes clear that computation, in a wider cultural context, facilitates urban life into capitalistic metrification and datafication.  
Abstraction is all over in computing from using high level programing langauge to the representation in a graphical user interface. Such abstraction hides details of how a computer work physically with logic gates in a binary system as well as reducing the complexity of computer operation (such as copying and deleting files) to users. This chapter is more to examplify the concept of abstraction through object oriented programming with objects creation. 

Historically speaking, the formal programming concept of objects was introduced in the mid-1960s with Simula 67, a major revision of Simula I, a programming language designed for discrete event simulation, created by Ole-Johan Dahl and Kristen Nygaard of the Norwegian Computing Center in Oslo. (Wikipedia)


A programming paradigm
https://user-content.gitlab-static.net/38287337cdf9f32ae05de5b3d9d7037868960496/687474703a2f2f6a6f667261706573652e626c6f6769612e636f6d2f75706c6f61642f32303038303632373232313730302d6461686c2d6e7967616172642e6a7067

Background: 

"bring technical process closer to non-specialist understanding" (Fuller and Goffey 2017) => link to participatory design's utopia project that works with workers' union.
re-use of code and operation: "it saves time and effort to be able to write the code once and re-use it in different programs" (Fuller and Goffey 2017)

food , steps 

input/output -> potential to interact the environment; specialization and generalization (Cecile)
politics -> representation

Epistemologies

example application: games 

- The concept of object
what it means by objects as model 

## 5.1.1 Start()
ToFu Go by Francis Lam (HK/CN)

## Abstraction and OOP 


## Source Code 

## class

## objects

## properties

## arguments

## behaviors

## Exercise in class

1. Tinkering - add features and behaviors 

2. Discussion in Groups:

- Try to discuss a game that you are familiar with and describe the characters/objects by using the concept and vocabulary of class and object. Can you identify the classes and objects within the chosen game?
- What powers computational objects have? (Fuller and Goffey 2017)
- What does it mean by object orientation as a sociotechnical practice? (Fuller and Goffery 2017)

## While()

## Mini_Exercise[5]: Games with objects

**Objective:**
- To implement a class-based object oriented sketch via abstracting and designing objects' properties and behaviors.
- To reflect upon object abstraction in the domain of digital culture

**To get some additional inspiration here:**
- [p5.js coding challenge #31: Flappy Bird by Daniel Shiffman](https://www.youtube.com/watch?v=cXgA1d_E-jY)
- [p5.js coding challenge #3: The snake game by Daniel Shiffman](https://www.youtube.com/watch?v=AaGK-fj-BAM)
- [EAT FOOD NOT BOMBS by Ben Grosser](https://editor.p5js.org/bengrosser/full/Ml3Nj2X6w?fbclid=IwAR0pegtorx1cyYYKsEh8jNXTHdFika6tGIGOjEUgr8vTXGLHv6ajYuY4EQI)
- You may find [p5.play library](http://p5play.molleindustria.org/) useful
  - [p5.play library - examples, Pong](http://p5play.molleindustria.org/examples/index.html?fileName=pong.js)
  - [p5.play library - examples, Asteroid](http://p5play.molleindustria.org/examples/index.html?fileName=asteroids.js)
  - [p5.play library - examples, Breakout](http://p5play.molleindustria.org/examples/index.html?fileName=breakout.js)
- [Characterror: 90 second time challenge demo](http://characterror.decontextualize.com/) by Allison Parrish

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
[^Fazi]: Fazi, M Beatrice and Fuller, Matthew (2016) Computational aesthetics. In: Paul, Christiane (ed.) *A companion to digital art*. Wiley Blackwell, Hoboken, NJ, pp. 281-296. ISBN 9781118475201

---

stuff here

some ref: https://www.hastac.org/blogs/ari-schlesinger/2013/11/26/feminism-and-programming-languages

doubting the object world: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.90.4954&rep=rep1&type=pdf

