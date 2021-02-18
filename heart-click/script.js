const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  console.log("clicked");
  createHeart(e);
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX; // clientX = mouse_x
  const y = e.clientY; // clientY = mouse_y
  console.log(x, y);

  const offsetTop = e.target.offsetTop;
  const offsetLeft = e.target.offsetLeft;
  console.log(offsetTop, offsetLeft);

  // calculate the x/y position relative to the picture
  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout((el) => {
    heart.remove();
  }, 600);
};
