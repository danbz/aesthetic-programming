Title: 9. Algorithmic Procedures
page_order: 9

## Algorithmic Procedures

## setup()

An algorithm or recipe can also be written down in a cookbook or codebook so the actions can be shared and repeated. In *The Art of Computer Programming* (1968), Donald Knuth points to the aesthetic dimension of programming and makes an analogy to recipes in a cookbook.[^krysa] Both practices of coding and cooking share common attributes including how ingredients are selected, actions applied, and how transformations take place. Knuth's comments and indeed writing style sets the tone for this chapter in terms of subject matter but also for the way it lays out algorithmic instructions for the reader: the “procedures for reading” as he puts it. The structure of his book is algorithmic in both form and content, and here are some snippets of the playful instructions to the reader: 

"1. Begin reading this procedure, unless you have already begun to read it. Continue to follow the steps faithfully; [...] 5. Is the subject of the chapter interesting you? If so, go to step 7; if not, go to step 6. 14. Are you tired? If not, go back to step 7; 15. Go to sleep. Then, wake up, and go back to step 7."[^knuth]

The example serves to emphasize that we tend to follow instructions faithfully. But we might also observe that algorithms are more than simply steps and procedural operations as there are wider cultural and political implications, not least in terms of whether we decide to interpret them on our own terms. In this sense, like cooking, algorithms express cultural differences and matters of taste, even aesthetics. Extending his analogy to recipes in a cookbook, Knuth quotes Ada Lovelace: “The process of preparing computer programs for a digital computer is especially attractive, not only because it can be economically and scientifically rewarding, but also because it can be an aesthetic experience much like composing poetry or music.”[^knuth2] Nevertheless Taina Bucher would stress the operative dimensions of this, in *If... Then: Algorithmic Power and Politics*, that algorithms are “fundamentally productive of new ways of ordering the world".[^bucher]

In this chapter we discuss some of these recipe-like algorithmic procedures and how they describe the steps and operations of a program, and less about the syntax of code as has mainly been the case in previous chapters. An algorithm is different from lines of code in that it is not dependent on specific software and libraries. It is simply a process or set of rules to be followed in calculations or other problem-solving operations especially by a computer.[^algo] An algorithm shows the operational steps which, ideally, can be implemented by any Turing-complete programming language (as discussed briefly in chapter ??). In other words, an algorithm illustrates the systematic breakdown of procedural operations to describe how an operation moves from one step to another progressively. It’s only like a recipe in a general sense in that it is a set of step by step instructions, but the analogy only goes so far as recipes lack the exactness and reproducibility of Turing-completeness.

## start()

In chapter 3 (Infinite Loops) we briefly introduced the computational diagram that was drafted by Ada Lovelace in 1842, often referred to the world's first computer program.[^first] The published diagram and Lovelace's extensive notes demonstrate the sophisticated step by step sequence of operations for solving mathematical problems. The instructions are executed by a machine automatically. As she puts it, "I want to put something about Bernoulli’s numbers, in one of my Notes, as an example of how the implicit function may be worked out by the engine without human head & hands first. Give me the necessary formulae."[^ada2] The formulae are expanded as algorithmic procedures in the diagram. In this chapter we build on ‘diagramming’, especially in the use of flowcharts to elaborate the practical and conceptual aspects of algorithmic procedures.

Flowcharts are considered to be a fundamental explanatory tool since the early days of computer programming. One of the common uses is to illustrate computational operations and data processing for programming by "converting the numerical method into a series of steps".[^Ferranti] But flowcharts can also be considered to be representational diagrams which can be also used for communicating the complex logic between programmers and organizational units. This is good practice of course, especially for beginners in a learning context, and essential for communicating ideas in ways that can be easily understood by others. Indeed programming is not necessarily a solitary activity,[^stereotype] but a social and communicative practice that can expose relations exemplified by diagramming. Moreover most software applications are not developed by a single developer but are organized into tasks that are divided into different components that are shared by others, as for instance in maintaining or debugging a program made by someone else. The collaborative workflow lends itself to a flowchart as well. 

