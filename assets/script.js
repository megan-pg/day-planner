//supporting documentation https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f
//********OPEN CALENDER ************* */
//Generate current day
// the code from moment.js for day and time generation
$(document).ready(function () {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    today.append();
})
var date = $("#date-field");
date.text(today);
//Generate time blocks to user IN HTML???????




//**********TIMEBLOCKS FOR THAT DAY ************ */
//9AM through 5PM
//save buttons
//current hour color
//past hour color
//future hour color


//******************ENTER AND EDIT THE EVENT TO THE CALENDER******* */
//text enter field
//append text to timeblock
//Delete appended text Function


//on click on the time block
//pulled .on(click) from onclick activity in week 5
$(document).ready(function () {
    $("#click-me").on("click", function () {
        alert("I've been clicked!");
    });
});

//************SAVE THE EVENT TO CALENDAR ********* */
//Save Button appends the entered text to the timeblock
//on click save button to push to local storage


//**************LOCAL STORAGE ********************* */
//Save button sends the entered text to local storage
