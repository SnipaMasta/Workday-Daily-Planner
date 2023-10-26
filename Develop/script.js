// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentTime = dayjs();
  $("#time").text(currentTime.format("hh:mm:ss"));

  var date = dayjs();
  $("#date").text(date.format("D MM, YYYY"));

  setInterval(function () {
    let date = dayjs();
    $('#date').text(date.format('MM/d/YYYY'))
    let currentTime = dayjs();
    $('#time').text(currentTime.format('hh: mm: ss'))
  }, 1000);
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

var hourX = dayjs().format('H');
//dayjs.org
//getbootstrap.com
//jqueryui.com

if (hourX > 9) {
  $('#hour-9').addClass('past')
} else if (hourX == 9) {
  $('#hour-9').addClass('present')
} else {
  $('#hour-9').addClass('future')
}

if (hourX > 10) {
  $('#hour-10').addClass('past')
} else if (hourX == 10) {
  $('#hour-10').addClass('present')
} else {
  $('#hour-10').addClass('future')
}

if (hourX > 11) {
  $('#hour-11').addClass('past')
} else if (hourX == 11) {
  $('#hour-11').addClass('present')
} else {
  $('#hour-11').addClass('future')
}

if (hourX > 12) {
  $('#hour-12').addClass('past')
} else if (hourX == 12) {
  $('#hour-13').addClass('present')
} else {
  $('#hour-13').addClass('future')
}

if (hourX > 13) {
  $('#hour-13').addClass('past')
} else if (hourX == 13) {
  $('#hour-13').addClass('present')
} else {
  $('#hour-13').addClass('future')
}

if (hourX > 14) {
  $('#hour-14').addClass('past')
} else if (hourX == 14) {
  $('#hour-14').addClass('present')
} else {
  $('#hour-14').addClass('future')
}

if (hourX > 15) {
  $('#hour-15').addClass('past')
} else if (hourX == 15) {
  $('#hour-15').addClass('present')
} else {
  $('#hour-15').addClass('future')
}

if (hourX > 16) {
  $('#hour-16').addClass('past')
} else if (hourX == 16) {
  $('#hour-16').addClass('present')
} else {
  $('#hour-16').addClass('future')
}

if (hourX > 17) {
  $('#hour-17').addClass('past')
} else if (hourX == 17) {
  $('#hour-17').addClass('present')
} else {
  $('#hour-17').addClass('future')
}