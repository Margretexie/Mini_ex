# Generativity
![alt tekst]() 
[Try it](https://rawgit.com/Margretexie/Mini_ex/master/mini_ex6/empty-example/index.html)
# Rules

# The program over time - what's been generated
The program is made by creating a class called 'Fan'. I felt that making a class would give me more freedom to change and experiment with differen parameters and probably also more structure in my code. The class has three functions: show, move and change. These three functions are the cornerstones of the program's rules:
 - Show: The program generates a certain amount of half transparen arcs at random coordinates, and has different shades of blue and green. 
 - Move: These arcs are jiggling/moving randomly and thus creates a dynamic cloud/heatmap effect.
 - Change: The colors of the arcs can be affected by moving the mouse to the left or right. Moving the mouse to the right adds a number of red in the color code
 
Something I struggled with in this mini_ex was my tendency to hardcode some of the parameters. This created a lot of extra work because changing these numbers later on in the programming process caused unwanted results. So by changing one number I had to change a lot of other numbers too. It would have been better if I could use more variables and math equations to secure the right result throughout the code.
 
Besides these rules I've also made a function that refreshes the program when "shake" your mouse or moves it quickly across the screen. This function might be quite redundant since the program is always changing shape. It's probably a bit overkill to make this trigger function - It's could have been a lot easier - But I just wanted to experiment with it in order to come up with something more interesting than mousePressed or keyPressed. Maybe I'll use this in another program.


# Understanding generativity
I think this program shows us what Galanter is talking about generativity:
>"Generative art refers to any art practice where the artist uses a system, such as a set of natural languages, rules, a computer program, a machine or other procedural invention, which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art" - Phillip Galanter, 2003

This program contains A LOT of random() syntax and thus generates unpredictable outcomes. But at the same time, the code is controllable because of the rules that are set up from the beginning. Looking at generativity from these two views creates the notion of "co-authorship": The programmer is the one who started the making of the rules, but the computer is the one following the rules, visualizing the rules and decides how the outcome should be in the end(often without the programmer knowing the outcome beforehand).
