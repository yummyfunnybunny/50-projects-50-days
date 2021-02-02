const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopSounds() {
  // loop through all sound elements
  sounds.forEach((el) => {
    // select the current interation of sound element
    const sound = document.getElementById(el);

    // pause the sound
    sound.pause();
    // set the sound back to the begining
    sound.curentTime = 0;

    // **there is no method for 'stopping' a sound in the traditional sense
  });
}
