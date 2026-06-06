const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".section-reveal");
const fadeOnScrollElement = document.querySelector("[data-fade-on-scroll]");
const filterButtons = document.querySelectorAll(".filter-button");
const projectItems = document.querySelectorAll(".work-item");

if (prefersReducedMotion) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function updateIntroFade() {
  if (!fadeOnScrollElement || prefersReducedMotion) {
    return;
  }

  const fadeDistance = Math.max(window.innerHeight * 0.45, 260);
  const progress = Math.min(window.scrollY / fadeDistance, 1);
  fadeOnScrollElement.style.opacity = String(1 - progress);
  fadeOnScrollElement.style.transform = `translateY(${-24 * progress}px)`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));

    projectItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

window.addEventListener("scroll", updateIntroFade, { passive: true });
window.addEventListener("resize", updateIntroFade);
updateIntroFade();
