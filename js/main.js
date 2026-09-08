// slogan

const slogan = document.querySelector(".slogan");
const sloganText = document.querySelector(".slogan__text");

slogan.addEventListener("mouseenter", () => {
    sloganText.classList.add("is-visible");
});

const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!supportsHover) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sloganText.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1.0,
    }
  );

  observer.observe(slogan);
}

// cards

const cards = document.querySelectorAll(".card");

if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("active");
    });
  });
}

// opera browser autoplay fix

const heroVideo = document.querySelector('.header__video');

function forcePlay() {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  const p = heroVideo.play();
  if (p !== undefined) p.catch(() => {});
}

if (heroVideo.readyState >= 3) {
  forcePlay();
} else {
  heroVideo.addEventListener('loadeddata', forcePlay, { once: true });
}

['touchstart', 'click'].forEach(evt =>
  document.addEventListener(evt, () => {
    if (heroVideo.paused) heroVideo.play().catch(() => {});
  }, { once: true, passive: true })
);