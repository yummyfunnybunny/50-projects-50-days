// Element Selectors
const boxes = document.querySelectorAll(".box");

// Event Listeners
window.addEventListener("scroll", checkBoxes);

// Check boxes as soon as the window loads
checkBoxes();

// Check Boxes Function
function checkBoxes() {
  // Sets the point on the viewport that we want to trigger the event
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);

  // Checks the top Y position of each box to see if it is lower
  // than the trigger point
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    // Turn the box to 'show'
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      // Turn the box to no-show
      box.classList.remove("show");
    }
  });
}
