Title: 9. Algorithmic Procedures
page_order: 9

## Algorithmic Procedures
[g: how about algorithmic procedures instead of procedural logics? /w]

## setup()
In chapter 3 - Infinite Loops, we have briefly introduced the computational diagram that is drafted by Mathematicians Ada Lovelace in 1842, which is often referred to the world's first computer program[^first]. With an interest in numbers and arithmetical calculation, in particular Bernoulli numbers (B<sub>n</sub>), the sequence of rational numbers[^rational], the published diagram and the extensive notes of Ada Lovelace demonstrate the sophisticated step by step sequence of operations for solving mathematical problems. Such a diagram can be seen as instructions that can be executed by machine automatically, as she puts it, "I want to put something about Bernoulli’s numbers, in one of my Notes, as an example of how the implicit function may be worked out by the engine without human head & hands first. Give me the necessary formulae."[^ada2] The formulae is then further expanded as algorithmic procedures via a diagram. 

This chapter is more about algorithmic procedures that describe the steps and operations of a program and less specificially about the syntax of code. It is not dependent on specific software and library. An algorithm shows the operational steps in which, ideally, can be implemented by any programming languages or at least able to use it for communication. In other words, an algorithm illustrates the break down of procedural operations on how an operation moves from one step to another progressively. Perhaps at this point it is useful to think of the common analogy[^recipe], an algorithm as a cooking recipe to describe ordinary activities in everyday life. For example, what are the ingredients and procedures required when you bake a chocolate cake? 

But of course an algorithm is more than just steps and operations, as it has wider cultural and political consequences. As we learnt in previous chapters that programming is a form of abstraction that requires the selection of important details in which the way of implementation is inevitably embodied programmers' thinking and decision. If an algorithm is considered as the skeleton of how a program operates, then many of the cultural objects that we are using nowadays such as a mobile phone, a web browser, or even a voice assistant device embody the substrate of computing that produce a certain form of subjectivity that structures our experience. In his book *What Algorithms Want*, Ed Finn explores algorithm as a culture machine and argues that algorithm "operates both within and beyond the reflexive barrier of effective computability, producing culture at a macro-social level at the same time as it produces cultural objects, processes, and experiences."[^fin] Similary, scholar Taina Bucher asserts that algorithms have power and politics, and she argues that "they are fundamentally productive of new new ways of ordering the world".[^bucher] It becomes clear that algorithmic procedures play an important role in organizing digital culture, and it is not very easy to see through or describe them because they operate beyond what we see and they have accumulated and wider effects in the ordering of life, more than a cooking recipe. 

In this chapter we will introduce diagramming practice, especially flow charts as a means to elaborate the practical and conceptual aspects of algorithmic procedures. 

## start()
Flow charts is considered as a fundamental tool since the early days of computer programming. One of the uses is to illustrate computational operations and data processing for programming purpose by "converting the numerical method into a series of steps" [^Ferranti] logically. But flow charts are also considered as a representational diagram which can be also used for communicating complex logics between programmers and organizational units.

Within our teaching, we also consider coding as a social activity in which collaborative coding is encouraged, which means programming is not necessarily seen as anti-social, masculine and nerdy tasks, the myth of the typical stereotypes[^sterotypes] that need to be deconstructed. Furthermore, we understood that in many of the applications that we are using nowadays is not developed by one programmer but tasks are divided into different components instead that are shared by people you know or you don't know, such as maintaining or debugging a program that is done by someone before. As a beginner especially in a classroom setting, we see that having discussion around syntax, logics and implementation collaboratively is a good way to learn together.  

## Discussion in class

- Can you give a daily example with the details of (computational) logic about an algorithm that you have used or experienced. 

- Can you sketch an algorithic procedures on how your social media feeds is being organized?

- Base on the assigned reading from Bucher, can you list out some of the properties of algorithms? Why is it both technical and social?

- We have discussed rule-based systems in Chapter 6 - Auto Generator, how is that different from procedures in this chapter?

## Flow Chart

Conventionally, each step in a flow chart is represented by a symbol and connecting lines that guide towards a certain output progressively. The symbols that are used in a flow chart are shapes and each shape has different meaning. Below it shows the basic components of drawing a typical flow chart:

- **Oval**: Indicate the start or end points of a program/system. (But this needs to think about if all programs have an end?)
- **Rectangle**: Represent the process steps.
- **Diamond**: Show the decision points with yes and no branches.
- **Arrow**: Act as a connector to show the relationship and sequence, but sometimes an arrow might be returned the the previous process especially showing the repetition and loops.

As we have covered the program *Vocable Code* in Chapter 7, Figure 9.1 below shows the corresponding flow chart, a different representation of the program. The original idea of this flow is to first demonstrate the high level logics and sequences, and second to elaborate the details in plain English. This flowchart does not follow conventional drawing strictly but using symbols, lines and text to communicate with wider audience like our readers.  

