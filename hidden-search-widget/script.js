const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// event listener
btn.addEventListener("click", toggleActive);

// toggle class function
function toggleActive() {
  search.classList.toggle("active");
  input.focus();
}
