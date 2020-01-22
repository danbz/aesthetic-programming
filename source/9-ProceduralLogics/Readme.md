Title: 9. Procedural Logics
page_order: 9

## Procedural Logics 
[g: how about algorithmic procedures? /w]

## setup()
In chapter 3 - Infinite Loops, we have briefly introduced the computational diagram that is drafted by Mathematicians Ada Lovelace in 1842, which is often referred to the world's first computer program[^first]. With an interest in numbers and arithmetical calculation, in particular Bernoulli numbers (B<sub>n</sub>), the sequence of rational numbers[^rational], the published diagram and the extensive notes of Ada Lovelace demonstrate the sophisticated step by step sequence of operations for solving mathematical problems. Such a diagram can be seen as instructions that can be executed by machine automatically, as she puts it, "I want to put something about Bernoulli’s numbers, in one of my Notes, as an example of how the implicit function may be worked out by the engine without human head & hands first. Give me the necessary formulae."[^ada2]

This chapter is not specificially about the syntax of code, but more about algorithmic procedures that describe the steps and operations of a program to "produce desire outcomes" (Kitchin, 2017, 16) or to solve a problem in Computer Science terms. It is not dependent on specific software and library, and the algorithm can show the steps in which, ideally, can be implemented by any programming languages. In other words, an algorithm shows the break down of procedural operations on how an operation moves from one step to another progressively. Perhaps at this point it is useful to think of the common analogy[^recipe], an algorithm as a cooking recipe to describe ordinary activities in everyday life. For example, what are the ingredients and procedures required when you bake a chocolate cake? 

But of course an algorithm is more than just steps and operations, as it has wider cultural and political consequences. As we learnt in previous chapters that programming is a form of abstraction that requires the selection of important details in which the way of implementation is inevitably embodied programmers' thinking and decision. If algorithm is considered as the skeleton of how a program operates, then many of the cultural objects that we are using nowadays such as a mobile phone, a web browser, or even a voice assistant device embody the substrate of computing that produce a certain form of reality that structures our experience with gagets and applications. In this book *What Algorithms Want?*, Ed Finn explores algorithm as a culture machine and he argues that algorithm "operates both within and beyond the reflexive barrier of effective computability, producing culture at a macro-social level at the same time as it produces cultural objects, processes, and experiences."[^fin] Similary, scholar Taina Bucher asserts that algorithms have power and politics, and she argues that "they are fundamentally productive of new new ways of ordering the world".[^bucher] 

In this chapter we will introduce diagramming practice, especially flow chart in which to elaborate the concept of algorithmic procedures. 

## start()

## Exercise in class

Draw a flow chart based on below code:

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

A flow chart shows a breakdown of tasks representing procedures, step-by-step progression and algorithms. It is not a detailed flow chart that includes every possible computational steps but rather it demonstrates high-level processes for visual understanding that gives a general idea of how tasks are broken down. It is independent of any programming language as it concerns procedures but not coding syntax.

## Discussion
According to Ensmenger (2016):

1. how would you understand "To view the computer flowchart as having only one purpose is narrow and misleading" as he suggests that "every flowchart had multiple meanings and served several purposes simultaneously"?

2. How would you expand this line of thinking? "Flowcharts allow us to "see" software in ways that are otherwise impossible"

## Flow chart as source

## While()

- The  Project  Formerly  Known  as  Kindle  Forkbomb Printing Press: http://www.arnolfini.org.uk:7081/project.arnolfini/the-project-formerly-known-as-kindle-forkbomb

- Ensmenger, Nathan. “The Multiple Meanings of a Flowchart.” Information & Culture: A Journal of History 51, no. 3 (2016): 321–51. https://doi.org/10.1353/lac.2016.0013.
- Morris, Stephen, and Orlena Gotel. “The Role of Flow Charts in the Early Automation of Applied Mathematics.” BSHM Bulletin: Journal of the British Society for the History of Mathematics 26, no. 1 (March 2011): 44–52. https://doi.org/10.1080/17498430903449207.


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
[^rational]: A rational number can be made by dividing two integers e.g 1.5 is a rational number because 1.5 = 3/2 where both 3 and 2 are integers.

[^first]: In particular to the complexity of the diagram for calculating Bernoulli numbers that includes the grouping of operations, the invention of the loop concept (repetition and cycle in Lovelace's term), the manipulation of symbols and variables in accordance with rules. Although such an algorithm was designed to be used in mechanical caluclating machine, Babbage Analytical Engine is conceptually close to a modern computer at the time with a vision that could do other things, such as music, beyond number calculation. See Menabrea, Luigi Federico, and Ada Lovelace. *Sketch of the analytical engine invented by Charles Babbage.* , 1842, p. 694. 

[^ada2]: (Lovelace Papers, Bodleian Library, Oxford University, 42, folio 12 (6 Feb 1841). As quoted and cited in Dorothy Stein (ed.), 'This First Child of Mine', Ada: A Life and a Legacy (1985), 106-107.)

[^recipe]: Although the concept of algorithm is rooted in Computer Science, scholars from other fields like cultural studies and media studies take on the technical concept of algorithm and explore the wider cultural consequences and political implications. The analogy of algorithms as receipes can be also seen here: Finn, Ed. What Algorithms Want: Imagination in the Age of Computing. Cambridge, MA: MIT Press, 2017, p. 17 and 
Bucher, Taina. If...Then: Algorithmic Power and Politics. Oxford University Press, 2018, p. 21.

[^fin]: Finn, Ed. *What Algorithms Want: Imagination in the Age of Computing*. Cambridge, MA: MIT Press, 2017, p. 34.

[^bucher]: Bucher, Taina. *If...Then: Algorithmic Power and Politics*. Oxford University Press, 2018, p. 20.
