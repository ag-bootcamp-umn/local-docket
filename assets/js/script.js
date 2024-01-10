const currentDay = $("#currentDay");

const today = dayjs();
const now = today.hour();

const hourBlocks = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

function displayDate() {
  currentDay.text(today.format("dddd, D MMMM"));
}

function createBlocks() {
  $.each(hourBlocks, function (i, hour) {
    const realHour = i + 9;
    let timeClass;
    if (realHour < now) {
      timeClass = "past";
    } else if (realHour > now) {
      timeClass = "future";
    } else {
      timeClass = "present";
    }
    $(".planner").append(`
    <div id="hour-${realHour}" class="row time-block ${timeClass}">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
    `);
  });
}

function fillBlocks() {
  const scheduleData = JSON.parse(localStorage.getItem("scheduleData") || "[]");
  $(scheduleData).each(function (i, val) {
    const blockId = val.id;
    $(`#${blockId}`).children("textarea").val(val.input);
  });
}

function setValues() {
    const parentId = $(this).parents(".time-block").attr("id");
    const userInput = $(`#${parentId}`).children("textarea").val();
    const scheduleData = JSON.parse(
      localStorage.getItem("scheduleData") || "[]"
    );
    const currentInput = {
      id: parentId,
      input: userInput
    }

    scheduleData.push(currentInput);
    localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
  
  fillBlocks();
}

$(document).ready(function () {
  displayDate();
  createBlocks();
  fillBlocks();
  $(".planner").on("click", ".saveBtn", setValues);
});