![flowchart](ch9_1.png)
*Figure 9.1: The flow chart of Vocable Code by Winnie Soon, graphic design by Anders Visti*

Indeed flowcharts are used beyond science disciplines, for example it is relatively common to use flowchart in business sector to understand and communicate how different processes or workflows are done, such as recruitment process flow and customer complaint handling. In humanities teaching, we also introduce flowcharts as a means to deconstructing a text as well as to formulating a structure of an essay idea. It is a tool that helps thinking different procedures and processes.   

In the chapter's mini exercise, you will come up with a flow cart collaboratively for a new project idea. Especially it comes to this stage of the book where you may have more confident in building a slightly more complex program/project that incorporates different types of syntax. We found that one of the usual struggles of crafting a program's flow chart is about how to combine and link various functions as well as to break down a task into smaller steps in order to know what to do next. We see a flowchart can be used as a tool to formulate ideas, generate discussion, forseeing technical challenges and set the path for working together. If tasks need to be divided within a group, flowcharts can be used to identify how a smaller task can be linked to other without losing site of seeing the larger picture of a program. 

But to turn an existing program into a flow chart for communication purpose, the challenges of drawing a flow chart at this stage would be:
1. Turn programming syntax and function into understandable plain text.
2. Decide the details level of showing the important operations that allow other people to understand your program.

## Exercise in class

Let's start with something seems to be very simple. Draw a flow chart based on the below program code:

```javascript
function setup() {
  var sometext = ['h','e','l','l','o'];
  for (var i=0;i<sometext.length; i++) {
    console.log(sometext[i]);
  }
}

/*output
h
e
l
l
o
*/

```

In our experience with this class exercise[^ex], every person comes up with a slightly different result and we think it is a good way of starting the discussion about the use of flow charts and the challenges of crafting them.

## Discussion

We have selected two quotes from Nathan Ensmenger on his article titled "The Multiple Meanings of a Flowchart" for further discussion here. How would you perceive and understand them?

1. "To view the computer flowchart as having only one purpose is narrow and misleading" as he suggests that "every flowchart had multiple meanings and served several purposes simultaneously" (p. 324)

2. "Flowcharts allow us to "see" software in ways that are otherwise impossible" (p. 346)

## Flow charts as diagramming practice

Beyond the more practical usage of a flowchart, it is also an aesthetic diagramming practice as seen in software art. A classic example *Google will eat itself* (2005)[^GWEI] by UBERMORGEN, Alessandro Ludovico and Paolo Cirio illustrate how their artwork operates within the existing process of Google revene generation, and that addresses how information is being monopolized in the global advertisement system. The project's goal is to trigger advertising clicks on websites in order to receive micropayment from Google to buy their share (that is how Google will eat itself as an iterative loop). 

![diagram1](ch9_2.gif)

*Figure 9.2: GWEI - Google Will Eat Itself/ THE ATTACK*

After 8 years in 2013, UBERMORGEN developed another project titled *The Project Formerly Known as Kindle Forkbomb Printing Press* but this time they focus on another giant monopolistic corporation AMAZON. Similar to the previous project, they also built an internet robot, instead of clicking the advertisments on webpages, the program is based on, and collect, YouTube video comments to generate books automatically by uploading the generated e-books to Amazon's Kindle bookstore. Such a generative system, or an auto generator, comes without an end but with the aim to "continuously replicates itself, draining the system of its resources, ultimately causing the system to crash"[^pold] by exploiting the print-on-demand, publishing servies as well as the book e-commerce store.

![diagram3](ch9_3.png)

*Figure 9.3: The Project Formerly Known as Kindle Forkbomb Printing Press. Courtesy of UBERMORGEN and Kunsthal Aarhus, No Copyright, 2013*
[g: do you have a better picture/higher resolution of this? /w]

Both works are always being displayed with the flow charts in exhibition settings, in which the artists do not only display them as an art object but to make clear the point that procedures and processes as the art. 


## While()

There is a growing interest on algorithms as objects of study for disciplines like sociology, media studies, science and technology studies, among others. In the humanities, the concern is not on building an efficient or optimized algorithm, but more into the social and cultural concerns of technology that is less visible or even as a blackbox. Accompanying with this book, students who work on this theme have to create and present a flow chart of a sorting problem, showing an algorithm with procedures to sort a series of unique random number. Sorting seems to be seen within mathematical discipline where there are different ways to approach such a problem,  and if we extend sorting to wider cultural context, such as the prioritization of a social media feeds, it is essentially far more complex that involves selecting, classifying and hierarchizing of time, tastes, objects, knowledge and other forms of metrics that are of business concerns.    

.... next chapter is machine learning btw...wondering what you will say here :) 


## Mini_Exercise[9]: 

**Objective:**

- To acquire the ability to decompose/break down a computer program into definable parts
- To organize and structure a computer program through a flow chart
- To understand flowchart as a means for communication and planning
- To understand the concept of algorithms from both computer science and cultural perspectives

