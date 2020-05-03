//supporting documentation https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f
//********OPEN CALENDER ************* */
//Generate current day
// the code from moment.js for day and time generation
$(document).ready(function () {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(moment)
    var date = $("#date-field");
    console.log(date)
    date.text(today);
})


//**********TIMEBLOCKS FOR THAT DAY ************ */
//9AM through 5PM
//save buttons
//current hour color
//past hour color
//future hour color
//Generate time blocks to user IN HTML???????


for (var i = 8; i <= 18; i++) {
    var hourTime = moment(i, "HH:mm:ss").format("h:mm:ss a");
    var timeDisplay;
    if (localStorage.getItem(moment(i, "HH:mm:ss").format("h:mm:ss"))) {
        timeDisplay = localStorage.getItem(moment(i, "HH:mm:ss").format("h:mm:ss"));
    } else {
        timeDisplay = "";
    }
    //Trying to append per https://api.jquery.com/append/ and Class activities
    $("#date-field").append(`
    <div class="row">
    <div class="hour">${hourTime}</div>
    <textarea class="textarea">${event}</textarea>
    <button class="saveBtn">'Save'</button>
   // </div>
`)
    console.log("#date-field".append);
}
// createRow = function () {
//     var tRow = $('<tr>');

//     var timeTd = $('<td>').text;
//     var textAreaTd = $('<td>').text;
//     var saveTd = $('<td>').text;

//     tRow.append(timeTd, textAreaTd, saveTd);
//     // Append the table row to the table body
//     $('tbody').append(tRow);

// };



//******************ENTER AND EDIT THE EVENT TO THE CALENDER******* */
//text enter field
//append text to timeblock
//Delete appended text Function


//on click on the time block
//pulled .on(click) from onclick activity in week 5
// $(document).ready(function () {
//     $("#click-me").on("click", function () {
//         alert("I've been clicked!");
//     });
// });

//************SAVE THE EVENT TO CALENDAR ********* */
//Save Button appends the entered text to the timeblock
//on click save button to push to local storage
$(document).on("click", ".saveBtn", function () {
    var hour = $(this).prev().attr("hour");
    var event = $(this).prev().val();

    localStorage.setItem(hour, event);

});
// $(document).on("click", "saveBtn", function () {
//     console.log(document);
//     console.log(saveBtn);
//     if ($("input").first().val() === "correct") {
//         $("span").text("Validated...").show();
//         return;
//     }

//     $("span").text("Not valid!").show().fadeOut(1000);
//     event.preventDefault();
// });
//     $(document).on('click', function (event) {
//         localStorage.setItem('saved-text', JSON.stringify(savedEvent));
//     });
// }
// function saveText(text) {
//     // store the score, number of boxes, and the time in local storage

//     // create a new score object with the three values that we want
//     var enterdText = {
//         text: [], //get the name from an input field
//     };

//     // add this saved string to the current scores
//     // get all of the current scores from local storage
//     var textField = getText();
//     // push our scoreObject onto the existing scores array
//     enteredText.push(text);
//     // JSON.stringify to turn our array into a string
//     var textJSON = JSON.stringify(textField);
//     console.log(textJSON)
//     // store our new JSON string in local store
//     localStorage.setItem('event', textJSON);
// }


//**************LOCAL STORAGE ********************* */
//Save button sends the entered text to local storage
