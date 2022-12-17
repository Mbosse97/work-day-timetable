// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO
// Call day.js API to get date at top of page                DONE
// Add additional business hours blocks for each hour of the working day 9am-5pm         DONE
// compare each time hour block with the current time and change style of block based on if it has been passed      DONE
// set save button to store input data into local storage so it remains even after refresh

var currentDate = dayjs().format("dddd, MMMM D");
console.log(currentDate);

var today = $("#currentDay");

today.text(currentDate);

var currentTime = dayjs().format("HH:mm:");
console.log(currentTime);



$(function () {
  var divElement = $("div.row");

  console.log(divElement);

  for (i = 0; i<divElement.length; i++) {
    
    if (dayjs().format("HH")>i+9) {
      divElement.eq(i).addClass("past")  
    } else if (dayjs().format("HH")==i+9) {
      divElement.eq(i).addClass("present") 
    } else if (dayjs().format("HH")<i+9) {
      divElement.eq(i).addClass("future") 
    }
  }
  
  var buttonEl = $("div").children("button");

  buttonEl.on("click", function () {

    for(i = 0; i = this.length; i++) {
      var textInput = $("div").children("textarea").attr("textContent");
  
      if (textInput(i)!=="") {
        textInput.eq(i) = textInput;
        localStorage.setItem("textInput.eq(i)",textInput);
      } 
  
      textInput = localStorage.getItem("textInput.eq(i)");
    }
  })
  

  // var textInput = $("div").children("textarea").attr("textContent");

  // console.log(textInput);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
