
// jQuery ready function that runs onces the browser finished rending all the elements in the html.
$(document).ready(function () {

  //global variables. var today and hour are using dayjs() functions and formated differently.
  var today = dayjs().format('dddd	MMM D, YYYY');
  var hour = dayjs().format('H');
  
  //selects the element with the class .time-block
  var timeBlocks = $('.time-block');

//calls the update functions
  update();

//calls the update functions every minute
  setInterval(function() {update()},60000);

  // targets the element with id currentDay and add text to it
  $('#currentDay').text(today);

  // adds event listener to all elements with class btn. When clicked the id of the parent element the value of the text field is saved to localstorage
  $('.btn').on('click', function () {
    var id = $(this).parent().attr('id');
    var task = $(this).siblings(".description").val();
    localStorage.setItem(id, task);
  });



//update function.
  function update() {
    // for loop goes though all the elements with class timeBlocks.
    for (let index = 0; index < timeBlocks.length; index++) {
      //get the id of the selected element
      var id = $(timeBlocks[index]).attr('id');
      //slices the string and only takes the last 2 characters. It then converts the string to a number.
      var idnum = parseInt(id.slice(5, 7));

      //removes 3 classes from the timelock
      $(timeBlocks[index]).removeClass('present future present');
      
      
      
      
      if (idnum < hour) {
        // $(timeBlocks[index]).removeClass('present future');
        // $(timeBlocks[index]).addClass('row time-block past');
        $(timeBlocks[index]).addClass('past');
      }
      else if (idnum == hour) {
        // $(timeBlocks[index]).removeClass();
        // $(timeBlocks[index]).addClass('row time-block present');
        $(timeBlocks[index]).addClass('present');

      }
      else {
        // $(timeBlocks[index]).removeClass();
        // $(timeBlocks[index]).addClass('row time-block future');
        $(timeBlocks[index]).addClass('future');

      }
      $(timeBlocks[index]).find('.description').val(localStorage.getItem(id));
    };
  };

});







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

