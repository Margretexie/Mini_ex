# Flow charts
### Individual work:
Here's the flow chart of my [mini_ex5](https://github.com/Margretexie/Mini_ex/tree/master/mini_ex5) where the topic was Object Oriented Programming. In this mini_ex I've made a game where the goal is for the player to survive the falling snowballs as long time as possible, and as time goes it gets harder and harder to survive.

![alt tekst](OOP.png) 

It was very hard to figure out which elements of the program to include and exclude in the flow chart. It was all about abstracting what might be important and what might not be important in order for the reader to understand the program just by looking at the flow chart.
Some of the considerations were: should I introduce the two different objects(the player and snowballs) of the program? Is it relavant to include the background music and picture in the flowchart? How technical should I be in the flowchart? 

Something else that was hard was to playce the blocks of the flow chart tactically - how do I make it easiest for the reader to understand the flow chart? In my flow chart there are two things going on simultaniously: the player is moving while the leveling system goes up every 5 seconds. These two thing were very different from each other, but because they were happening at the same time, I chose not to draw an arrow between them but a double line. This is to indicate that they are happening at the same time, but I'm not sure if the reader understands it the same way I do.

### Group work:
*Present two different ideas with two different flow charts. What might be the possible technical challenges for the two ideas and how are you going to solve them?*
#### Idea 1: Captcha
We are going create our own Captcha-program. The Captcha tries to figure whether the user of a certain program is a human or not. This is to avoid spamming or viruses in the program. The Captcha will for example ask you to write down a couple of letters to confirm your humanity. Our hope is to create an unreasonable Captcha with several levels to achieve. The levels could require to make use of sight and hearing senses or intelligence skills. The point is to make it difficult for the user to attain accessibility to the program in the end. This is to show how natural language and code/machine language differentiate from each other. The goal is in the end to show the differences between human-thinking and computational-thinking inspired by The Turing Test.

![alt tekst](Captcha.png) 

**Challenges:** 
- It may be difficult to develop a leveling program and to sort out different lines of code to not interact with each other. But this could be overcomed by organizing and folding.
- Some higher level captchas might be hard to program. But our initial idea do not include any of those.
- It might be difficult to 1) make the program easy to navigate in and 2) the code itself readable. We fear that this idea might require a lot of variables to check different states of the program.
- To make it interesting. Do we need some kind of randomness in challenges given? different puzzles to each level? 

#### Idea 2: Art Investigator (AI)
This program is trained to analyze pictures through machine learning. It analyzes the pictures according to colors, vividness, shapes and so on… We do expect it to fail at some photos. For example with a photo of a burning house, the program would probably say that it’s a beautiful photo because of it’s vivid colors and brightness. 
The concept behind the program is to show how we humans try to teach the program about semantics, but in a logical way so that the machine can understand because machines are based on algorithms. When teaching other humans about art and semantics we only need to use words to describe and express our feelings. This question whether or not it’s ever going to be possible for computers to “have feelings” and be able to judge subjectively like we do. And also questions about how we should teach AI, how much we should expect from it and most importantly - why do we expect it to be as human as possible, to which goals are we striving to achieve from it?

![alt tekst](Analyzer.png) 

**Challenges:**
- How do we teach the computer which picture is the most beautiful one? 
- The technical aspect of making the browser analyse a set of photos in relation of how much blues ex. the photo is made of, does seem like a hard thing to do. But it is a thing we think we are capable of making, but it would take some time. To make the computer able to determine itself we need to make some kind of RGB or HSV checking on pixels. Otherwise we would have to give each picture a predetermined value.
- Another thing worth thinking of, is to choose how many pictures we want the user to be able to choose from - and what this does to the program.
- Do we want the user to be able to upload their own photo, and make the computer analyze the data? Or should we just put in 10 available images, that we have made the computer analyze beforehand? 

### Individual reflections: 
*How are these flow charts different from your own(in terms of the role of a flow chart)?*
These two flow charts are difinitly more simplistic and less technical, since the program is not made yet. But it outlines the idea behind the program and an overview of how it's going to run. My own flow chart was mcuh more detailed - and could certainly be more detailed than that if wanted - since the program is made and every detail is decided beforehand. So all in all these flow charts have their different roles: one type is to inform the reader about an idea outline, and the other type is to inform the reader about the program and its properties and components.

*If you have to bring the concept of algorithms from flow charts to a wider cultural context, how would you reflect the notion of algorithms? (see if you could refer to the text and articulate your thoughts?)*

Algorithms are a recipe for how a machine should solve a solution. And a flow chart is a way to show these algorithms and thereby disposing the code so that it no longer is hidden and secretive but totally tranparent. It breaks down the proces of the program and "translates" all the complex details to simple sentences or words inside boxes connected by lines and arrows:
>“[A flow chart] shows the constraints on the system, its system boundaries and the general flow of information around the system. It is a common means of understanding complex data flows around a system within computer science and software engineering… Flowcharts are very simple diagnostic and modeling structures that follow the logic of the program through a series of linear processes with decision gates, where a yes or no answer is expected, to guide the software to a certain resolution or output.” (Berry 2011, pp. 113-114)

But this transparentcy and simplicity of computational systems that flow charts give us are not making us more understandable to what codes and algorithms are and how they work. Even though we are growing more and more familiar with these algorithms or *cultural machines* as Ed Finn calls them, we get them served on a silver plate and don't really bother to think about *how* they work but merely "belive in the magic":
>"We believe in the power of code as a set of magical symbols linking the invisible and visible, echoing our long cultral tradition of logos, or language as an underlying system of order and reason, and its power as a kind of sourcery. We believe in the elegant abstractions of cybernetics and, ultimately, the computational universe - that algorithms embody and reproduce the mathematical substrate of reality in culturally readable ways." (Finn 2017, p.34)
>"But every abstraction has a shadow, a puddled remainder of context and specificity left behind in the act of lifting some idea to a higher plane of thought" (Finn 2017, p.24)



