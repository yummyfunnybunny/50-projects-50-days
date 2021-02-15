// query selectors
const toggleButtons = document.querySelectorAll(".faq-toggle");

// event listeners
toggleButtons.forEach((el) => {
  el.addEventListener("click", toggleActive);
});

// functions
function toggleActive() {
  this.parentNode.classList.toggle("active");
}
