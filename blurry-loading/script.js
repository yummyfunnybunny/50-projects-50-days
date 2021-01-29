// Element Selectors
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// Initialize Variables
let load = 0; // this stores the current load amount
let int = setInterval(blurring, 30); // this sets the interval for load incrementing

// ANCHOR -- Functions --

// Blurring
function blurring() {
  // incrememt load
  load++;

  // Stop the incrementing at 100
  if (load > 99) {
    clearInterval(int);
  }

  // Set the loading text on the screen to match the load variable
  loadText.innerText = `${load}%`;
  // map the loading text opacity to the load var so it goes to zero as load goes up
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // map the blur of the background so blur reaches 0 once load reaches 100
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(scale(30, 0, 100, 1, 0));
}

// Map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
// >> OR <<
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
