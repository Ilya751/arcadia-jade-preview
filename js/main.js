const slogan = document.querySelector(".slogan");
const sloganText = document.querySelector(".slogan__text");

slogan.addEventListener("mouseenter", () => {
    sloganText.classList.add("is-visible");
});

const cards = document.querySelectorAll(".card");

if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("active");
    });
  });
}