// ANCHOR -- Element Selectors --
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// ANCHOR -- Event Listeners --
next.addEventListener("click", increaseActive);
prev.addEventListener("click", decreaseActive);

// SECTION -- Functions --

// ANCHOR -- Increase Actives --
function increaseActive() {
  // increase currentActive
  currentActive++;

  // Prevent currentActive from exceeding the max number of steps
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // update the progress bar
  updateProgressBar();
}

// ANCHOR -- Decrease Actives --
function decreaseActive() {
  // decrease currentActive
  currentActive--;

  // Prevent currentActive from exceeding the minimum allowed
  if (currentActive < 1) {
    currentActive = 1;
  }

  // update the progress bar
  updateProgressBar();
}

// ANCHOR -- Update Progress Bar --
function updateProgressBar() {
  // cycle through the circles node list
  circles.forEach((circle, index) => {
    // if the index is less than currentActive...
    if (index < currentActive) {
      // add the active class
      circle.classList.add("active");
    } else {
      // otherwise, remove the active class
      circle.classList.remove("active");
    }
  });

  // set the apropriate length of the progress bar based on the active circles
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // set the buttons to disabled depending on currentActive
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
