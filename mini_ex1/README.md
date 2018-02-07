# Happy Face

![alt tekst](Udklip.PNG)
 
**URL:** https://rawgit.com/Margretexie/Mini_ex/master/mini_ex1/empty-example/index.html
 
## My first independent coding process
In this code I basiclly just drew som shapes and filled them with colors
 
**Setup**
First I had to figure out the coordinate system and learn what the ratio between pixels and the canvas was by setting different sized canvases. I ended up making a canvas sized 500x500, and I ended up liking to work with this size, I'm not really sure why (maybe because it's easy to divide in 2, 4 or 5?)
 
**Draw**
I then tried out the all the different shapes that can be drawn(*ellipse(),traiangle(),arc()*), and startet to want to draw a face (I like drawing cartoony faces). This was a good practise for getting to know what the numbers in the parentheses mean(x,y,w,h).
To give the face more sense of life I figured out how to fill the shapes with color using *fill()*, and leanred how to adjust the RGB variables. And I also learned how to hide the strokes of the shapes using *noStroke()*.
I was a little confused by the *background()* setting. I first thought that it should be put under the draw function, but it just made my other shapes dissapear. And then I tried putting the background under the setup function, and then it worked. It was not before the next day I learned (thanks to our dear Shiffman) that the draw function continuesly draws in loops that goes forever, and therefore the background will also be drawn forever.
