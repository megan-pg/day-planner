# day-planner
This application should allow the user to enter text into a textarea and save
it into local storage. The local time should be displayed at the top of the page
and the current time should be highlighted with one color, time slots in the 
past should be highted with a second color, and future events should be 
highlighted in a third color. 

I started this project trying to make HTML rows and td's in the HTML code
 directly as that is where I feel most comfortable and was hoping I could 
 manipulate each class of element through Javascript.

 I started with my own constructed rows and columns based on the grid system we 
 learned back in the portfolio homework. I then moved to a Bootstrap form that 
 I customized to fit my needs. It looked great, but as I played with the 
 jquery, I couldn't figure out the connection between the two. I later on 
 realized my divs were housed in one another that was probably affecting the 
functionality/communication between the two and could have probably made it
work somehow, but my biggest concern was trying to get the past, present, and
future colors to recognize the time if I mannually entered it into the HTML
 document. I bet there is a way to make id's for each for and run a for loop 
 or for each, but that is beyond me right now, but I hope to learn it. 

 Because I was struggling to get my on.click to occur with the Bootstap forms, 
 I moved over to appended jquery attributes. I was able to assemble a for loop
that created a row containing a time section, textarea, and save button and
append it to the document based on time, which I set betwen 8AM and 6PM. 

My on.click for my save button works. It however is not storing the text in 
local storage and keeping it appended to the text area. I will work with my
 tutor regarding this as I tried several different ways to make local storage
occur, including going back to javascript, just so it would happen and that
wasn't working either (I was able to accomplish this in the java-quiz homework,
so I'm missing something with how I'm connecting the text area to my local
storage function).

I wasn't able to make the textareas highlight either, so I will work more on 
that - I have been struggling (even during class) to make color changes through 
jquery animate, so I will seek out more personalized attention to figure it out.

I styled the schedule to be spring-like and softer on the eyes. 