## 7. Vocable Code

## Intro

Many scholars and artists have explored and put together the concepts of code and language, not only consider programming as a tool to produce a piece of literature but also exploring the materiality, connection, paradoxes and tensions between the two, as articles, performances and artworks, they are Florian Cramer (2008), John Cayley (2002), Ian Hatcher (2015), Graham Harwood (2008), Daniel Temkin (2011), Michael Mateas and Nick Montfort (2005), Zach Blas and Micha Cárdenas (2012, 2013) and Allison Parrish (2015) to name but a few. In this chapter, we explore speech-like qualities, as part of the wider thinking of code and language, between program code and speech-act in language, specifically working on *voices* to think through the aesthetic and critical possibilities for what we might describe as *vocable code* as put in forward as this chapter's title.

This chapter will centre the software artwork *Vocable Code*, as a means to unfold the technical and aesthetic aspects of code.
![vocable_code](https://farm2.staticflickr.com/1772/42269344360_a1038a1471_z.jpg)

### The context of the work
<blockquote>
Vocable Code is both a work of “software art” (software as artwork, not software to make an artwork) and a “codework” (where the source code and critical writing operate together) produced to embody “queer code”. It examines the notion of queerness in computer coding. Through collecting voices and statements from others that help to complete the sentence that begins: “Queer is…”, the work is computationally and poetically composed where the texts and voices are repeated and disrupted by mathematical chaos, creating a dynamic audio-visual literature and exploring the performativity of code, subjectivity and language. Behind the executed web interface, the code itself is deliberately written as a codework, a mix of a computer programming language and human language, exploring the material and linguistic tensions of writing and reading within the context of (non)binary poetry and computer code.
</blockquote>

The work is presented in a dual screen format, with one side shows the source code (codework) and the other side shows the executed version. In this particular work, the source code is no longer, as usual, hidden away from any user and, instead, always display side by side to blur the boundary between the source and the executed, the back and the front. The notion of queer code is the main subject, and this operates in multiple levels, such as the queering about what a front-end interface should be, the always practical writing of code in its most efficient way, the performative aspect of code that includes human and nonhuman execution, the participatory aspect of voices that the program speaks endlessly and many others.  

The core method in structuring the artwork *Vocable Code* is the use of constrains/rules, which is seen in both the writing of codework/source code, as well as formulating the rules for the voice contributors the queer's statements such that the voices themselves express different rhythm, temporality and meaning. For example, below show some of the constrains:
- When writing the source code, do not use binary 0 or 1, either a single X or Y, a single operator of '>' or '<'.
- When writing the source code, mindful of all the variable, array and function's naming.
- For each specific voice, the sentence with the starting words: "Queer is"
- For each specific voice, each sentence contains the minimum of 1 word but no more than 5.

## 1. Decoding the interface:
Q: By just looking at the [RUNME](https://siusoon.github.io/VocableCode/vocablecode_program/) of *Vocable Code*, describe the different elements of the work and imagine how they operate computationally in human language?

Not really an 'answer' but some possible imagination:
1. There are always text on the black color screen/canvas
2. The text are moving up and then most of them going down
3. The text fades over time
4. The text are various in size
5. Some of the content of the text are overlapped but at least there are more than 10 different text.
6. For each new batch of the text showing on a screen, one can hear a human-like voice that speaks one of the text.
7. It seems there is a max limit of text appear on the screen for each new batch.
8. ...


## 2. Textuality
Although the artwork *Vocable Code* is about voices, voices and text are interlinked in the work. The program will pick only one selected text to speak/play at a time. Other selected text will be display dynamically on a screen. In terms of language, one can look into the meaning and semantics of text, but the placement of words and other design attributes also change the way of how one might perceive and interpret the queer statements. Queer statements are randomly selected, randomly presented and randomly spoken but at the same time they are also randomly combined and disrupted by mathematical chaos.  

Here are the text-related syntax that have been used in the work:

```javascript
let withPride; //font
//new font: line 11
function preload() {
  withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf');
}
.
.
.
//line 68: the class and constructor
function notNew(getQueer){
  this.size = floor(random(15.34387,30.34387));
  this.xxxxx = width/2.0;
  this.yyyyy = random(height/3.0,height+20.0);
  this.speed = random(2.34387,3.34387);
  this.gradient = 240.0;
}
.
.
.
this.shows = function() {
//font, size, alignment, fill and position: line 80
  textFont(withPride);
  textSize(this.size);
  textAlign(CENTER);
  noStroke();
  fill(this.gradient);
  text(getQueer, this.xxxxx, this.yyyyy);
}
```
*Sketch 1: Snippets of Vocable Code on Textuality*

### 2.1 Typography

`loadFont` supports opentype font style (.otf and .ttf) and it returns a PFont object through `withPride` in the above sketch 1.

"Gilbert_TypeWithPride.otf" is free font and is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License, and that can be downloaded from the Internet (www.typewithpride.com) <sup>[1](#myfootnote1)</sup>. It is designed to honor the memory of Gilbert Baker, who is the creator of the iconic Rainbow Flag but passed away in 2017.

<img src="https://static1.squarespace.com/static/58ed2d6244024330c0a58707/58ed2dbbf7e0abfc5d7ebb1c/58f77ed329687f53ff3123c7/1493282053409/TypeWithPride-07.jpg?format=2500w" width="450">

`textFont()` means to get ready to print out or write the text with the chosen font, and in this case with `withPride` that is previously defined.

`textSize()` sets the current font size for use. For this sketch it takes a random integer number between 15 to 30.

`textAlign()` takes the first argument for the horizontal alignment. It contains options as LEFT, RIGHT and CENTER. Since every sentence with different number of words and hence the length of it will be various. In Vocable Code, the text is aligned CENTER regardless of the sentence's length.

`noStroke()` and `fill()` do similiar things as for shapes. The former one disables drawing the stroke (outline), while the later one sets the color of the text. `fill()` takes RGB values and other different color formats.

`text()` draw text to the screen with specific words and positions (both horizontal and vertical).

### 2.2 Conditional Structure

There are two different `if` statements implemented in *Vocable Code*. Since text is continuously generated in the artwork, the first one is to check if there are still text remained on the screen. The second conditional statement is to check whether the text are moved out of the canvas especially on the vertical y-axis.

```javascript
//line 63
if ((queerRights.length <= 2.0) && (frameCount % 20 == 4.0)) {
		makeVisible();
}
.
.
.
//line 90
this.isInvisible = function() {
		var status;
		if (this.yyyyy <= 4.34387 || this.yyyyy >= height+10.34387) {
			status = "notFalse";
		} else {
			status = "notTrue";
		}
		return status;
};
```

*Sketch 2: Snippets of Vocable Code on Conditional Structure*

The first one with the logic of **AND** (`&&`) case, where both conditions `queerRights.length <= 2.0` AND `frameCount % 20 == 4.0` are needed to be 'true' in order to proceed to the function `makeVisible()`.

The second one is within the function `this.isInvisible=function()` with the logic of **OR** (`||`) case, where either one condition is needed to be 'true' (`if (this.yyyyy <= 4.34387 || this.yyyyy >= height+10.34387)`). Additionally, there is also an 'if-else statement' to handle the results of the conditional statement. Therefore, it is read as if either one of the two conditions is met, the variable `status` will be assigned as 'notFalse' (this means the text is out of the screen in terms of the top or the bottom edge), and else if they are still remained on the screen, the variable `status` will be assigned as 'notTrue'.

What is interesting here is the use of the value `notFalse` and `notTrue` as we tend to understand the boolean logic as the only absolute binary reality as 'true' or false'. We can then also relate this to the zeros and ones in which information is reduced into machine code. Arguably and conceptually, notFalse and notTrue give a wider possibility of imagining and voicing matters as this points at the becoming of more than the binary reality.

### 2.3 Reading JSON and Speaking Code
```JSON
{
	"description": "This file contains the meta data of queer text",
	"condition": "statement2 cannot be null",
	"copyLeft": "Creative Common Licence BY 4.0",
	"lastUpdate": "Mar, 2019",
	"queers":
	[
		{
		"iam": "WinnieSoon",
        "statement2": "not fixed not null",
        "statement3": "not null not closed"
    },
		{
		"iam": "GeoffCox",
		"statement2": "queer and that means queer",
		"statement3": "null"
		},
		{
		"iam": "GoogleAlgorithm",
		"statement2": "not a manifesto",
		"statement3": "null"
		}
 	]
}
```
*Sketch 3: The JSON file in Vocable Code*

Javascript Object Notation (JSON) is an open-standard and independent file format. In a nutshell, it is used to store and exchange data with certain rules to follow. For this specific example, JSON file is used to store the data from all voice donors. Their statements are written in text and will be used to display on a screen. By using JSON, all the data can be updated on this JSON file without changing anything in the javascript source code level.

JSON is mainly used for storing and retrieving data while javascript is a programming language that implements computational logic to manipulate the data, such as retrieving the data and display on a screen in various color, size and speed. This kind of separation of data and computational logic is commonly seen in software development. JSON is widely used as a data storage and communication format on the internet and software applications that employ different programming languages. Google, for example, offers their web or image search results in JSON format via their Application Programming Interfaces (APIs). We will look into more about APIs in next chapter.  

JSON looks similar to Javascript in terms of the use of arrays and objects. But they are formatted differently, and some of the rules are:
- Data is stored in name/value pairs, e.g `"copyLeft": "Creative Common Licence BY 4.0"` and the pair is separated by a colon.
- All property name/value pairs have to be surrounded by double quotes.
- Each data is separated by commas
- Square brackets `[]` hold arrays
- Curly braces `{}` hold objects, e.g there are many object instances that share the same structure.
- Comments are not allowed.
- No other computational logics like conditional structure or for-loop.

To process the JSON file in sketch 3, you need to use the syntax `loadJSON`. See how this puts together in a sketch:

```javascript
let whatisQueer;

function preload() {
  whatisQueer = loadJSON('inclusive/voices.json');
}
.
.
.
function makeVisible() {
//line 16 (queers is the array)
  queers = whatisQueer.queers;
//line 33 (check the JSON file - which are the objects under 'queers' -> to select which voice to play)
  SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
}
```
*Sketch 4: Snippets of Vocable Code on Reading JSON I*

<img src="ch7_4.png" width="450">

*Sketch 5: Snippets of Vocable Code on Reading JSON II* [need to redraw in a better form]


After loading the JSON file that is stored in the relative path `inclusive/voices.json`, it then points at the `queers` array (in line 11 of Sketch 5) and look for the name/value pairs of `iam`, `makingstatements` from the randomly selected statement among `statement2` and `statement3`. Lastly, the function  `SpeakingCode` is called.

```javascript
function makeVisible() {
  ...
  SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
}
.
.
.
function SpeakingCode(iam, makingStatements) {
	let getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}
```
*Sketch 6: Snippets of Vocable Code on Speaking Code*

All the voice files are stored in the wav file format. Since the files are named in a specific convention that follow the field `iam` in the JSON file. In this way, we can then concatenate all the bits and pieces by using the operator `+` so as to retrieve the specific voice file to play: `let getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";`As discussed earlier, the selected voice is synchronized with the text on screen. That is to say the program won't speak purely random from all the voices.

To play a sound file you need to both use `loadSound` as a callback to make sure the sound is fully loaded (it takes time as it also involves file size issues, memory and hardware) before the function `speak.play()` is invoked.

## 3. Source Code for Vocable Code

<img src="ch7_source.png" width="450">

*Sketch 7: Full source code for Vocable Code*

## Outro:

In high level programming language, the source code is both for sending instructions to machines as well as communicating with humans. In this way, writing source code means to deal with signs and symbols, semantics and syntactics of languages that collide with both programming and natural ones. We also learnt from previous chapter (Object Orientation) that abstraction is a fundamental concept to software development which is away from the machine operations, and put focuses on building abstractions as objects. The use of class/object structure (text as object instances), conditional structure, procedures and subroutines such as the for-loop of the stored text are some of the ways that are designed to present and execute the source code in a particular way.

Through just showing the source code and the executed interface, one could also argue there is a discrepancy of code, referring to what you see is not necessarily how it operates. There are many other things that are not shown on the executed interface. (expanded with chun text)

*Vocable Code* has a direct relation on bodily practices, the act of voicing. The voice of the program or the programmer, the voice of the voice donors to account for other social bodies that are drawn into the proccess of meaning production. In other words, computation cannot be just reduced to input and output. What does it mean to execute the function `SpeakingCode(iam, makingStatements)`, who is speaking and for whom? One might think it is the people who is speaking, but the speaking process does not only go through the human process, but also variables, arguments, source code and machine code, and specifically the sound library with the function `speak.play()`. In the writing of *Speaking Code* (2013), Cox suggests "The interplay of the body of the code, the programmer's comments, and the human-machine reader express how hardware and software, text and code, are embodied"

However, thinking about voices with just human speech is very limited, as voice is not just only pointed at how a voice is being spoken and heard, but how voices are being marginalized and normalized. In particular to the idea of queer code and the binary logic of computation, Plant links further to wider western reality:

<blockquote>
"Whether [...]gathering information, telecommunicating, running washing machines, doing sums, or making videos, all digital computers translate information into zeros and ones of machine code. These binary digits are known as bits and strung together in bytes of eight'. The seros and ones of machine code seems to offer themselves as perfect symbols of the orders of Western reality, the ancient logical codes which make the difference between on and off, right and left, light and dark, form and matter, mine and body, white and black, good and evil, right and wrong, life and death, something and nothing, this and that, here and there, inside and out, active and passive, true and false, yes and no, sanity and madness, health and sickness, up and down, sense and nonsense, west and east, north and south. And they made a lovely couple when it came to sex. Man and woman, male and female, masculine and feminine: one and zero looked just right, made for each other: 1, the definite, upright line; the 0, the diagram of nothing at all: penis and vagina, thing and hole...hand in glove. A perfect match."   - (Plant 1997, pp. 34-35)
</blockquote>

Although it takes two to make a binary (and set up the heterosexist paradigm), clearly inequalities are expressed in the tendency to privilege one side of the equation over the other - with positive and negative attributes accordingly.

In this chapter, through the work *Vocable Code* with strange syntaxes (such as notFalse and notTrue) and many repetitive decimals, what we want is to foreground is: Queer is...making binaries strange.   

## Mini Exercise #7: E-lit
**Task and Objective:**
- To design and implement an electronic literature that utilizes text as the main medium (but text can be also manifested in various forms)
- To reflect upon the aesthetics of code and language.

**Get some additional inspiration here:**
- [e-lit collection1](http://collection.eliterature.org/1/)
- [e-lit collection2](http://collection.eliterature.org/2/)
- [e-lit collection3](http://collection.eliterature.org/3/)
- [Digital Poetry by David Jhave Johnston](http://glia.ca/)
- [Poems by Ian Hatcher](http://ianhatcher.net/#!/poems)
- [Rita library](http://rednoise.org/rita/) by Daniel Howe

**Questions to think about:**
- What's the program about?
- Try to contextualize your sketch by answering these:
  - **Analyze** your own e-lit work by using the text 'Vocable Code' or other texts that address the border theme of 'code and language'.
  - What is the **aesthetic aspect** of your program in particular to the relationship between **code and language**?

## Works cited:
- Parrish, A (2015) https://vimeo.com/134734729
- Cramer, F (2008) Language in Software Studies
- Harwood, G (2008) Class Library in Software Studies
- Cayley, J (2002) The Code is not the Text (unless it is the Text). electronic book review
- Hatcher, I. (2015) The All-New. Small Press United. http://anomalouspress.org/books/all-new.php
- Temkin, Daniel. (2011) esoteric.codes https://esoteric.codes/
- Mateas, M., & Montfort, N. (2005, December). A box, darkly: Obfuscation, weird languages, and code aesthetics. In Proceedings of the 6th Digital Arts and Culture Conference, IT University of Copenhagen (pp. 144-153).
- Cox, G. (2013) Speaking Code: Coding as Aesthetic and 6. Political Expression. Cambridge, Mass: MIT Press.
- Blas, Z. & Cárdenas, M. Imaginary computatoinal systems: queer technologies and transreal aesthetics. AI & Soc (2013) 28: 559. https://doi.org/10.1007/s00146-013-0502-y
- Blas, Z. & Cárdenas, M (2012) femme Disturbance Library

## Further references:
1. Badiou, A. (2008) Number + Numbers. Cambridge: Polity.
2. Barad, K. (2007) Meeting the Universe Halfway: Quantum Physics and The Entanglement of Matter and Meaning. Durham: Duke University Press.
3. Barlow, JD. (2001) The Book of Nothing. London: Vintage.
4. Braidotti, R. (2013) The Posthuman. Cambridge: Polity.
6. Feminist Software Foundation. (2013) Feminist Software Foundation: C-Plus-Equality. [online] Available at: https://github.com/ErisBlastar/cplusequality/blob/master/hellofeminists.Xe [Accessed 13 Apr. 2018].
7. Feminist Software Foundation. (2016) Feminist Software Foundation: C-Plus-Equality. [online] Available at: https://github.com/ErisBlastar/cplusequality/blob/master/README.md [Accessed 13 Apr. 2018].
8. Hodges, A. (1983) Alan Turing: The Enigma. London: Walker Books.
9. Laporte, D. (2002) A History of Shit. Cambridge, Mass., London: MIT Press.
10. Muldtofte, L. (2018) ‘Language Plus Code’, PhD thesis. Aarhus University.
11. Parrish, A. (2018) Text and Type. [online] Available at: https://creative-coding.decontextualize.com/text-and-type/ [Accessed 13 Mar. 2019].  
12. Plant, S. (1998) Zeros + Ones: Digital Women and the New Technoculture. London: Forth Estate.
13. Queneau, Ramond, et al. Six Selections by the Oulipo. The New Media Reader. Eds. Noah W-F and Nick M. The MIT Press, 2003. 147-189.
14. Raley, Rita. Interferences:[Net.Writing] and the Practice of Codework. electronic book review, 2002.
15. Rhee, Margaret. “Reflecting on Robots, Love, and Poetry.” XRDS 24, no. 2 (December 2017): 44–46.
16. Shiffman, D. (2017) 10.1: Introduction to Data and APIs in Javascript. [online] Available at: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r [Accessed 13 Mar. 2019].  
17. Shiffman, D. (2017) 10.2: What is JSON? Part I - p5.js Tutorial [online] Available at: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r [Accessed 13 Mar. 2019].
18. Shiffman, D. (2017) 10.2: What is JSON? Part II - p5.js Tutorial [online] Available at: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r [Accessed 13 Mar. 2019].

## Notes
<a name="myfootnote1">1</a>: In the same token, you can also find a lot of free and open source fonts to download on the Internet.
