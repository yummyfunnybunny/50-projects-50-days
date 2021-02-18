const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
let idx = 0;
speedDemoninator = 300;
let speed = speedDemoninator / speedEl.value;
const endTime = 2000;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    resetText();
  } else {
    setTimeout(writeText, speed);
  }
}

speedEl.addEventListener(
  "input",
  (e) => (speed = speedDemoninator / e.target.value)
);

function resetText() {
  console.log("resetText...");
  setTimeout(() => {
    idx = 1;
    writeText();
  }, endTime);
}
