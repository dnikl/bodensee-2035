const scrollTopButton = document.querySelector(".scroll-top");

if (scrollTopButton) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const updateScrollTopButton = () => {
    const visible = window.scrollY > Math.max(500, window.innerHeight * 0.75);
    scrollTopButton.hidden = false;
    scrollTopButton.classList.toggle("is-visible", visible);
    scrollTopButton.setAttribute("aria-hidden", String(!visible));
    scrollTopButton.tabIndex = visible ? 0 : -1;
  };

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", updateScrollTopButton, { passive: true });
  const footer = document.querySelector("footer");
  if (footer && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      scrollTopButton.classList.toggle("is-over-footer", entry.isIntersecting);
      updateScrollTopButton();
    }).observe(footer);
  }
  updateScrollTopButton();
}
