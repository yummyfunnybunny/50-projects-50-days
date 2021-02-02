const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// fetch a new joke whener the button is pressed
jokeBtn.addEventListener("click", generateJoke);

// get a joke to render to the screen
generateJoke();

// ANCHOR -- Async/Await Version --
async function generateJoke() {
  // set the configuration of the fetch
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  // make the fetch request
  const res = await fetch("https://icanhazdadjoke.com", config);
  console.log({ res });

  // turn the response into json
  const data = await res.json();
  console.log({ data });

  // render the fetched joke into the screen
  jokeEl.innerHTML = data.joke;
}

// ANCHOR -- Fetch Version --
// function generateJoke() {
//   const config = {
//     headers: {
//       accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       jokeEl.innerHTML = data.joke;
//     });
// }
