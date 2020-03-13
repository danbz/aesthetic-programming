Title: 10. Machine Learning
page_order: 10

## Machine Learning

## setup()

![](ch10_1.png)

*Figure 10.1: The flow diagram of Eliza (1966) by Joseph Weizenbaum*

This chapter begins with a diagram that describes how a chatbot works procedurally. *Eliza*, a computer program but it also often describes  as a computer therapist, was considered as one of the first chatbot created in the mid-1960s by Joseph Weizenbaum at MIT. Involving natural language processing, *Eliza* implements keywords recognition in which it takes in textual input from a patient and output responses that simulate a doctor therapist by following certain language rules with psycological considerations. Such conversations involve an "illusion" [^Weizenbaum] in order to make machines behave/respond more like a human. Evidently, *Eliza* exhibits some kinds of intelligence, with reference to the Turing Test[^Turing], not only it is able to maintain a relevant and personalized dialogue over time but also as Weizenbaum notes, "[s]ome subjects have been very hard to convince that ELIZA is not human."[^Weizenbaum2]  

This kind of artificial intelligence deals with expectation, and in computer science terms it is called prediction. What do you expect when you are interacting with a device/screen interface that is based on the experience, in terms of human interactions, that you have in the past? Latest technology of voice assistants in particular demonstrates the smoothness of conversations, such as asking the assistant to switch on/off a light, to play a certain style of music, to reserve a table at a restaurant and to seek help from customer services, these assistants are able to *learn the style* of human behaviors mostly based on the training datasets, techniques to process and analyze large amounts of natural language data, as well as recognizing patterns through machine learning models.

However, pattern recognization is a political issue as argued by Clemens Apprich, and it is not a neutral process as it involves the identification of input data and the *discrimination* of information.[^clemens] We have experienced inherent ideologies in machine learning processes, such as gender stereotypes as found in the online translation tool,[^online] the AI chatbot that was regarded as racist,[^tay] racial bias as found in facial recognization regarding border control and criminal identification [^face], and many others. In this way, machine learning or pattern recognition is not only about smoothening tasks and accurate predictions in terms of technical operation but also as what Hito Steyerl would describe as "political operation" as it creates "subjects and subjection, knowledge, authority" as well as classification and categorization.[^hito]

There are many aesthetic and cultural aspects around machine learning, such as labour practices, bias, data collection, creativity and authorship, transparency, that we could discuss but we definately need more space, or perhaps even need to write another book to continue this thread of critical discussion and learning. In view of the last chapter of this book, we take the advice from John Berger who is an art critic and wrote the infamous book *Ways of Seeing* in 1972, which is to call for an attitude of skepticism, to "remain skeptical",[^john] about what and how we read, see and know, extending from visual culture to machine learning algorithms and software production in general. Gathering, arranging, producing and generalizing knowledge automatically via machine operations are further bounded together with "systems of power".[^cox] Instead of following the common objectives of achieving accurate prediction and efficient generalization in using machine learning, perhaps we need to first unsettle the relations between seeing and knowing as suggested by Geoff Cox. By knowing how/what machine senses and at what conditions, it may illuminate the entanglement of knowldege and power, human and nonhuman operations.

## start()
In a nutshell, machine learning can be thought of three components: Input, Modelling and Output. Usually a large amount of data is needed to be collected, gathered, parsed, and this process is called data cleansing in computer science terms (data can be thought of text, video, images, gestures, etc). Pointing at this cleaning process, it involves decision making, in terms of identifying and accessing the datasets, how to structure the raw data and how to deal with inconsistencies. If data is coming from different places, then how to normalize the data by imposing a standard into structuring a cohesive data set? If we take the next bonus chapter - Machine Writing as the example, the raw data would be the gathering of markdowns in the form of characters and symbols from each chapter. We want to explore how a chapter is produced with different source code, image links, captions, texts, etc, and what does it mean by *generating* a chapter with and through a program, and what aesthetic programming is becoming as to what it is.

## Exercise in class

Try the first version of the Teachable Machine, an experiment to explore how machine learning works: https://teachablemachine.withgoogle.com/v1/

![ch10_1.png](xxx.png)

*Figure 10.1: The interface of the Teachable Machine (ver 1)* 

This web application includes both input, learning and output. By capturing images from your own web camera, the program utilizes images as the input data. There are three training classifiers that you can build by simply click the colored train button. The three default output modes can be modified by searching for new set of images, text and sound. The most simpliest way to start is to train 3 different set of gestures and facial expressions, then observe the predictive results in various forms. This exercise is to get familiar with the three major components in machine learning: input, learning and output. Furthermore, this execise sets the scence of thinking about the agency of prediction.

## Machine Learning

Machine learning utilizes different algorithms to process the training data set. In an elementry and general way of understanding machine learning, there are 3 types of algorithms: Supervised Learning, Unsupervised Learning and Reinforcement Learning.

