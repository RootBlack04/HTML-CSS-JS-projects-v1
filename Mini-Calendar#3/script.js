const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");


const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("en", { month: "long" });
dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();


//   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

// //console.log(
//   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
// );

// me and gpt 😊
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Add leading zeros to hours, minutes, and seconds if they are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Combine hours, minutes, and seconds into a single string
  var timeString = hours + ":" + minutes + ":" + seconds;

  //------------------------
  //Find the p element with the id 'clock'
  const hourEl = document.getElementById("fullHour");

  // Set the text of the p element to the time string
  hourEl.textContent = timeString;

  // Display the time string in the console (or you can set it to any element on your webpage)
  //console.log(timeString);

  // Call updateClock every 1000 milliseconds (1 second) to update the time
  setTimeout(updateClock, 1000);
}


// Call the function to start the clock when the window loads
window.onload = updateClock;
// Call the function to start the clock
// updateClock();

