const slogan = document.querySelector(".slogan");
const sloganText = document.querySelector(".slogan__text");

slogan.addEventListener("mouseenter", () => {
    sloganText.classList.add("is-visible");
});