## Discussion in class

- Can you give an everyday example, with details of (computational) logic, about an algorithm that you have used or experienced?

- Can you sketch an algorithic procedure such as how your social media feeds are being organized?

- Based on the assigned reading from Taina Bucher, can you list some of the properties of algorithms? How is it both technical and social?

- We discussed rule-based systems in Chapter 6 (Auto Generator), how is that different from the way we are discussing procedure in this chapter?

## Flow Charts

Conventionally, each step in a flowchart is represented by a symbol and connecting lines that guide the flow of logic progressively towards a certain output. The symbols that are used are shapes and each one carries a different meaning. Below we outline the basic components of drawing a typical flowchart:

- **Oval**: Indicates the start or end point of a program/system. (But this requires further refection on whether all programs have an end.)
- **Rectangle**: Represents the processual steps.
- **Diamond**: Indicates the decision points with yes and no branches.
- **Arrow**: Acts as a connector to show the relationship and sequence, but sometimes an arrow might be returned to a previous process, especially when showing repetition and loops.

As we have studied the program *Vocable Code* in Chapter 7, Figure 9.1 below shows the corresponding flowchart, a different representation of the program. The original idea is to demonstrate the high level logic and sequences, and to elaborate the details of this in plain English. This flowchart uses symbols, lines and text to communicate with a wider audience such as the readers oif this book.

![flowchart](ch9_1.png)
*Figure 9.1: The flow chart of Vocable Code by Winnie Soon, graphic design by Anders Visti*

Indeed flowcharts are used across many disciplines, both technical and in the arts, for example it is relatively common to use them in the business sector to understand and communicate how different processes or workflows are organized for efficiency. In philosophy, diagrams have been used to produce new kinds of thinking, what Deleuze and Guattari refer to as an "abstract machine",[^Guattari] as a material assemblage of relations (and we will return to these issues in more detail at the end of the chapter). Similarly, in our past teaching, we have used flowcharts as a means to deconstruct written texts as well as to break down an argument and structure, as as a way to formulate ideas for new essays. It is a tool, or rather machine, that helps to think through different procedures and processes, and this approach has self-evidently informed our use of a flowchart to introduce each chapter of this book.  

In the chapter's mini exercise, you are asked to produce a flowchart collaboratively for a new project idea. This comes at this stage of the book as you are probably more confident in building a more complex program that incorporates different types of syntax. We have found that one of the difficulties of this is commonly how to combine and link various functions and to break down a task into smaller sequential steps. We think a flowchart can be used as an effective means to formulate ideas, generate discussion, to predict technical challenges, and to set a direction for working together on a project. If tasks need to be divided within a group for instance, flowcharts can be used to identify how a smaller task can be linked to others without losing site of the larger purpose.

To turn an existing program into a flowchart, some challenges might be:
1. To translate programming syntax and functions into understandable plain language.
2. To decide the level of detail to show the important operations that allow other people to understand the logic of your program.

## Exercise in class

Let's start with something that appears to be relatively simple. Draw a flowchart based on the program code below:

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

In our previous experience of this class exercise,[^ex] every person comes up with a slightly different result and we think it is a good way of starting the discussion about the use of flowcharts and the challenge of effective communication.

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

Although the concept of algorithm is rooted in Computer Science, scholars from other fields like cultural studies and media studies take on the technical concept of algorithm and explore the wider cultural consequences and political implications. The analogy of algorithms as receipes can be also seen here: Finn, Ed. What Algorithms Want: Imagination in the Age of Computing. Cambridge, MA: MIT Press, 2017, p. 17 and
Bucher, Taina. If...Then: Algorithmic Power and Politics. Oxford University Press, 2018, p. 21.

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

[^krysa]: See Joasia Krysa and Grzesiek Sedek, "Source Code", in Fuller, ed., *Software Studies: A Lexicon*, 236-243.

[^knuth]: Knuth, *The Art of Computer Programming*, xv-xvi. 