**Supervised Learning** - This type of supervised learning is based on the training dataset in the form of input/output pairs as expected answers. A classic example would be spam emails in which an algorithm would learn from the sample of emails that are labelled as "spam" or "not spam". The goal of this type of learning is to map input to output labels. For example, with the new email as the input, what would be the predicted output result? Can it be classified as a spam email and then put into the junk mailbox? In mathematical terms, it is expressed as Y=f(X), the goal is to predict the output variable Y from the new input data (X). But this prediction process relies on classification techniques, such as binary classification (such as yes/no, spam/not spam, male/female) and multi-classification (such as different object labellings like dog, cat, human in visual recognization), which is based on the process of data labelling and this is where the politics come in. Data is being categorized in a discrete manner, and there are many reasons that might lead to a 'normative' prediction on a more complex subject like gender, race and identity beyond a relatively discrete spam classification. 
[g: show either the Nicolai's work on imageNet or Anna Ridler in relation to image classification here? a screenshot with a captioned then more explanation in the footnotes? /w]

**Unsupervised Learning** - Unlike the previous learning model, the data input does not contain a set of labelled data. One of the common tasks with unsupervised learning is clustering (algorithms such as K-mean and Hierarchical Clustering). The goal of this technique is to find similiarities and patterns to group similar entities together, providing insights into underlying patterns of different groups via exploratory analysis. The idea of clustering is to identify similar groups of data in a dataset, segregating groups with similar characteristics. It is commonly used in business and marketing sectors to understand customer preferences so as to do personalization and data marketing by grouping the customers based on their purchasing behavior on certain types of goods. Artists Joana Chicau and Jonathan Reus developed their project *Anatomies of Intelligence*[^AI] based on unsupervised learning model to develop an understanding of anatomical knowledge and computational learning. In their workshops,[^workshop] they suggest the participants to think of two parameters for examining a small image dataset. One of the groups suggest 'cuteness' and 'curlyness' as the parameters, and each of the image will be rated according to these (in the form of x and y axis). As a result, several clusters are formed and sorted, providing a different perspective when looking at images at a glance and seeing their relations in terms of similaries and differences.  

![anatomies](https://cc.au.dk/typo3temp/_processed_/csm_Screen_Shot_2019-06-19_at_15.09.09_8396587104.png)

*Figure 10.2: Anatomies of Intelligence by Joana Chicau and Jonathan Reus*

![workshop](xxx.jpg)

*Figure 10.3: Clustering and Sorting images based on the parameters of cutness and curlyness.*

**Reinforcement Learning** - This type of learning technique is based on the interaction with the environment, mapping situations into actions.[^rl] The learner (or the agent) do not have any previous data to base on to determine or predict which action to take, rather, it learns by trian and error to yield the maximum rewards. The famous example computer program AlphaGo[^alphago] beats the world champions of the Go broad game in 2017. AlphaGo is able to evaluate positions and select movies via self-taught processes. The use of this type of reinforcement learning is to find the best possible behavior or path it should take in a specific environment, mapping state-action pairs to achieve the maximization of rewards. For the broad game Go, two players compete to control the most territory with the use of black/white stones. Unlike supervised learning that relies on input training data, the characteristics of reinforcement learning is that the program see the environment as a whole, and is able to learn from its own experience via evaluating the effectiveness of each action taken: the "trial-and-error search" and "delayed reward" via sequential decisions, computation, repeated attempts and feedback learning. Each action matters and that counts for the goal of maximizing the territory control as in the game of Go. In this way, reinforcement learning is performed via sequential learning and decisions.

## Discussion in class

![10_4](ch10_4.png)

*Figure 10.4:  E.L.I.Z.A talking (2013) by Norbert Landsteiner*

Ths exercise is more returing to the Eliza chatbot by using the works produced by Norbert Landsteiner from 2005-2013:

1. Visit the Eliza Test by clicking the button 'Next step' from **https://www.masswerk.at/elizabot/eliza_test.html** to see the original example given by Joseph Weizenbaum in his article on ELIZA
2. Then visit the work *E.L.I.Z.A talking* (2013) via the link **https://www.masswerk.at/eliza/** to explore and experience the conversation with your own words.[^bot]
3. Share your experience about the original conversation given by Joseph Weizenbaum and your conversation with the bot: 
    - How do you feel when having a conversation with Eliza in response to the language, style, aesthetics and the social forms of interactions?
    - How to you see the ability and potential of technologies to capture and structure feelings and experiences? 

## Using ml5.js 
Given the length and the cohesiveness of the book, this chapter will point to the machine learning library called ml5.js, which is a JavaScript framework again that can be run on a web browser like p5.js. With its objective to make machine learning approachable for a broad audience, the library is supported by extensive code examples and tutorials on the website[^ml5].

## Source Code

```javascript
let

```

##

## Exercise in class


## While()
- The Borges story (classification)
- g: you want to talk more image net? database? /w
- "AI is a dicursive practice" (Agre - add notes from his paper "Toward a Critical Technical Practice: Lessons Learned in Trying to Reform AI" as this will refer back to the beginning of the book); will aslo add notes from Machine Learners by Mackenzie
- and paglan and Crawford + Nicolas Malevé. 

## Mini_Exercise[10]: Final Project

Aesthetic Programming introduces computer coding as an aesthetic, expressive, creative and critical endeavour beyond its functional application. It explores coding as a practice of reading, writing and building, as well as thinking with and in the world, and understanding the complex computational procedures that underwrite our experiences and realities in digital culture. To address these intersections we have been working with fundamental concepts of programming as the starting point for further aesthetic reflection — such as geometry and object abstraction; variable, data type, functions and namings as well as data capturing, processing and automation — thereby the technical functionings are setting the ground works for further understanding of how cultural phenomena is constructed and operationalized.

By drawing upon different theoretical and conceptual texts from Aesthetic Programming, your task (as a group) is required to conceptualize, design, implement and articulate a computational artifact. Your work should demonstrate the ability to integrate practical programming skills and theoretical/aesthetic understandings to articulate and develop critical computational artifacts, examining the aesthetic, cultural, social and political aspects of software.

To begin with, there are few tips may help you to come up with a project idea:

1. You may take a look again on the themes that we have used and structured for inspiration, including literacy, variable geometry, infinite loops, data capture, object abstraction, auto generator, que(e)ry data, algorithmic procedures, machine learning and the relations to topics like writing and coding, faces, emojis, (micro)temporalities, capture all, interactivity, object orientation, rule-based systems, language, expressivity, electronic literature, algorithms, politics of data processing.

2. Take a look again on all the previous mini exercises and all the questions that were set. Is there any one that you want to explore further?

3. Is there any assigned/suggested text that you are especially connected with and you want to explore in a deeper way?

4. Is there any particular technical area that you want to explore and employ in this project such as games, data visualization, 2D/3D objects, and among others.

**RUNME:**
A piece of software written in p5.js (or a combination of HTML/CSS/JS/P5/node.js).

Remember to include all external libraries and data such as images, font, text file, sound etc. Furthermore, if you have borrowed other sample code or ideas, please cite your sources in the code comments.

**README:**
A single word document within 6-8 pages (max characters: 2400 per page include space) which has to be properly written academically with scholarly citations (exclude images, references and notes).

The document should include a title, a screen shot, a flow chart, references, a link to your final project's RUNME, the links to related projects (if there is any), as well as the links of all your previous mini exercises (as an appendix).

The README should address at least the following questions with the help of your source code, programming processes and your selected readings:

- What is your software about (short description: what is it, how does it work and what do you want to explore/unfold)?

- How does your work address at least one of the themes and further explore the intersections of technical and cultural aspects of code in order to reflect deeply on the pervasiveness of computational culture and its social and cultural effects?

- Open question: How do you see the project as a critical work in itself with some of the understanding of the inner workings of software and its material conditions?

## Required reading:
- Christian Ulrik Andersen & Geoff Cox. FEELING, FAILURE, FALLACIES in *A Peer-Reviewed Journal About Machine Feelings*, vol(8)1, 2019. https://aprja.net//article/view/115409 

## Further reading:
- Weizenbaum Joseph (1966) ELIZA - a computer program for the study of natural language communication between man and machine. *Commun ACM* 9(1):36–4
- Kate Crawford and Vladan Joler. Anatomy of an AI System: The Amazon Echo as an anatomical map of human labor, data and planetary resources, 2018. Web: https://anatomyof.ai/
- Clemens Apprich, Wendy Hui Kyong Chun, Florian Cramer, Hito Steyerl, *[Pattern Discrimination: In Search of Media](https://meson.press/wp-content/uploads/2018/11/9783957961457-Pattern-Discrimination.pdf)*, Minneapolis, London: University of Minnesota Press, 2018.
- Geoff Cox. Machine ways of seeing. *Unthinking Photography*, 2016, web: https://unthinking.photography/articles/ways-of-machine-seeing

## Notes

[^Weizenbaum]:

[^Weizenbaum2]:

[^Turing]:

[^clemens]: p.x

[^online]:https://twitter.com/mit_csail/status/916032004466122758

[^tay]: microsoft chatbot

[^face]: xx

[^hito]: p.3

[^john]: ref

[^cox]: ref

[^ml5]: See https://ml5js.org/.

[^AI]: https://anatomiesofintelligence.github.io/

[^workshop]: https://anatomiesofintelligence.github.io/workshop_presentation.html

[^alphago]: Silver, David, Julian Schrittwieser, Karen Simonyan, Ioannis Antonoglou, Aja Huang, Arthur Guez, Thomas Hubert, et al. ‘Mastering the Game of Go without Human Knowledge’. *Nature* 550, no. 7676 (October 2017): 354–59. https://doi.org/10.1038/nature24270.

[^pathmind]: https://pathmind.com/wiki/deep-reinforcement-learning

[^rl]: Richard Sutton and Andrew Barto, Reinforcement Learning: An Introduction (1st Edition, 1998)

[^bot]: The text-based conversational bot is developed by Norbert Landsteiner with JavaScript called ElizaBot(elizabot.js) in 2005. The source code can be downloaded here: https://www.masswerk.at/elizabot/ 
