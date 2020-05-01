//supporting documentation https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f
//********OPEN CALENDER ************* */
//Generate current day
//Generate time blocks to user




//**********TIMEBLOCKS FOR THAT DAY ************ */
//9AM through 5PM


//******************ENTER THE EVENT TO THE CALENDER******* */
//on click on the time block
//pulled .on(click) from onclick activity in week 5
$(document).ready(function () {
    $("#click-me").on("click", function () {
        alert("I've been clicked!");
    });
});

//************SAVE THE EVENT TO CALENDAR ********* */
//Save Button appends the entered text to the timeblock


//**************LOCAL STORAGE ********************* */
//Save button sends the entered text to local storage