**Tasks:**

Individual: 
* Revisit your previous mini exercises and select the most technically complex one
* Draw an individual flow chart to present the program (Pay attention to: which items you select to present through a flow chart)

Group:
* Brainstorm two ideas for the final project 
* Draw two flow charts to visualize the algorithmic process of the forthcoming final project's program

**Questions to think about as README:**
- What's the challenges to get the balance between simplicity at the level of communication and complexity at the level of algorithmic logics?
- What might be the possible technical challenges for the two ideas and how are you going to solve them?
- What's the role of the individual and the group flow chart that you have done? 

## Required reading:
- Ensmenger, Nathan. "The Multiple Meanings of a Flowchart." Information & Culture: A Journal of History, vol. 51 no. 3, 2016, pp. 321-351. Project MUSE, doi:10.1353/lac.2016.0013 
- Bucher, Taina. "The Multiplicity of Algorithimcs" in *If...THEN: Algorithmic Power and Politics*, Oxford University Press, 2018, pp. 19-40 
- Marcus du sautoy, The Secret Rules of Modern Living: Algorithms - Clips, BBC Four, 2015. Web. https://www.bbc.co.uk/programmes/p030s6b3/clips

## Further reading:
- Ed Finn, “What is an Algorithm,” in *What Algorithms Want*, MIT Press, 2017, pp. 15-56.
- Daniel Shiffman, [Multiple js Files - p5.js Tutorial](https://www.youtube.com/watch?v=Yk18ZKvXBj4), The Coding Train. Web.https://www.youtube.com/watch?v=Yk18ZKvXBj4 
Goffey, Andrew. "Algorithm." *Software Studies\ a lexicon*. Eds. Matthew Fuller. MIT Press, 2008. pp. 15-20.

## Notes

[^flowcharts2]: See Morris, Stephen, and Orlena Gotel. “The Role of Flow Charts in the Early Automation of Applied Mathematics.” *BSHM Bulletin: Journal of the British Society for the History of Mathematics* 26, no. 1 (March 2011): 44–52. https://doi.org/10.1080/17498430903449207 and Ensmenger, Nathan. “The Multiple Meanings of a Flowchart.” *Information & Culture: A Journal of History* 51, no. 3 (2016): 321–51. https://doi.org/10.1353/lac.2016.0013.

[^first]: In particular to the complexity of the diagram for calculating Bernoulli numbers that includes the grouping of operations, the invention of the loop concept (repetition and cycle in Lovelace's term), the manipulation of symbols and variables in accordance with rules. Although such an algorithm was designed to be used in mechanical caluclating machine, Babbage Analytical Engine is conceptually close to a modern computer at the time with a vision that could do other things, such as music, beyond number calculation. See Menabrea, Luigi Federico, and Ada Lovelace. *Sketch of the analytical engine invented by Charles Babbage.* , 1842, p. 694. 

[^rational]: A rational number can be made by dividing two integers e.g 1.5 is a rational number because 1.5 = 3/2 where both 3 and 2 are integers.

[^Ferranti]: Ferranti Limited, Ferranti Pegasus Computer,programming manual, Issue 1, List CS 50,September 1955

[^ada2]: (Lovelace Papers, Bodleian Library, Oxford University, 42, folio 12 (6 Feb 1841). As quoted and cited in Dorothy Stein (ed.), 'This First Child of Mine', Ada: A Life and a Legacy (1985), 106-107.)

[^recipe]: Although the concept of algorithm is rooted in Computer Science, scholars from other fields like cultural studies and media studies take on the technical concept of algorithm and explore the wider cultural consequences and political implications. The analogy of algorithms as receipes can be also seen here: Finn, Ed. What Algorithms Want: Imagination in the Age of Computing. Cambridge, MA: MIT Press, 2017, p. 17 and 
Bucher, Taina. If...Then: Algorithmic Power and Politics. Oxford University Press, 2018, p. 21.

[^fin]: Finn, Ed. *What Algorithms Want: Imagination in the Age of Computing*. Cambridge, MA: MIT Press, 2017, p. 34.

[^bucher]: Bucher, Taina. *If...Then: Algorithmic Power and Politics*. Oxford University Press, 2018, p. 20.

[^sterotypes]: See Ho, Chih Wei, et al. Examining the impact of pair programming on female students. North Carolina State University. Dept. of Computer Science, 2004.

[^pold]: Christian Ulrik Anderden and Søren Bro Pold, Post-digital Books and Disruptive Literary Machines, *Formules* 18, 164-183, 2014. 

[^GWEI]: See http://www.gwei.org/index.php.

[^ex]: You can find one of the many possible ways of illustrating the simple program here: https://gitlab.com/siusoon/Aesthetic_Programming_Book/blob/master/source/9-ProceduralLogics/flow.png

