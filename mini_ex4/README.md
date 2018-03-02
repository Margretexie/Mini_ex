# Data Capture
![alt tekst](throbber.PNG) 

Try moving away from the computer or hide your face.
[Try it out.](https://rawgit.com/Margretexie/Mini_ex/master/mini_ex4/empty-example/index.html)

# So what's this?
This mini_ex captures if anybody is sitting in front of the computer. When it doesn't detect anybody it shows a bunch of 0s and 1s.
Technically this is a fairly simple code. I used createCapture(VIDEO) to start the webcam. To track movement in front of the webcam I downloaded the clm.tracker and referenced to it in the HTML source code. With this I can now use the getScore() element to set the sensitivity of the webcam. When it detects a face which is a perfect fit to the face model, the score will be 1. And when no face is detected the score will be 0. 



# So what's the point?
How might this ex helps you to think about or understand the data capturing process in digital culture?
This mini_ex shows us that the computer is ALWAYS collecting data even when you're not looking
