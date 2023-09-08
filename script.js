const weekday = [
  "Sunday,",
  "Monday,",
  "Tuesday,",
  "Wednesday,",
  "Thursday,",
  "Friday,",
  "Saturday,",
];

const d = new Date();
//loop through array to get day
let day = weekday[d.getDay()];

//get time in millisecond
const milliseconds = d.getUTCMilliseconds();

const date = document.getElementById("date");
const time = document.getElementById("time");

//display date in p tag with id of date
date.innerHTML = day;

time.innerHTML = milliseconds;
