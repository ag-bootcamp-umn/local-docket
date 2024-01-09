// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const currentDay = $('#currentDay');

const today = dayjs();
const now = today.hour();

console.log(now);

const hourBlocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM" ];


function createBlocks() {
  $.each(hourBlocks, function(i, hour) {
    const realHour = i + 9;
    let timeClass;
    if (realHour < now) {
      timeClass = 'past';
    } else if (realHour > now) {
      timeClass = 'future';
    } else {
      timeClass = 'present';
    }
    $('.planner').append(`
    <div id="hour-${realHour}" class="row time-block ${timeClass}">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
    `)
  });
}

function displayDate() {
  currentDay.text(today);
  // FORMAT THIS!!!
}

$( document ).ready(function () {
    
  displayDate();
  createBlocks();
  $('.planner').on('click', function(e) {
    if ($(e.target).hasClass('saveBtn')) {
      const parentId = $(e.target).parent().attr('id');
      const userInput = $(`#${parentId}`).children('textarea').val();
      console.log(userInput);

      const scheduleData = JSON.parse(localStorage.getItem('scheduleData') || '[]');
      const currentInput = {
        id: parentId,
        input: userInput
      };

      scheduleData.push(currentInput);
      localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
      // push the value of the input to local storage

      // function setValue()
    }
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
  });