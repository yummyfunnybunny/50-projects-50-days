window.addEventListener("load", () => {
  console.log("window loaded..");
  // ANCHOR -- Event Listeners --
  const cards = document.querySelectorAll(".card");

  cards.forEach((el) => {
    console.log("cards.forEach");
    el.addEventListener("click", activateCard);
  });

  // ANCHOR -- Functions --
  function activateCard() {
    console.log("activateCard");
    this.classList.add("card-active");
    deactivateCards(this);
  }

  function deactivateCards(card) {
    console.log(card);
    cards.forEach((el) => {
      console.log(el);
      if (el != card) {
        el.classList.remove("card-active");
        console.log("deactivateCards");
      }
    });
  }
});