[^bucher]: Taina Bucher, *If...Then: Algorithmic Power and Politics* (Oxford: Oxford University Press, 2018), 20.

[^algo]: The term 'algorithm' has a historical relation to 'algorism' as the process of doing arithmetic using Arabic numerals (originating from the title of the book Kitab al jabr w'al-muqabala (Rules of restoration and reduction) written by the Persian author Abu Ja'far Mohammed ibn Musa al-Khowarizmi (c. 825).  

[^knuth2]: Knuth, *The Art of Computer Programming*, v.

[^first]: In particular to the complexity of the diagram for calculating Bernoulli numbers that includes the grouping of operations, the invention of the loop concept (repetition and cycle in Lovelace's term), the manipulation of symbols and variables in accordance with rules. Although such an algorithm was designed to be used in mechanical caluclating machines, Babbage Analytical Engine is conceptually close to a modern computer at the time as it was envisioned that it could do other things, such as music, beyond number calculation. See Menabrea, Luigi Federico, and Ada Lovelace. *Sketch of the analytical engine invented by Charles Babbage* (1842), 694. 

[^ada2]: Lovelace Papers, Bodleian Library, Oxford University, 42, folio 12 (6 Feb 1841), as quoted and cited in Dorothy Stein, ed., "This First Child of Mine", in *Ada: A Life and a Legacy* (1985), 106-107.

[^Ferranti]: Ferranti Limited, Ferranti Pegasus Computer,programming manual, Issue 1, List CS 50,September 1955.

[^Guattari]: In Guattari’s terms, “the diagram is conceived as an autopoietic machine which not only gives it a functional and material consistency, but requires it to deploy its diverse registers of alterity, freeing it from an identity locked into simple structural relations.” Félix Guattari, “Machinic Heterogenesis,” in *Chaosmosis: An Ethico-Aesthetic Paradigm* (Bloomington, Indianapolis: Indiana University Press, 1995), 44. “Freeing” here applies to escaping a pre-determined “diagrammatic order” imposed on the machine - algorithmic perhaps.

[^flowcharts2]: See Morris, Stephen, and Orlena Gotel. “The Role of Flow Charts in the Early Automation of Applied Mathematics.” *BSHM Bulletin: Journal of the British Society for the History of Mathematics* 26, no. 1 (March 2011): 44–52. https://doi.org/10.1080/17498430903449207 and Ensmenger, Nathan. “The Multiple Meanings of a Flowchart.” *Information & Culture: A Journal of History* 51, no. 3 (2016): 321–51. https://doi.org/10.1353/lac.2016.0013.

[^stereotypes]: To see programming as a social activity undermines some of the predominant stereotypes associated with programming such as the image of the typical antisocial hacker (male, bearded, unwashed). For more on the benefits of collaborative working, see Chih Wei Ho, et al, "Examining the impact of pair programming on female students", North Carolina State University. Dept. of Computer Science (2004).






[^fin]: Finn, Ed. *What Algorithms Want: Imagination in the Age of Computing*. Cambridge, MA: MIT Press, 2017, p. 34.

[^recipe]: Although the concept of algorithm is rooted in Computer Science, scholars from other fields like cultural studies and media studies take on the technical concept of algorithm and explore the wider cultural consequences and political implications. The analogy of algorithms as receipes can be also seen here: Finn, Ed. What Algorithms Want: Imagination in the Age of Computing. Cambridge, MA: MIT Press, 2017, p. 17 and
Bucher, Taina. If...Then: Algorithmic Power and Politics. Oxford University Press, 2018, p. 21.


[^pold]: Christian Ulrik Anderden and Søren Bro Pold, Post-digital Books and Disruptive Literary Machines, *Formules* 18, 164-183, 2014.

[^GWEI]: See http://www.gwei.org/index.php.

[^ex]: You can find one of the many possible ways of illustrating the simple program here: https://gitlab.com/siusoon/Aesthetic_Programming_Book/blob/master/source/9-ProceduralLogics/flow.png
