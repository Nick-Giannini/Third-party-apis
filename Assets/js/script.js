
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
  setInterval(function () { update() }, 60000);

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

      //removes 3 classes from the timeblock
      $(timeBlocks[index]).removeClass('present future present');



      // if else statements compared the assigned hour id to the current time and add the corrisponding class
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
      //if there is an value in local storage that matched the id of the element it sets that values to the child element with the class description
      $(timeBlocks[index]).find('.description').val(localStorage.getItem(id));
    };
  };

});
