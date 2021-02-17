const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX; // x-coordinate of the click on the button
    const y = e.clientY; // y-coordinate of the click on the button
    // console.log(x, y);

    const buttonTop = e.target.offsetTop; // y-coordinate of the top of the button
    const buttonLeft = e.target.offsetLeft; // x-coordinate of the left side of the buttom
    // console.log(buttonTop, buttonLeft);

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
