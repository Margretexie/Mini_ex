# :snowflake: Winter Wonder Land :snowflake:
![alt tekst](Udklip.PNG) 
## Game Instructions:
Watch out for the snow! It's getting heavier and heavier! Don't let the snow fall on your head, you'll get brainfreez! 

Dodge them by using the **LEFT** and **RIGHT** arrow, stop moving by using the **DOWN** arrow.

**Tip:** Going off screen teleports you to the other side of the screen.

[Start the game already!](https://rawgit.com/Margretexie/Mini_ex/master/mini_ex5/empty-example/index.html)

## The Program
Before I started programming this game I had tons of ideas. It was hard to settle with just one idea, and it was also hard to measure/feel in advance how difficult and detailed the game should be and where my programming skills would limit me to. So I started out with a simple concept of "a game like dodge ball" (which explains why the snowflakes are called "balls" in the code, I just didn't bother to change it). Later on I got inspired by the hateful weather of Denmark in the past two weeks and made a theme of winter and snow - so something good eventually got out of the weather after all!

For this game I've made two classes: ```class player``` and ```class ball```. This made it easier for me to change the attributes of the player and balls like position, size, color and speed. The player has two functions: ```.show``` (a bunch of circles) and ```.move```(a bunch of if-statements). The balls have three functions: ```.show``` (one circle), ```.drop``` (y-position changed by speed) and ```.hit``` (if-statement that triggers when the distance between the snowflake and head is under the sum of the snowflake and head's radius).

The game also has a leveling system. It starts at level 1 and goes up a level everytime framecount reaches 320 (which is every 5 seconds). For each level the player reaches, one extra snowflake is added. So on level 6 for example, there will be 6 snowflakes to dodge and so on... This is done by calling upon the functions of the balls in a for-loop. I've set the maximum level to 150 which is absurd and doesn't make sense. But since I havn't made any "You win" situation it doesn't really matter what the max level is. So the point of the game is just to get as high level as you can (I've only managed to make it to level 25).

In my html file I've imported three libraries: ```p5.play```, ```p5.sound``` and ```p5.dom```. But actually I've only used p5.sound...
 - I wanted to experiment with p5.play but it seemed to be too much effort, and I feared that it wouldn't work well with p5 objects instead of sprites. But if I had the time to create my own sprites and animations then p5.play would no doubt be a very nice library to use. 
 - I also wanted to use p5.dom to create buttons like "reset" or "music off", but I struggle with it to work for a very long time and in the end I had to give up since it was just a little detail that was "nice to have". 
 - I've also struggle a bit with the p5.sound. I want the music to start over once it's finished playing but I couldn't get that to work well either. I tried the ```loop()``` function, but it made the music sound weired for some reason...
## Object-oriented Programming
OOP is characterized by using and manipulating objects. These object are created based on a "blueprint" or "template" called class. This class is what decides which overall attributes and functions the object should have. But each object can be unique in their own details:
>"An object inherits most of its attributes from its class, but these attributes may differ amongst the object instances of that class" *(Roger Lee)*

OOP is based on an act of abstraction since the programmer is the one deciding which attributes and which functions are needed:
>"...capturing and focusing on the important details, while leaving out those that are less important"*(Roger Lee)*

## The Wider Context
**Extend/connect your game project to wider digital culture context, can you think of a digital example and describe how complex details and operations are being abstracted and encapsulated?**

Well, I would argue that every piece of software is an act of abstraction and encapsulation. Instead of reading and writing 0s and 1s we've made up computer languages that we humans can understand, and these languages are the foundation of software. But looking at more specifik instances of examples we can just look at the throbber which abstracts the notion of processing. Or the metaphors we've made like "desktop, files, trash bin...", these are words that cover up the details of how the computer works, and gives us a simple conseptual understanding of how we assume it works. We can also look at all the symbols we see on our devices, by implementing everywhere we've universalized them to have a specific meaning. For example everyone know that the symbol of a magnifying glass means "search". Data is being abstracted from us since we never know when it's being captured and what is being captured.

All these things have formed the way we see and understand things. And this fact can be critiqued by saying "Who've had the authority to decide how I percept the world? I should have the freedom to choose how I understand things!"
A lot of debates can be drawn from this. Like wether or not gender-selection on facebook should have more choices than just male and female. Or all the regulations about personal data protection - is the data buisness violating our freedom?
